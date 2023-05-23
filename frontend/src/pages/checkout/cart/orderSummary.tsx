import { Card, Table, Button, Flex } from '@mantine/core';

function OrderSummary() {
  return (
    <Card shadow="xs" padding="lg" style={{ maxWidth: 400, backgroundColor: "#f2f3f5" }}>
     <h2>Order Summary</h2>
      <Table>
        <tbody>
          <tr>
            <td>Total:</td>
            <td>14 item(s)</td>
          </tr>
          <tr>
            <td>Total weight:</td>
            <td>169.89 lb</td>
          </tr>
          <tr>
            <td style={{ fontWeight: 700 }}>TOTAL PRICE:</td>
            <td style={{ fontWeight: 700 }}>$3,405.00</td>
          </tr>
        </tbody>
      </Table>
        <Flex  gap="sm"
      justify="center"
      align="center"
      direction="column">

        <Button variant="outline" style={{ width: '100%'}}>Update</Button>
        <Button color="gray"style={{ width: '100%'}}>Go to Checkout</Button>
        </Flex>
      
    </Card>
  );
}

export default OrderSummary;
