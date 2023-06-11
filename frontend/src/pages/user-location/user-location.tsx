import {Paper, Title, Text, Button} from "@mantine/core";
import {useState} from "react";

const UserLocation = () => {
  const [userLocation, setUserLocation] = useState<{address: string, phone: string}[]>([
    {
      address: "123/4/5 Nguyễn Văn Cừ, Quận 1, TP.HCM",
      phone: "0123456789"
    },
    {
      address: "51/4L Đông Lân, Bà Điểm, Hóc Môn, TP.HCM",
      phone: "0123456789"
    }
  ]);

  const locationList = userLocation.map((location, index) => {
    return (
      <Paper withBorder key={index} p="md" mt="md">
        <Title order={4}>Địa chỉ</Title>
        <Text>{location.address}</Text>
        <Title order={4}>Số điện thoại</Title>
        <Text>{location.phone}</Text>
      </Paper>
    )
  })

  return(
    <>
      <Title order={3}>Danh sách địa chỉ</Title>
      {locationList}
      <Button radius="md" mt="md">Thêm địa chỉ</Button>
    </>
  )
}

export default UserLocation;
