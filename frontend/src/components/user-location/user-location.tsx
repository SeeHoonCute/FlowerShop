import {Paper, Title, Text, Button, Card, TextInput, Group, Skeleton} from "@mantine/core";
import {useEffect, useRef, useState} from "react";
import {UserLocationDTO, UserLocationApi} from "../../api/user-location/user-location";

const UserLocation = () => {
  const [userLocation, setUserLocation] = useState<UserLocationDTO[]>();

  const userLocationApi = new UserLocationApi();
  const newAddressRef = useRef<HTMLInputElement>(null);
  const newPhoneRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    userLocationApi.getUserLocation((localStorage.getItem("uid") || "") as unknown as number)
      .then((res) => {
        setUserLocation(res);
      })
  }, [])

  const [isAddingLocation, setIsAddingLocation] = useState(false);

  const locationList = userLocation?.map((location, index) => {
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
          {location.locationAddress}
        </Text>
        <Text fz="sm" tt="uppercase" fw={400} c="dimmed" mt={"sm"}>
          Số điện thoại
        </Text>
        <Text fz="md" fw={500} c={"dark.4"}>
          {location.locationPhone}
        </Text>
      </Card>
    )
  })

  const addLocation = async () => {
    const newLocation: UserLocationDTO = {
      locationAddress: newAddressRef.current?.value ?? "",
      locationPhone: newPhoneRef.current?.value ?? "",
    }
    setUserLocation([...userLocation??[], newLocation]);
    const res = await userLocationApi.postUserLocation(newLocation);
    console.log(res);
  }

  const renderAddLocation = () => {
    return (
      <Card
        withBorder
        radius="md"
        w="100%"
        mt={"md"}
      >
        <form>
          <TextInput label="Địa chỉ của bạn" placeholder="123 Đường ABC Phường DEF Quận GHI Tỉnh JKL"
                     ref={newAddressRef}/>
          <TextInput label="Số đện thoại" placeholder="0123456789" ref={newPhoneRef}/>
        </form>
      </Card>
    )
  }

  return (
    <>
      <Title order={3}>Danh sách địa chỉ</Title>
      <Skeleton visible={locationList === undefined} mt={"md"} w={"100%"} h={150} radius={"md"}
                display={locationList === undefined? "block" : "none"}>
      </Skeleton>
      {locationList}
      {isAddingLocation && renderAddLocation()}
      <Group position="right">
        {isAddingLocation && <Button radius="md" mt="md" color={"gray"} variant={"outline"}
                                     onClick={() => setIsAddingLocation(false)}>Huỷ</Button>}
        <Button radius="md" mt="md" onClick={() => {
          if (isAddingLocation) {
            addLocation()
            console.log("add location");
            console.log(userLocation)
          } else
            setIsAddingLocation(true)
        }}>Thêm địa chỉ</Button>
      </Group>
    </>
  )
}

export default UserLocation;
