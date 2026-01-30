import { clearContent } from "./utils.js";

import aboutHero from "./media/img/about-hero.png";
import playIcon from "./media/icons/play.png";
import aboutIcon1 from "./media/icons/about-icon1.svg";
import aboutIcon2 from "./media/icons/about-icon2.svg";
import aboutIcon3 from "./media/icons/about-icon3.svg";
import aboutInfo from "./media/img/about-info.png";
import customImg1 from "./media/img/about-custom-1.png";
import customImg2 from "./media/img/about-custom-2.png";
import customImg3 from "./media/img/about-custom-3.png";

export function renderAbout(content) {
    clearContent(content);

    content.classList.add("content-about");
    content.innerHTML = `
    <div class="hero">
        <div class="card-location">
            <img src="${aboutHero}" alt="card background">
            <div class="container-card">
                <h3>Come and visit us</h3>
                <ul>
                    <li>(414) 857 - 0107</li>
                    <li>happytummy@restaurant.com</li>
                    <li>837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles</li>
                </ul>
            </div>
        </div>

        <div class="text">
            <h2>We provide healthy food for your family.</h2>
            <p>Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.</p>
            <p class="small">At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
        </div>
    </div>

    <div class="presentation">
        <div class="video">
            <img src="${playIcon}" alt="play">
            <h2>Feel the authentic & original taste from us</h2>
        </div>
        <div class="container-present">
            <div class="features">
                <img src="${aboutIcon1}" alt="icon menu">
                <div class="container-text">
                    <p class="title">Multi Cuisine</p>
                    <p>In the new era of technology we look in the future with certainty life.</p>
                </div>
            </div>
            <div class="features">
                <img src="${aboutIcon2}" alt="icon oven">
                <div class="container-text">
                    <p class="title">Easy To Order</p>
                    <p>In the new era of technology we look in the future with certainty life.</p>
                </div>
            </div>
            <div class="features">
                <img src="${aboutIcon3}" alt="icon timer">
                <div class="container-text">
                    <p class="title">Fast Delivery</p>
                    <p>In the new era of technology we look in the future with certainty life.</p>
                </div>
            </div>
        </div>
    </div>

    <div class="info">
        <div class="info-left">
            <div class="text">
                <h2>A little information for our valuable guest</h2>
                <p>At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
            </div>
            <div class="facts">
                <div class="card-fact">
                    <p>3</p>
                    <p>Locations</p>
                </div>
                <div class="card-fact">
                    <p>1995</p>
                    <p>Founded</p>
                </div>
                <div class="card-fact">
                    <p>65+</p>
                    <p>Staff Members</p>
                </div>
                <div class="card-fact">
                    <p>100%</p>
                    <p>Satisfied Customers</p>
                </div>
            </div>
        </div>

        <img src="${aboutInfo}" alt="info image">
    </div>

    <div class="testimonial">
        <h2>What Our Customers Say</h2>
        <div class="container-testimonial">
            <div class="card">
                <h3>“The best restaurant”</h3>
                <p>Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.</p>
                <div class="user">
                    <img class="icon" src="${customImg1}" alt="user1">
                    <div class="credit">
                        <p>Sophire Robson</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>
            </div>

            <div class="card">
                <h3>“Simply delicious”</h3>
                <p>Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.</p>
                <div class="user">
                    <img class="icon" src="${customImg2}" alt="user2">
                    <div class="credit">
                        <p>Matt Cannon</p>
                        <p>San Diego, CA</p>
                    </div>
                </div>
            </div>

            <div class="card">
                <h3>“One of a kind restaurant”</h3>
                <p>The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.</p>
                <div class="user">
                    <img class="icon" src="${customImg3}" alt="user3">
                    <div class="credit">
                        <p>Andy Smith</p>
                        <p>San Francisco, CA</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
}