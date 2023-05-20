import {RouteObject} from "react-router-dom";
import {Frame} from "./frame";
import {Home} from "./pages/home";
import Products from "./pages/products/products";
import ProductDetail from "./pages/product-detail";

export const routes: RouteObject[] = [
  {
    path: "",
    element: <Frame/>,
    children: [
      {
        path: "home",
        element: <Home/>
      },
      {
        path: "products",
        children: [
          {
            path: "",
            element: <Products/>
          },
          {
            path: ":id",
            element: <ProductDetail/>
          }
        ]
      },
    ]
  },
];
