import { Flex } from "@mantine/core";
import ShoppingCart from "./yourShoppingCart";
import OrderSummary from "./orderSummary";
import BreadcrumbsComponent from "./breadcrumbsComponent";
import FormPromotion from "./formPromotion";

function CartPage(){
    return(
        <div style={{display:"flex", justifyContent: "center", alignItems: "center" }}>

        <Flex
        gap="xl"
        justify="center"
        align="center"
        direction="column"
        wrap="wrap"
        w={900}
        >

            <BreadcrumbsComponent />
        <Flex gap="xl">
            <ShoppingCart />
            <OrderSummary/>
        </Flex>
            <FormPromotion/>
        </Flex>
    </div>

    );
}
export default CartPage;