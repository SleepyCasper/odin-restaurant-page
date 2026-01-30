import { clearContent } from "./utils.js";

import imgEggs from './media/img/menu-eggs.png';
import imgPizza from './media/img/menu-pizza.png';
import imgCocktail from './media/img/menu-cocktail.png';
import imgCake from './media/img/menu-cake.png';
import imgLemonade from './media/img/menu-lemonade.png';
import imgIcecream from './media/img/menu-ice-cream.png';
import imgBurger from './media/img/menu-burger.png';
import imgWaffles from './media/img/menu-waffles.png';

import appDeliveroo from './media/img/menu-deliveroo.png';
import appDidifood from './media/img/menu-didifood.png';
import appDoordash from './media/img/menu-doordash.png';
import appFoodpanda from './media/img/menu-foodpanda.png';
import appGrubhub from './media/img/menu-grubhub.png';
import appInstacart from './media/img/menu-instacart.png';
import appJusteat from './media/img/menu-just-eat.png';
import appPostmates from './media/img/menu-postmates.png';
import appUber from './media/img/menu-uber.png';

export function renderMenu(content) {
    clearContent(content);

    content.classList.add("content-menu");
    content.innerHTML = `
    <div class="menu">
        <h1 class="title">Our Menu</h1>
        <p>We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
        <div class="buttons">
            <button type="button" class="selected">All</button>
            <button type="button">Breakfast</button>
            <button type="button">Main Dishes</button>
            <button type="button">Drinks</button>
            <button type="button">Desserts</button>
        </div>
        <div class="dishes">
            <div class="dish-card" style="background-image: url(${imgEggs})">

                <h3 class="cost">$ 9.99</h3>
                <p class="dish-name">Fried Eggs</p>
                <p class="description">Two farm-fresh eggs fried to perfection and served with aromatic garden basil.</p>

            </div>
            <div class="dish-card" style="background-image: url(${imgPizza})">

                <h3 class="cost">$ 15.99</h3>
                <p class="dish-name">Pepperoni Pizza</p>
                <p class="description">Oven-fresh pizza featuring bubbling mozzarella and zesty pepperoni.</p>

            </div>
            <div class="dish-card" style="background-image: url(${imgCocktail})">

                <h3 class="cost">$ 7.25</h3>
                <p class="dish-name">Signature Spritz & Sangria</p>
                <p class="description">Refreshing orange spritz and fruit-filled red sangria, perfect for sharing a celebratory toast.</p>

            </div>
            <div class="dish-card" style="background-image: url(${imgCake})">

                <h3 class="cost">$ 20.99</h3>
                <p class="dish-name">Caramel Cheesecake</p>
                <p class="description">Velvety layered cheesecake with a caramel drizzle, chocolate shavings, and a touch of fresh mint.</p>

            </div>
            <div class="dish-card" style="background-image: url(${imgLemonade})">

                <h3 class="cost">$ 5.89</h3>
                <p class="dish-name">Mint Lemonade</p>
                <p class="description">A chilled, zesty blended lemonade infused with crisp cucumber slices and cooling fresh mint leaves.</p>

            </div>
            <div class="dish-card" style="background-image: url(${imgIcecream})">
                <h3 class="cost">$ 18.05</h3>
                <p class="dish-name">Chocolate Gelato</p>
                <p class="description">Decadent, creamy dark chocolate gelato topped with intense cocoa nibs and chunky chocolate pieces.</p>
            </div>
            <div class="dish-card" style="background-image: url(${imgBurger})">
                <h3 class="cost">$ 12.55</h3>
                <p class="dish-name">Double Burger</p>
                <p class="description">Juicy twin patties with bacon, pickles, and red onion on a toasted sesame seed bun.</p>
            </div>
            <div class="dish-card" style="background-image: url(${imgWaffles})">
                <h3 class="cost">$ 12.99</h3>
                <p class="dish-name">Classic Waffles</p>
                <p class="description">Crispy waffles topped with fresh raspberries, blueberries, and a dollop of whipped cream.</p>
            </div>
        </div>
    </div>

    <div class="delivery">
        <div class="text">
            <h2>You can order through apps</h2>
            <p>Enjoy your favorite meals from the comfort of your home with our convenient delivery partners. Simply find us on your preferred delivery app to browse our full menu and track your order in real-time.</p>
        </div>

        <div class="delivery-apps">
            <div class="group1">
                <button class="app" type="button" style="background-image: url(${appUber})"></button>
                <button class="app" type="button" style="background-image: url(${appGrubhub})"></button>
                <button class="app" type="button" style="background-image: url(${appPostmates})"></button>
            </div>
            <div class="group2">
                <button class="app" type="button" style="background-image: url(${appDoordash})"></button>
                <button class="app" type="button" style="background-image: url(${appFoodpanda})"></button>
                <button class="app" type="button" style="background-image: url(${appDeliveroo})"></button>
            </div>
            <div class="group3">
                <button class="app" type="button" style="background-image: url(${appInstacart})"></button>
                <button class="app" type="button" style="background-image: url(${appJusteat})"></button>
                <button class="app" type="button" style="background-image: url(${appDidifood})"></button>
            </div>
        </div>
    </div>
    `
}