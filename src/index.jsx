import React from "react";
import ReactDOMClient from "react-dom/client";
import { Option } from "./screens/Option";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Option />);
