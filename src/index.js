import "./styles/styles.css";
import { initPage } from "./init.js";
import { renderAbout } from "./about.js";
import { renderMenu } from "./menu.js";
import { renderContact } from "./contact.js";
import { renderBook } from "./book.js";
import { fadeTransition } from "./utils.js";

const RenderHandler = (function() {
    const content = document.getElementById("content");
    const btnAbout = document.getElementById("about");
    const btnHome = document.getElementById("home");
    const btnMenu = document.getElementById("menu");
    const btnContact = document.getElementById("contact");
    const btnBook = document.getElementById("book");

    let currentPage = 'home';
    
    const loadHome = () => {
        initPage(content, {
            onBook: () => {
                if (currentPage !== 'book') {
                    currentPage = 'book';
                    fadeTransition(content, () => renderBook(content));
                }
            },
            onMenu: () => {
                if (currentPage !== 'menu') {
                    currentPage = 'menu';
                    fadeTransition(content, () => renderMenu(content));
                }
            }
        });
    };
    loadHome();
    btnHome.addEventListener('click', () => {
        if (currentPage !== 'home') {
            currentPage = 'home';
            fadeTransition(content, loadHome);
        }
    })
    btnAbout.addEventListener('click', () => {
        if (currentPage !== 'about') {
            currentPage = 'about';
            fadeTransition(content, () => renderAbout(content));
        }
    })
    btnMenu.addEventListener('click', () => {
        if (currentPage !== 'menu') {
            currentPage = 'menu';
            fadeTransition(content, () => renderMenu(content));
        }
    })
    btnContact.addEventListener('click', () => {
        if (currentPage !== 'contact') {
            currentPage = 'contact';
            fadeTransition(content, () => renderContact(content));
        }
    })
    btnBook.addEventListener('click', () => {
        if (currentPage !== 'book') {
            currentPage = 'book';
            fadeTransition(content, () => renderBook(content));
        }
    })
    
})();


RenderHandler;