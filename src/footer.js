const footer = document.createElement("footer");
footer.innerHTML = `<a href="https://github.com/DarkWool/restaurant-page" target="_blank">
    <img src="images/GitHub-Mark-Light-64px.png" class="contact-icon"></a>`;

const createFooter = () => {
    // Since we are gonna create the footer just once, we use this function to simply return it.
    return footer;
};

export {
    createFooter
};