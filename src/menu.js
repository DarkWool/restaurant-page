const items = [
    { 
        title: "Mocha Coffee",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus senectus suscipit mauris cras. Risus a suspendisse adipiscing risus, sodales quis faucibus gravida. Neque nibh nec ipsum enim. Quam non fermentum, nascetur facilisis amet volutpat pharetra, dui.`,
        image: `images/item-01.jpeg`,
        price: "12"
    },
    {
        title: "Mocha Coffee",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus senectus suscipit mauris cras. Risus a suspendisse adipiscing risus, sodales quis faucibus gravida. Neque nibh nec ipsum enim. Quam non fermentum, nascetur facilisis amet volutpat pharetra, dui.`,
        image: `images/item-01.jpeg`,
        price: "19.99"
    },
    {
        title: "Mocha Coffee",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus senectus suscipit mauris cras. Risus a suspendisse adipiscing risus, sodales quis faucibus gravida. Neque nibh nec ipsum enim. Quam non fermentum, nascetur facilisis amet volutpat pharetra, dui.`,
        image: `images/item-01.jpeg`,
        price: "8"
    },
    {
        title: "Mocha Coffee",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus senectus suscipit mauris cras. Risus a suspendisse adipiscing risus, sodales quis faucibus gravida. Neque nibh nec ipsum enim. Quam non fermentum, nascetur facilisis amet volutpat pharetra, dui.`,
        image: `images/item-01.jpeg`,
        price: "10"
    },
    {
        title: "Mocha Coffee",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus senectus suscipit mauris cras. Neque nibh nec ipsum enim.`,
        image: `images/item-01.jpeg`,
        price: "4.99"
    },
    {
        title: "Mocha Coffee",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus senectus suscipit mauris cras. Risus a suspendisse adipiscing risus, sodales quis faucibus gravida. Neque nibh nec ipsum enim. Quam non fermentum, nascetur facilisis amet volutpat pharetra, dui.`,
        image: `images/item-01.jpeg`,
        price: "4.99"
    }
];

const createMenu = () => {
    const section = document.createElement("section");
    const heading = document.createElement("h1");
    const headerContainer = document.createElement("div");
    const itemsContainer = document.createElement("div");

    // Create the ornaments for the menu header.
    const leftOrnament = document.createElement("img");
    leftOrnament.src = "images/menu-ornament.png";
    leftOrnament.classList.add("menu-orn");
    const rightOrnament = leftOrnament.cloneNode(false);
    leftOrnament.classList.add("menu-orn-r");

    section.id = "menu-content";
    heading.textContent = "Our Menu";
    headerContainer.classList.add("menu-header");
    
    // Creation of every menu item.
    const item = document.createElement("article");
    const imageContainer = document.createElement("div");
    const descriptionContainer = document.createElement("div");

    const itemPrice = document.createElement("span");
    const itemImage = document.createElement("img");
    const itemTitle = document.createElement("h2");
    const itemDescription = document.createElement("p");
    
    itemsContainer.classList.add("items-container");
    imageContainer.classList.add("item-img-container");
    descriptionContainer.classList.add("item-desc-container");
    itemTitle.classList.add("item-title");
    itemDescription.classList.add("item-desc");
    itemImage.classList.add("item-img");
    itemPrice.classList.add("item-price");

    itemPrice.textContent = "$";
    
    descriptionContainer.append(itemTitle, itemDescription);
    imageContainer.append(itemPrice, itemImage);
    item.append(imageContainer, descriptionContainer);

    items.map(el => {
        itemTitle.textContent = el.title;
        itemDescription.textContent = el.description;
        itemImage.src = el.image;
        itemPrice.textContent = `$${el.price}`;

        itemsContainer.append(item.cloneNode(true));
    });

    // Join the nodes for the header.
    headerContainer.append(leftOrnament, heading, rightOrnament);
    section.append(headerContainer, itemsContainer);

    return section;
};

export {
    createMenu
};