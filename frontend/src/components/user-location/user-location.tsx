import {Paper, Title, Text, Button, Card, TextInput, Group} from "@mantine/core";
import {useState} from "react";

const UserLocation = () => {
  const [userLocation, setUserLocation] = useState<{ address: string, phone: string }[]>([
    {
      address: "123/4/5 Nguyễn Văn Cừ, Quận 1, TP.HCM",
      phone: "0123456789"
    },
    {
      address: "51/4L Đông Lân, Bà Điểm, Hóc Môn, TP.HCM",
      phone: "0123456789"
    }
  ]);

  const [isAddingLocation, setIsAddingLocation] = useState(false);

  const locationList = userLocation.map((location, index) => {
    return (
      <Card
        withBorder
        radius="md"
        w="100%"
        key={index}
        mt={"md"}
      >
        <Text fz="sm" tt="uppercase" fw={400} c="dimmed">
          Địa chỉ
        </Text>
        <Text fz="md" fw={500} c={"dark.4"}>
          {location.address}
        </Text>
        <Text fz="sm" tt="uppercase" fw={400} c="dimmed" mt={"sm"}>
          Số điện thoại
        </Text>
        <Text fz="md" fw={500} c={"dark.4"}>
          {location.phone}
        </Text>
      </Card>
    )
  })

  const addLocation = () => {
    return (
      <Card
        withBorder
        radius="md"
        w="100%"
        mt={"md"}
      >
        <TextInput label="Địa chỉ của bạn" placeholder="123 Đường ABC Phường DEF Quận GHI Tỉnh JKL"/>
        <TextInput label="Số đện thoại" placeholder="0123456789"/>
      </Card>
    )
  }

  return (
    <>
      <Title order={3}>Danh sách địa chỉ</Title>
      {locationList}
      {isAddingLocation && addLocation()}
      <Group position="right">
        {isAddingLocation && <Button radius="md" mt="md" color={"gray"} variant={"outline"} onClick={() => setIsAddingLocation(false)}>Huỷ</Button>}
        <Button radius="md" mt="md" onClick={() => setIsAddingLocation(true)}>Thêm địa chỉ</Button>
      </Group>
    </>
  )
}

export default UserLocation;
