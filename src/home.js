let btn;

const createHome = () => {
    const main = document.createElement("main");
    const heroSection = document.createElement("section");
    heroSection.id = "hero-content";
    const subtitle = document.createElement("h2");
    subtitle.classList.add("hero-subtitle");
    subtitle.textContent = "Coffee Shop";

    const heading = document.createElement("h1");
    heading.classList.add("hero-title");
    heading.textContent = "Moonish";

    const copy = document.createElement("p");
    copy.classList.add("hero-description");
    copy.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Venenatis, gravida venenatis in tellus enim sit tellus ac leo. Massa amet nunc accumsan interdum volutpat massa nunc.`;

    btn = document.createElement("button");
    btn.type = "button";
    btn.classList.add("hero-btn");
    btn.textContent = "Check Menu";
    
    heroSection.append(subtitle, heading, copy, btn);
    main.append(heroSection);

    return main;
};

export {
    createHome
};