import { TextInput, Checkbox, Button, Group, Box, Flex, Grid, Title, Textarea, Table } from '@mantine/core';
import { useForm } from '@mantine/form';


interface Data {
    id: number;
    sanpham: string;
    img: string;
    gia: number;
    soluong: number;
    tamtinh: number;
  }

const datas : Data[]=[{
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
},{
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
},{
    id:4,
    sanpham:"Bó hoa cúng cả nhóm",
    img: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
    gia: 499000,
    soluong:1,
    tamtinh:499000,
}]

const totals =90000;
const tamtinh= 90000;

function Checkout_form(){
    
      return (

        <div className="App">

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
          

      <Grid grow gutter="xs" maw={600}>
      <Grid.Col span={10}>
        <Title order={3}>Thông tin thêm</Title>
      </Grid.Col>

      <Grid.Col span={10}>             
      <Textarea
              withAsterisk
              variant="filled"
              placeholder="Ghi chú thêm tùy chọn"
              // description="Ghi chú thêm tùy chọn"
              label="Ghi chú thêm tùy chọn"
              />
      </Grid.Col>

      </Grid>
        </div>


      );

}

function Checkout_bill(){

    const convert = (num: number)=>(
        num.toLocaleString('vi', {
            style: 'currency',
            currency: 'VND',
        })
    )

    const rows = datas.map((data) => (
        <tr key={data.id}>    
          <td>{data.sanpham} x {data.soluong}</td>

          <td>{convert(data.tamtinh)}</td>
          {/* <td>{total}</td> */}
        </tr>
      ));

    return(

        <Box>
        <Table h={400}>
          <thead>
            <tr>
              <th>Sản phẩm</th>
              <th>Tạm tính</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>

          <tbody>
          <tr>
            <td> Tạm Tính </td>
            <td> {convert(tamtinh)} </td>    
        
          </tr>

            <tr>
                <td style={{ fontWeight: 700 }}> Tổng cộng</td>
            <td style={{ fontWeight: 700 }}> {convert(totals)} </td>
            </tr>
            
            </tbody>
        </Table>

    <Button fullWidth type="submit" color="gray">Đi tới thanh toán</Button>
        </Box>
        
    );
}

function InfomationForm(){
  return(
    <div className="flex-container" 
    style={{
      display:"flex", justifyContent: "center", alignItems: "center" 
    }}>

    <Flex gap="xl">
      <Checkout_form/>
      <Checkout_bill/>
    </Flex>
    </div>
    
  );
}

export default InfomationForm;