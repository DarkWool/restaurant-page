import { createHeader } from "./header.js";
import { createHome } from "./home.js";
import { createFooter } from "./footer.js";

// Generate initial content
const contentDiv = document.getElementById("content");
let fragment = new DocumentFragment();
fragment.append(createHeader(), createHome(), createFooter());
contentDiv.append(fragment);