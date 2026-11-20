async function run() {
  const res = await fetch('https://veritas-template.framer.website');
  const html = await res.text();

  // Find all sections or main containers
  // Let's look for font families and colors in the styles
  const fontMatches = html.match(/font-family:[^;]+/g) || [];
  const uniqueFonts = [...new Set(fontMatches)].slice(0, 10);
  console.log('Fonts:', uniqueFonts);

  // Let's look for hero structure
  const heroIndex = html.indexOf('Your Legal Matter, Our Priority');
  if (heroIndex !== -1) {
    console.log('--- HERO SNIPPET ---');
    console.log(html.substring(heroIndex - 400, heroIndex + 1200).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' '));
  }

  // Look for About section snippet
  const aboutIndex = html.indexOf('Experienced Attorneys Who Put You First');
  if (aboutIndex !== -1) {
    console.log('--- ABOUT SNIPPET ---');
    console.log(html.substring(aboutIndex - 300, aboutIndex + 1000).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' '));
  }

  // Look for Practice areas
  const practiceIndex = html.indexOf('Legal Solutions Tailored to Your Needs');
  if (practiceIndex !== -1) {
    console.log('--- PRACTICE AREAS SNIPPET ---');
    console.log(html.substring(practiceIndex - 200, practiceIndex + 1200).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' '));
  }

  // Look for Team / Attorneys
  const teamIndex = html.indexOf('Meet the Attorneys Behind Your Case');
  if (teamIndex !== -1) {
    console.log('--- TEAM SNIPPET ---');
    console.log(html.substring(teamIndex - 200, teamIndex + 1200).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' '));
  }
}
run();
