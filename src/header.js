import { createHome } from "./home.js";
import { createMenu } from "./menu.js";

const createHeader = () => {
    const header = document.createElement("header");
    const nav = document.createElement("nav");
    const homeAnchor = document.createElement("a");
    const menuAnchor = document.createElement("a");
    const aboutAnchor = document.createElement("a");

    homeAnchor.id = "home";
    menuAnchor.id = "menu";
    aboutAnchor.id = "about";
    homeAnchor.textContent = "Home";
    menuAnchor.textContent = "Menu";
    aboutAnchor.textContent = "About";

    homeAnchor.addEventListener("click", appendContent);
    menuAnchor.addEventListener("click", appendContent);
    aboutAnchor.addEventListener("click", appendContent);
    
    nav.append(homeAnchor, menuAnchor, aboutAnchor);
    header.appendChild(nav);

    return header;
};

function appendContent(e) {
    // Removes the main content, not the header nor footer.
    const main = document.getElementsByTagName("main");
    main[0].textContent = "";
    main[0].innerHTML = "";

    // Check the id of the button that was clicked and append the
    // appropiate content to the main node.
    switch (e.target.id) {
        case "home":
            main[0].append(createHome());
            break;
        case "menu":
            main[0].classList.add("menu-active");
            main[0].append(createMenu());
            break;
        case "about":
            break;
    }
}

export {
    createHeader
};