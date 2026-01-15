import { clearContent } from "./utils.js";

export function renderAbout(content) {
    clearContent(content);

    content.classList.add("content-about");
    content.innerHTML = `
    test
    `
}