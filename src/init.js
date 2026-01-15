import { clearContent } from "./utils.js";

export function initPage (content) {
    clearContent(content);

    content.classList.add("content-home")
    content.innerHTML = `
    <div class="text">
        <h1>Best food for your taste</h1>
        <p>Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.</p>
    </div>
    <div class="buttons">
        <button type="button">Book A Table</button>
        <button type="button">Explore Menu</button>
    </div>`;
}