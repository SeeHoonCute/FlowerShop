import { Box, Button, Center, CloseButton, Flex, NavLink, Paper, Table, Title } from '@mantine/core';
import { Image, ScrollArea, ThemeIcon, Grid, Container, Text } from '@mantine/core';
import { IconPlus, IconMinus, IconTrash } from '@tabler/icons-react';
import { Input } from '@mantine/core';
import { IconShoppingCartDiscount } from '@tabler/icons-react';
import { useState, useEffect } from "react";


interface Product {
    id: number;
    sanpham: string;
    img: string;
    gia: number;
    soluong: number;
    tamtinh: number;
  }

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
}



const ShoppingCart : React.FC<ShoppingCartProps> = ({datas}) => {
    const [dataList, setDataList] = useState(datas);
    const handle_count_inc = (index: number) => {
        const newDataList = [...dataList];
        newDataList[index].soluong += 1;
        newDataList[index].tamtinh +=newDataList[index].gia
        setDataList(newDataList);
      };

    const handle_count_des = (index: number) => {
        const newDataList = [...dataList];
        if (newDataList[index].soluong > 1) {
          newDataList[index].soluong -= 1;
          newDataList[index].tamtinh -=newDataList[index].gia
          setDataList(newDataList);
        }
      };


      const format_money = (money: number): string => {
        return money.toLocaleString('vi', {
          style: 'currency',
          currency: 'VND',
        });
      }
 

    const rows = datas.map((data) => (
        <tr key={data.id}>
          <td> <Image src={data.img} height ={100} radius="md"/> </td>
          <td>{data.sanpham}</td>
          <td>{format_money(data.gia)}</td>
          <td>

            <Grid gutter="xs" justify="center" style={{ borderRadius: "8px", border: "1px solid gray" }} >
                <Grid.Col span={4} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <IconPlus  onClick={() => handle_count_inc(data.id)} cursor={"pointer"}/>
                                    </Grid.Col>
                <Grid.Col span={4} style={{ display: "flex", justifyContent: "center", alignItems: "center" ,borderLeft: "1px solid gray", borderRight: "1px solid gray" }}>{data.soluong}</Grid.Col>
                <Grid.Col span={4} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <IconMinus onClick={() => handle_count_des(data.id)} cursor={"pointer"}/>
                                    </Grid.Col>
            </Grid>

            </td>
          <td><Flex
              mih={50}
              gap="md"
              justify="center"
              align="center"
              direction="row"
              wrap="wrap"
            >{format_money(data.tamtinh)}
            <CloseButton title="Xóa sản phẩm" size="xl" iconSize={20} />
            </Flex>
            </td>
        </tr>
      ));

      return (
        <Flex
        gap="xl"
        justify="center"
        align="center"
        direction="column"
        >
          <Title orderDTO={1}>Giỏ Hàng của bạn</Title>


        <Table>
          <thead>
            <tr>
              <th>Sản Phẩm</th>
              <th>Tên</th>
              <th>Giá</th>
              <th>Số lượng</th>
              <th>Tổng</th>
            </tr>
          </thead>
        {/* <ScrollArea style={{ width: '100%'}}> */}
          <tbody>{rows}</tbody>
        {/* </ScrollArea> */}
        </Table>
        </Flex>

      );
}

export default ShoppingCart;
