const createFooter = () => {
    const footer = document.createElement("footer");
    footer.innerHTML = `<a href="https://github.com/DarkWool/restaurant-page" target="_blank">
    <img src="images/GitHub-Mark-Light-64px.png" class="contact-icon"></a>`;
    
    return footer;
};

export {
    createFooter
};