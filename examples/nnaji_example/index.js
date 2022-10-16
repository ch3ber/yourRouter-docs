import { Router } from "yourrouter";
import Home from "./Home.js";

//congiguring the router

Router.createInstance({
  path404: "/notFound",
  // highlight-start

  renderId: "#app", // use #app to id and .app to css class
});
const router = Router.getInstance();

//route to display the home page
router.addRoute("/", () => {
  console.log("Hello, this is the home page");

  //   Returning a template which displays the homepage
  return Home;
});
