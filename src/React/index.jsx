import {createRoot} from "react-dom/client";
import { createElement } from "react";
import { ReactRoot } from "./ReactRoot";
window.React = { createElement: createElement }; 

configure({ enforceActions: "never" });  

createRoot(document.getElementById("root"))
    .render(<ReactRoot/>);