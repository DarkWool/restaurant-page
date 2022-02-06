// Another approach, first initialize the variables and then use cloneNode deep
// to return a exact copy, somewhat like copying a template.
const section = document.createElement("section");
const mapSection = document.createElement("div");
const infoSection = document.createElement("section");

const sectionHeading = document.createElement("h2");
const subtitleOne = document.createElement("h3");
const subtitleTwo = document.createElement("h4");
const aboutInfo = document.createElement("p");
const table = document.createElement("table");
const contactInfo = aboutInfo.cloneNode(false);

const frame = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d790.9665265439548!2d-99.13533571236053!3d19.43433284581673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f92d44f4842d%3A0x4fd88d2c37e31818!2sAv.%205%20de%20Mayo%2052%2C%20Centro%20Hist%C3%B3rico%20de%20la%20Cdad.%20de%20M%C3%A9xico%2C%20Centro%2C%20Cuauht%C3%A9moc%2C%2006000%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1sen!2smx!4v1644094979965!5m2!1sen!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;

const tableData = `<tr><td class="bold-txt">Monday - Thursday</td>
                    <td>09.00a.m - 11.00p.m</td></tr><tr>
                    <td class="bold-txt">Friday & Saturday</td>
                    <td>09.00a.m - 01.00a.m</td></tr>
                    <tr><td class="bold-txt">Monday</td><td>11.00a.m - 08.00p.m</td></tr>`;

section.classList.add("about-page");
mapSection.classList.add("map");
infoSection.classList.add("about-info");
sectionHeading.classList.add("about-title");
subtitleOne.classList.add("about-subtitle");
subtitleTwo.classList.add("about-subtitle");

sectionHeading.textContent = "About us";
aboutInfo.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus nisi phasellus blandit massa dictumst iaculis. Cursuseros nibh proin egestas tincidunt purus. At eu malesuada egestas odio erat sed. Vitae posuere sed nunc, erat. Quam mileo quis commodo aliquet eget pharetra fermentum. Lectus lacus ante eget cursus lectus vel turpis egestas. Condimentumdictum vel, nunc nulla amet. Lacus fermentum risus adipiscing imperdiet dui, orci. Scelerisque donec massa duis hac.`
subtitleOne.textContent = "Working hours";
subtitleTwo.textContent = "Contact us!";
contactInfo.textContent = "+(841) 748 847 71";

table.insertAdjacentHTML("afterbegin", tableData);
infoSection.append(sectionHeading, aboutInfo, subtitleOne, table, subtitleTwo, contactInfo);
mapSection.insertAdjacentHTML("afterbegin", frame);
section.append(mapSection, infoSection);

const createAbout = () => {
    return section.cloneNode(true);
};

export {
    createAbout
};