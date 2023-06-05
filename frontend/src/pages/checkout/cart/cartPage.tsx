import { Button, Flex } from "@mantine/core";
import ShoppingCart from "./yourShoppingCart";
import OrderSummary from "./orderSummary";
import BreadcrumbsComponent from "./breadcrumbsComponent";
import FormPromotion from "./formPromotion";
import { useState } from "react";


interface Product {
    id: number;
    sanpham: string;
    img: string;
    gia: number;
    soluong: number;
    tamtinh: number;
  }
  interface ShoppingCartProps {
    datas: Product[];
    // tong:number;
  }

  type StepperProps = {
    activeStep: number;
    onStepChange: (nextStep: number) => void;
  };


const CartPage: React.FC<ShoppingCartProps & StepperProps> = ({datas , onStepChange, activeStep}) =>{


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
            <ShoppingCart datas={datas} />
            <OrderSummary activeStep={activeStep} onStepChange={onStepChange}/>
        </Flex>
            <FormPromotion/>
        {/* <Button variant="outline" style={{ alignSelf: "flex-start" }}  onClick={() => onStepChange(activeStep + 1)}>Back</Button> */}
        </Flex>

    </div>

    );
}
export default CartPage;