1) I have not worked with React Router before.
Can you explain BrowserRouter, Routes, Route, Link, and useParams in simple terms and show how they would be used to build the required routes:

/
/shop
/contact
/product/:id

2) I have created routes in App.jsx, now what do I do in main?

3) Is my main.jsx correct:

```import React from "react";

import ReactDOM from "react-dom/client";



import { BrowserRouter } from "react-router-dom";



import App from "./App.jsx";

import "./index.css";



ReactDOM.createRoot(

  document.getElementById("root")

).render(



  <BrowserRouter>

  <App />

  </BrowserRouter>

)

);```

4) Home doesnt show up when I load the page.

5) How do I build the navbar with link?