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

homeAnchor.classList.add("point");

nav.append(homeAnchor, menuAnchor, aboutAnchor);
header.appendChild(nav);

const createHeader = () => {
    // Since we are gonna create the header just once, we use this function to simply return it.
    return header;
};

export {
    createHeader,
    homeAnchor,
    menuAnchor,
    aboutAnchor
};