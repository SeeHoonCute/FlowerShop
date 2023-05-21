import { Button, Flex } from "@mantine/core";
import BreadcrumbsComponent from "./breadcrumbsComponent";
import Contact from "./contact";
import CreditCardForm from "./creditCard"; 
import BillingAddress from "./billingAddress";

function Payment(){
    return(
    <div
    style={{
      display:"flex", justifyContent: "center", alignItems: "center" 
    }}>
        <Flex
        gap="xl"
        justify="center"
        align="center"
        direction="column"
        wrap="wrap"
        w={700}
        >
            <BreadcrumbsComponent />
            <Contact />
            <CreditCardForm/>
            <BillingAddress />

            <Button type="submit" style={{ width: '100%', marginTop: '16px' }}>
                Xác nhận
            </Button>
        </Flex>
    </div>

    );
}

export default Payment;