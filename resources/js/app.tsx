import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

const appName = import.meta.env.VITE_APP_NAME || 'Rumah Solution Law Firm';

createInertiaApp({
    title: (title) => (title ? `${title} — ${appName}` : `${appName} — Adv. Samuel Tambunan, S.Kom., S.H.`),
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.tsx`,
            import.meta.glob('./Pages/**/*.tsx')
        ) as any,
    setup({ el, App, props }) {
        if (!el) return;
        const root = createRoot(el);
        root.render(<App {...props} />);
    },
    progress: {
        color: '#B89B69',
        showSpinner: true,
    },
});
