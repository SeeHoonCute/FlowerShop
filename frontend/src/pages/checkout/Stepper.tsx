import { useState } from 'react';
import { Stepper, Button, Group, Text } from '@mantine/core';
import CartPage from './cart/cartPage';
import InformationPage from './information/informationPage';
import Payment from './payment/payment';


function Stepper_cart() {
  const [active, setActive] = useState(1);
  const [highestStepVisited, setHighestStepVisited] = useState(active);

  const handleStepChange = (nextStep: number) => {
    const isOutOfBounds = nextStep > 3 || nextStep < 0;

    if (isOutOfBounds) {
      return;
    }

    setActive(nextStep);
    setHighestStepVisited((hSC) => Math.max(hSC, nextStep));
  };

  // Allow the user to freely go back and forth between visited steps.
  const shouldAllowSelectStep = (step: number) => highestStepVisited >= step && active !== step;

  return (
    <>
      <Stepper active={active} onStepClick={setActive} breakpoint="sm" size="xs">
        <Stepper.Step
          label="First step"
          description="Your Cart"
          allowStepSelect={shouldAllowSelectStep(0)}
        >
          <CartPage/>
        </Stepper.Step>


        <Stepper.Step
          label="Second step"
          description="Checkout"
          allowStepSelect={shouldAllowSelectStep(1)}
        >
          {/* <Text>Step 2 Text: Verify email</Text> */}
          <InformationPage/>
        </Stepper.Step>


        <Stepper.Step
          label="Payment"
          description="Get full access"
          allowStepSelect={shouldAllowSelectStep(2)}
        >
          <Payment/>
        </Stepper.Step>

        <Stepper.Completed>
          <Text>Completed, click back button to get to previous step</Text>
        </Stepper.Completed>
      </Stepper>

      <Group position="center" mt="xl">
        <Button variant="default" onClick={() => handleStepChange(active - 1)}>
          Back
        </Button>
        <Button onClick={() => handleStepChange(active + 1)}>Next step</Button>
      </Group>
    </>
  );
}

export default Stepper_cart;
