import About from "../component/pages/About";
import Home from "../component/pages/Home";
import ProductDetail from "../component/pages/ProductDetail";

const mainRoute = [
  {
    path: "",
    component: Home,
  },
  {
    path: "about",
    component: About,
  },
  {
    path: "product-details/:id",
    component: ProductDetail,
  },
];

export { mainRoute };