import { Header } from '../components/Header.js';
import { Footer } from '../components/Footer.js';

export function LoginLayout(content) {
    const container = document.createElement('div');
    const header = Header();
    const footer = Footer();

    container.appendChild(header);
    container.appendChild(content);
    container.appendChild(footer);

    return container;
}