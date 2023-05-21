import {RouteObject} from "react-router-dom";
import {Frame} from "./frame";
import {Home} from "./pages/home";
import Products from "./pages/products/products";
import ProductDetail from "./pages/product-detail";
import Payment from "./pages/checkout/payment/payment";
import LoginForm from "./pages/loginForm/login";
import SignUpForm from "./pages/loginForm/signup";
import Stepper_cart from "./pages/checkout/Stepper";

export const routes: RouteObject[] = [
  {
    path: "login",
    element: <LoginForm/>
  },
  {
    path: "signup",
    element: <SignUpForm/>
  },
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
      {
        path: "checkout",
        element: <Stepper_cart/>
      },
      {
        path: "pay",
        element: <Payment/>
      },
    ]
  },
];
