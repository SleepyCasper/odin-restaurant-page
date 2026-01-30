import { clearContent } from "./utils.js";

export function initPage (content, callbacks) {
    clearContent(content);
    const { onBook, onMenu } = callbacks;

    content.classList.add("content-home")
    content.innerHTML = `
    <div class="text">
        <h1>Best food for your taste</h1>
        <p>Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.</p>
    </div>
    <div class="buttons">
        <button type="button" id="book-home" class="btn-red">Book A Table</button>
        <button type="button" id="menu-home" class="btn-red">Explore Menu</button>
    </div>`;

    document.getElementById("book-home").addEventListener('click', onBook);
    document.getElementById("menu-home").addEventListener('click', onMenu);


}