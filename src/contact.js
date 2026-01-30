import { clearContent } from "./utils.js";

export function renderContact(content) {
    clearContent(content);

    content.classList.add("content-contact");
    content.innerHTML = `
    <div class="feedback">
        <div class="text">
            <h1>Contact Us</h1>
            <p>We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
        </div>
        <form action="#" method="get">
            <div class="row">
                <div class="wrapper">
                    <label for="name">Name</label>
                    <input type="text" name="name" id="name" placeholder="Enter your name" required>
                </div>
                <div class="wrapper">
                    <label for="email">Email</label>
                    <input type="text" name="sbj" id="email" placeholder="Enter email address" required>
                </div>
            </div>

            <div class="wrapper">
                <label for="sbj">Subject</label>
                <input type="text" name="sbj" id="sbj" placeholder="Write a subject" required>
            </div>

            <div class="wrapper">
                <label for="message">Message</label>
                <textarea name="message" id="message" placeholder="Write your message" required></textarea>
            </div>

            <button type="submit" class="btn-red">Send</button>
        </form>
    </div>

    <div class="info">
        <div class="number">
            <p>Call us</p>
            <h3>(414) 857 - 0107</h3>
        </div>
        <div class="time">
            <p>Hours</p>
            <p>
                Mon-Fri: 11am - 8pm <br/>
                Sat, Sun: 9am - 10pm
            </p>
        </div>
        <div class="location">
            <p>Our location</p>
            <p> 837 W. Marshall Lane <br/> 
                Los Angeles, LA 50158 <br/>
                United States
            </p>
        </div>
    </div>
    `
}