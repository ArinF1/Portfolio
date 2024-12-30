import {createRoot} from "react-dom/client";
import { createElement } from "react";

window.React = { createElement: createElement }; 

configure({ enforceActions: "never" });  

createRoot(document.getElementById("root"));