import React, { useState } from 'react';
import { Title, Text, Checkbox, TextInput, Grid } from '@mantine/core';

const BillingAddress: React.FC = () => {
  const [useDifferentAddress, setUseDifferentAddress] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUseDifferentAddress(event.currentTarget.checked);
  };

  return (
    <div style={{ width: '100%', margin: '0 auto' }}>
      <Title orderDTO={3} style={{ marginBottom: '16px' }}>
        Địa chỉ thanh toán
      </Title>

      <Text size="sm" style={{ marginBottom: '16px' }}>
        Chọn địa chỉ khớp với thẻ hoặc phương thức thanh toán của bạn.
      </Text>

      <Checkbox
        checked={!useDifferentAddress}
        onChange={handleCheckboxChange}
        label="Tương tụ địa chỉ giao hàng"
        style={{ marginBottom: '16px' }}
      />

      <Checkbox
        checked={useDifferentAddress}
        onChange={handleCheckboxChange}
        label="Sử dụng địa chỉ thanh toán khác"
        style={{ marginBottom: '16px' }}
      />

{useDifferentAddress && (
        <>
         <Grid gutter="sm" style={{ marginBottom: '16px' }}>
        <Grid.Col span={6}>
          <TextInput label="Tên" placeholder="Nhập tên" required />
        </Grid.Col>
        <Grid.Col span={6}>
          <TextInput label="Họ" placeholder="Nhập họ" required />
        </Grid.Col>
      </Grid>

      <TextInput label="Đất nước" placeholder="Việt Nam" required style={{ marginBottom: '16px' }} />

      <Grid gutter="sm"  style={{ marginBottom: '16px' }}>
        <Grid.Col span={6}>
          <TextInput label="Thành phố" placeholder="Hồ Chí Minh" required />
        </Grid.Col>
        <Grid.Col span={6}>
          <TextInput label="SĐT" placeholder="0987654321" required />
        </Grid.Col>
      </Grid>

      <TextInput label="Địa chỉ" placeholder="Nhập địa chỉ" required style={{ marginBottom: '16px' }} />


        </>
      )}
    </div>
  );
};

export default BillingAddress;
