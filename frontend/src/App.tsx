import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {routes} from "./routes";
import LoginForm from './pages/loginForm/login';
import SliderLogin from './pages/loginForm/component/slider';
import SignUpForm from './pages/loginForm/signup';
import Stepper_cart from './pages/checkout/Stepper';
import OrderSummary from './pages/checkout/cart/orderSummary';
import BreadcrumbsComponent from './pages/checkout/payment/breadcrumbsComponent';
import ShoppingCart from './pages/checkout/cart/yourShoppingCart';
import FormPromotion from './pages/checkout/cart/formPromotion';
import InfomationForm from './pages/checkout/information/informationForm';
import Contact from './pages/checkout/payment/contact';
import CreditCardForm from './pages/checkout/payment/creditCard';
import BillingAddress from './pages/checkout/payment/billingAddress';
import Payment from './pages/checkout/payment/payment';
import QuantityBox from './pages/checkout/cart/Quan';
import CartPage from './pages/checkout/cart/cartPage';
import InformationPage from './pages/checkout/information/informationPage';


const router = createBrowserRouter(routes);

function App() {
    return (
    
    // <RouterProvider router={router}></RouterProvider>;
    <div className="App">

        {/* <BreadcrumbsComponent/> */}
        {/* <InformationPage /> */}
        {/* <Payment /> */}
        {/* <CartPage/> */}
        {/* <BillingAddress /> */}

        <LoginForm />
        <SignUpForm/>
        <div style={{display:"flex", justifyContent: "center", alignItems: "center" }}>
        <Stepper_cart/>
        </div>

    </div>
    );
}

export default App;
