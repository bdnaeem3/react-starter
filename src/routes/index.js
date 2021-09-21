// Pages
import Home from "../pages/Home";

const routes = [
  {
    path: "/",
    component: Home,
  },
  // exact: true/false | default true
  // type: public/private | default public | private for logged in user pages
];

export default routes;
