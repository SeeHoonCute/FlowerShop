import { Button, Flex } from "@mantine/core";
import BreadcrumbsComponent from "./breadcrumbsComponent";
import Contact from "./contact";
import CreditCardForm from "./creditCard"; 
import BillingAddress from "./billingAddress";

type StepperProps = {
    activeStep: number;
    onStepChange: (nextStep: number) => void;
  };

const Payment: React.FC< StepperProps> = ({onStepChange, activeStep})=>{
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

            <Button type="submit" style={{ width: '100%', marginTop: '16px' }} color="gray" onClick={() => onStepChange(activeStep + 1)}>
                Xác nhận
            </Button>
        </Flex>
    </div>

    );
}

export default Payment;