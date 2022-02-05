import { createHeader } from "./header.js";
import { initHome } from "./home.js";
import { createFooter } from "./footer.js";

// Generate initial content
const contentDiv = document.getElementById("content");
let fragment = new DocumentFragment();
fragment.append(createHeader(), initHome(), createFooter());
contentDiv.append(fragment);