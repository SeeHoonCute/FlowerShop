import { useState } from 'react';
import { Stepper, Button, Group, Text, Container } from '@mantine/core';
import CartPage from './cart/cartPage';
import InformationPage from './information/informationPage';
import Payment from './payment/payment';
import CompletedTransactionPage from './completeTrans/completeTrans';

interface Product {
  id: number;
  sanpham: string;
  img: string;
  gia: number;
  soluong: number;
  tamtinh: number;
}
// interface ShoppingCartProps {
//   datas: Product[];
// }

const datas : Product[]=[{
    id:0,
    sanpham:"Hoa hồng sắc xanh",
    img: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
    gia: 499000,
    soluong:1,
    tamtinh:499000,
},{
    id:1,
    sanpham:"Bó hoa hướng dương",
    img: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
    gia: 499000,
    soluong:1,
    tamtinh:499000,
}
,{
    id:2,
    sanpham:"Bó hoa hông mộng mơ",
    img: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
    gia: 499000,
    soluong:1,
    tamtinh:499000,
},{
    id:3,
    sanpham:"Bó hoa tulip",
    img: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
    gia: 499000,
    soluong:1,
    tamtinh:499000,
}
// ,{
//     id:4,
//     sanpham:"Bó hoa cúng cả nhóm",
//     img: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
//     gia: 499000,
//     soluong:1,
//     tamtinh:499000,
// },{
//     id:5,
//     sanpham:"Bó hoa cúng cả nhóm",
//     img: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
//     gia: 499000,
//     soluong:2,
//     tamtinh:499000,
// }
]


function Stepper_cart ()  {
  const [active, setActive] = useState(0);
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

    <div style={{display:"flex", justifyContent: "center", alignItems: "center", flexDirection:"column" }}>
    <>
      <Stepper active={active} onStepClick={setActive} breakpoint="sm" size="xs" w={800}>
        <Stepper.Step
          label="First step"
          description="Your Cart"
          allowStepSelect={shouldAllowSelectStep(0)}
        >
          <CartPage datas={datas} onStepChange={handleStepChange} activeStep={active}/>
        </Stepper.Step>


        <Stepper.Step
          label="Second step"
          description="Checkout"
          allowStepSelect={shouldAllowSelectStep(1)}
        >
          {/* <Text>Step 2 Text: Verify email</Text> */}
          <InformationPage onStepChange={handleStepChange} activeStep={active}/>
        </Stepper.Step>


        <Stepper.Step
          label="Payment"
          description="Get full access"
          allowStepSelect={shouldAllowSelectStep(2)}
        >
          <Payment  onStepChange={handleStepChange} activeStep={active}/>
        </Stepper.Step>

        <Stepper.Completed>
          {/* <Text>Completed, click back button to get to previous step</Text> */}
          <CompletedTransactionPage />
        </Stepper.Completed>
      </Stepper>

      <Container mt="xl" >
      <Button variant="gradient"  onClick={() => handleStepChange(active - 1)}>Back</Button>
      </Container>

      {/* <Group position="left" mt="xl">
        <Button onClick={() => handleStepChange(active + 1)}>Next step</Button>
        <Button variant="default"  onClick={() => handleStepChange(active - 1)}>Back</Button>
      </Group> */}
    </>
    </div>
  );
}

export default Stepper_cart;