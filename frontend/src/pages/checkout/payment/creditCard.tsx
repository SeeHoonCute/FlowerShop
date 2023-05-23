import React, { useState } from 'react';
import { TextInput, Button, Title } from '@mantine/core';
import { IconCreditCard  } from '@tabler/icons-react';

import {Text, Checkbox, Grid } from '@mantine/core';

type CreditCardFormValues = {
  name: string;
  cardNumber: string;
  expirationDate: string;
  cvv: string;
};

const CreditCardForm: React.FC = () => {
  const [formValues, setFormValues] = useState<CreditCardFormValues>({
    name: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  const [useDifferentPayMethod, setUseDifferentPayMethod] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUseDifferentPayMethod(event.currentTarget.checked);
  };

  const handleChange = (field: keyof CreditCardFormValues, value: string) => {
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [field]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Do something with formValues
    console.log(formValues);
  };

  return (

    <div style={{ width: '100%', margin: '0 auto' }}>
    <Title order={3} style={{ marginBottom: '16px' }}>
      Thanh toán
    </Title>

    <Text size="sm" style={{ marginBottom: '16px' }}>
      Chọn phương thức thanh toán phù hợp với bạn.
    </Text>

    <Checkbox
      checked={!useDifferentPayMethod}
      onChange={handleCheckboxChange}
      label="Thanh toán sau khi nhận được hàng"
      style={{ marginBottom: '16px' }}
    />

    <Checkbox
      checked={useDifferentPayMethod}
      onChange={handleCheckboxChange}
      label="Thanh toán bằng Credit Card"
      style={{ marginBottom: '16px' }}
    />

{useDifferentPayMethod && (
      <>

<form onSubmit={handleSubmit} style={{ width: '100%', margin: '0 auto' }}>
      <Title order={3} style={{  display: 'flex', alignItems: 'center', marginBottom: '16px'}} >
        <IconCreditCard  size={30} style={{ marginRight: '8px'}} />
        Credit Card
      </Title>

      <TextInput
        label="Cardholder Name"
        placeholder="John Doe"
        required
        value={formValues.name}
        onChange={(event) => handleChange('name', event.currentTarget.value)}
        style={{ marginBottom: '16px' }}
      />

      <TextInput
        label="Card Number"
        placeholder="1234 5678 9012 3456"
        required
        value={formValues.cardNumber}
        onChange={(event) => handleChange('cardNumber', event.currentTarget.value)}
        style={{ marginBottom: '16px' }}
      />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <TextInput
          label="Expiration Date"
          placeholder="MM/YY"
          required
          value={formValues.expirationDate}
          onChange={(event) => handleChange('expirationDate', event.currentTarget.value)}
        />

        <TextInput
          label="CVV"
          placeholder="123"
          required
          value={formValues.cvv}
          onChange={(event) => handleChange('cvv', event.currentTarget.value)}
        />
      </div>

      {/* <Button type="submit" style={{ width: '100%', marginTop: '16px' }}>
        Submit
      </Button> */}
    </form>
      </>
    )}
  </div>


   
  );
};

export default CreditCardForm;
