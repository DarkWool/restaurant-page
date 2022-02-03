const createHeader = () => {
    const header = document.createElement("header");
    const nav = document.createElement("nav");
    const anchors = `<a href="#">Home</a>
                    <a href="#">Menu</a>
                    <a href="#">About</a>`;

    nav.innerHTML = anchors;
    header.appendChild(nav);

    return header;
};

export {
    createHeader
};