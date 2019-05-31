import React from "react";
import { render } from "react-dom";
import Root from "./routes";
import configureStore from "./store";

import registerServiceWorker from "./registerServiceWorker";

let store = configureStore();

render(<Root store={store} />, document.getElementById("root"));
registerServiceWorker();
