import { createHeader, homeAnchor, menuAnchor, aboutAnchor } from "./header.js";
import { initHome, createHome } from "./home.js";
import { createMenu } from "./menu.js";
import { createAbout } from "./about.js";
import { createFooter } from "./footer.js";

// Generate initial content
const contentDiv = document.getElementById("content");
let fragment = new DocumentFragment();
fragment.append(createHeader(), initHome(), createFooter());
contentDiv.append(fragment);


// Tab and hero button functionality.
const main = document.getElementsByTagName("main")[0];
let heroButton = document.getElementById("heroButton");

heroButton.addEventListener("click", switchTabs);
homeAnchor.addEventListener("click", switchTabs);
menuAnchor.addEventListener("click", switchTabs);
aboutAnchor.addEventListener("click", switchTabs);

function switchTabs(e) {
    // Removes the main content, not the header nor footer.
    main.textContent = "";    
    main.removeAttribute("class");
    homeAnchor.removeAttribute("class");
    menuAnchor.removeAttribute("class");
    aboutAnchor.removeAttribute("class");
    
    // Add a new style for the selected tab.
    e.target.classList.add("point");

    (heroButton) ? heroButton.removeEventListener("click", switchTabs) : false;

    // Check the id of the button that was clicked and append the
    // appropiate content to the main node.
    switch (e.target.id) {
        case "home":
            main.append(createHome());
            heroButton = document.getElementById("heroButton");
            heroButton.addEventListener("click", switchTabs);
            break;
        case "heroButton":
            menuAnchor.classList.add("point");
        case "menu":
            main.classList.add("menu-active");
            main.append(createMenu());
            break;
        case "about":
            main.classList.add("a-active");
            main.append(createAbout());
            break;
    }
};

export {
    switchTabs
};