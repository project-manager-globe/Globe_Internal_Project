import { preloadImages } from './utils.js';
import { Panel } from './panel.js';
import Cursor from './cursor.js';

const panels = [...document.querySelectorAll('.panel')];

// Preload all images
preloadImages().then(() => {
    // remove loader (loading class) 
    document.body.classList.remove('loading');
    panels.forEach(panel => new Panel(panel));

    // initialize custom cursor
    const cursor = new Cursor(document.querySelector('.cursor'));

    // mouse effects on all links and others
    [...document.querySelectorAll('a, .panel__item-imgwrap, button')].forEach(link => {
        link.addEventListener('mouseenter', () => cursor.enter());
        link.addEventListener('mouseleave', () => cursor.leave());
    });
});