import { clearContent } from "./utils.js";

export function renderBook(content) {
    clearContent(content);

    content.classList.add("content-book");
    content.innerHTML = `
    <div class="text">
        <h1>Book a Table</h1>
        <p>We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
    </div>

    <form action="#" method="get">
        <div class="row">
            <div class="wrapper">
                <label for="date">Date</label>
                <input type="date" id="date" name="date" required>
            </div>
            <div class="wrapper">
                <label for="time">Time</label>
                <input type="time" id="time" name="time" required>
            </div>
        </div>

        <div class="row">
            <div class="wrapper">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Enter your name" required>
            </div>
            <div class="wrapper">
                <label for="phone">Phone</label>
                <input type="tel" id="phone" name="phone" placeholder="xxx-xxx-xxxx" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required>
            </div>
        </div>

        <div class="wrapper">
            <label for="total">Total Person</label>
            <select name="total" id="total" required>
                <option value="1">1 Person</option>
                <option value="2">2 Person</option>
                <option value="3">3 Person</option>
                <option value="4">4 Person</option>
                <option value="more">5 And More Person</option>
            </select>
        </div>

        <button type="submit" class="btn-red">Book A Table</button>
    </form>
    `
}