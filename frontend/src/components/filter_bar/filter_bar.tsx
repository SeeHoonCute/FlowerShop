import {ReactNode, useEffect, useState} from "react";
import {Button, Checkbox, Container, Divider, Group, Paper, Rating, Text, Title} from "@mantine/core";

interface FilterData {
  group: string;
  options: { value: string; label: string; icon?: ReactNode }[]
}

const mockFilterData: FilterData[] = [
  {
    group: "Theo loại hoa",
    options: [
      {
        value: "rose",
        label: "Hoa hồng"
      },
      {
        value: "orchid",
        label: "Hoa lan"
      },
      {
        value: "sunflower",
        label: "Hoa hướng dương"
      },
      {
        value: "daisy",
        label: "Hoa cẩm chướng"
      },
      {
        value: "chrysanthemum",
        label: "Hoa cúc"
      },
      {
        value: "tulip",
        label: "Hoa tulip"
      },
      {
        value: "lotus",
        label: "Hoa sen"
      },
      {
        value: "artificial",
        label: "Hoa giả"
      }
    ]
  },
  {
    group: "Theo màu sắc",
    options: [
      {
        value: "orange",
        label: "Cam"
      },
      {
        value: "red",
        label: "Đỏ"
      },
      {
        value: "pink",
        label: "Hồng"
      },
      {
        value: "purple",
        label: "Tím"
      },
      {
        value: "white",
        label: "Trắng"
      },
      {
        value: "blue",
        label: "Xanh dương"
      },
      {
        value: "green",
        label: "Xanh lá"
      },
      {
        value: "yellow",
        label: "Vàng"
      }
    ]
  },
  {
    group: "Theo loại shop",
    options: [
      {
        value: "official",
        label: "Chính hãng"
      },
      {
        value: "favorite",
        label: "Yêu thích"
      },
      {
        value: "normal",
        label: "Shop thường"
      }
    ]
  },
  {
    group: "Theo nơi bán",
    options: [
      {
        value: "tphcm",
        label: "TP.HCM"
      },
      {
        value: "danang",
        label: "Đà Nẵng"
      },
      {
        value: "hue",
        label: "Huế"
      },
      {
        value: "hanoi",
        label: "Hà Nội"
      }
    ]
  },
  {
    group: "Theo đánh giá",
    options: [
      {
        value: "5star",
        label: "5 sao",
        icon: <Group spacing="xs"><Rating value={5} readOnly/>5 sao</Group>
      },
      {
        value: "4star",
        label: "4 sao",
        icon: <Group spacing="xs"><Rating value={4} readOnly/>4 sao</Group>
      },
      {
        value: "3star",
        label: "3 sao",
        icon: <Group spacing="xs"><Rating value={3} readOnly/>3 sao</Group>
      },
      {
        value: "2star",
        label: "2 sao",
        icon: <Group spacing="xs"><Rating value={2} readOnly/>2 sao</Group>
      },
      {
        value: "1star",
        label: "1 sao",
        icon: <Group spacing="xs"><Rating value={1} fractions={1} readOnly/>1 sao</Group>
      }
    ]
  },
  {
    group: "Theo giá",
    options: [
      {
        value: "under500",
        label: "Dưới 500.000đ"
      },
      {
        value: "500to1000",
        label: "500.000đ - 1.000.000đ"
      },
      {
        value: "1000to2000",
        label: "1.000.000đ - 2.000.000đ"
      },
      {
        value: "2000to5000",
        label: "2.000.000đ - 5.000.000đ"
      },
      {
        value: "over5000",
        label: "Trên 5.000.000đ"
      }
    ]
  },
  {
    group: "Theo khuyến mãi",
    options: [
      {
        value: "freeship",
        label: "Freeship"
      },
      {
        value: "discount",
        label: "Giảm giá"
      },
      {
        value: "gift",
        label: "Quà tặng kèm"
      }
    ]
  }
]

const FilterBar = () => {
  const [value, setValue] = useState(["react"]);
  const [filterData, setFilterData] = useState<FilterData[]>([])

  useEffect(() => {
    setFilterData(mockFilterData)
  }, [])

  const filterList = () => {
    return filterData.map((item) => {
      return (
        <>
          <Checkbox.Group
            value={value}
            onChange={setValue}
            label={<Text size="lg">{item.group}</Text>}
            size="sm"
          >
            {item.options.map((option) => {
              return (
                <Checkbox value={option.value} label={option.icon ? option.icon : option.label} mt="sm"/>
              )
            })}
          </Checkbox.Group>

          <Divider my="lg"/>
        </>
      )
    })
  }

  return (
    <Paper w={250} p="md" withBorder>
      <Title orderDTO={3} mb="md">Bộ lọc</Title>

      {filterList()}

      <Button variant="light" fullWidth mt="sm">
        Áp dụng
      </Button>
    </Paper>
  );
}

export default FilterBar;
