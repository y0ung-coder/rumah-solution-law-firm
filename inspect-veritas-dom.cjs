async function run() {
  const proc = require('child_process').spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
    '--headless=new',
    '--remote-debugging-port=9222',
    '--disable-gpu',
    'about:blank'
  ]);

  await new Promise(r => setTimeout(r, 2000));

  try {
    const listRes = await fetch('http://127.0.0.1:9222/json/new', { method: 'PUT' });
    const tab = await listRes.json();
    const ws = new WebSocket(tab.webSocketDebuggerUrl);

    await new Promise(resolve => {
      ws.addEventListener('open', () => {
        ws.send(JSON.stringify({ id: 1, method: 'Page.enable' }));
        ws.send(JSON.stringify({ id: 2, method: 'Runtime.enable' }));
        ws.send(JSON.stringify({ id: 3, method: 'Page.navigate', params: { url: 'https://veritas-template.framer.website' } }));
        resolve();
      });
    });

    await new Promise(r => setTimeout(r, 6000));

    // Extract structure
    ws.send(JSON.stringify({
      id: 20,
      method: 'Runtime.evaluate',
      params: {
        expression: `(() => {
          const sections = [];
          document.querySelectorAll('section, [data-framer-name]').forEach(el => {
            const name = el.getAttribute('data-framer-name');
            if (name && ['Hero', 'About', 'Practice Areas', 'Stats', 'Process', 'Testimonials', 'FAQ', 'Contact', 'Blog', 'Footer', 'Navigation'].some(s => name.includes(s))) {
              sections.push({
                name,
                tag: el.tagName,
                text: el.innerText.substring(0, 150).replace(/\\n/g, ' | '),
                bg: window.getComputedStyle(el).backgroundColor,
                color: window.getComputedStyle(el).color
              });
            }
          });
          return JSON.stringify(sections);
        })()`
      }
    }));

    await new Promise(resolve => {
      const handler = (e) => {
        const data = JSON.parse(e.data);
        if (data.id === 20) {
          console.log('SECTIONS DUMP:\n', JSON.stringify(JSON.parse(data.result?.result?.value || '[]'), null, 2));
          ws.removeEventListener('message', handler);
          resolve();
        }
      };
      ws.addEventListener('message', handler);
    });

    ws.close();
  } catch (err) {
    console.error('Inspector error:', err);
  } finally {
    proc.kill();
  }
}
run();
