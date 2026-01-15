import "./styles/styles.css";
import { initPage } from "./init.js";
import { renderAbout } from "./about.js";
import { renderMenu } from "./menu.js";
import { renderContact } from "./contact.js";
import { renderBook } from "./book.js";

const RenderHandler = (function() {
    const content = document.getElementById("content");
    const btnAbout = document.getElementById("about");
    const btnHome = document.getElementById("home");
    const btnMenu = document.getElementById("menu");
    const btnContact = document.getElementById("contact");
    const btnBook = document.getElementById("book");

    initPage(content);

    btnHome.addEventListener('click', () => {
        initPage(content);
    })

    btnAbout.addEventListener('click', () => {
        renderAbout(content);
    })
})();


RenderHandler;