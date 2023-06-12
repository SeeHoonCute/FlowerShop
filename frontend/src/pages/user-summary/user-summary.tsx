import {Container, Grid, Paper} from "@mantine/core";
import {UserSideBar} from "../../components/user-sidebar/user-sidebar";
import React from "react";
import UserDetail from "../../components/user-detail/user-detail";
import UserLocation from "../../components/user-location/user-location";

const links = [
  {
    "label": "Thông tin cá nhân",
    "link": "",
    "order": 1
  },
  {
    "label": "Địa chỉ",
    "link": "",
    "order": 1
  },
  {
    "label": "Đơn hàng",
    "link": "",
    "order": 1
  },
]

const UserSummary = () => {
  const [active, setActive] = React.useState(0);
  return (
    <Container>
      <Paper p="md" radius="md">
        <Grid>
          <Grid.Col span={3}>
            <UserSideBar links={links} active={active} setActive={setActive}/>
          </Grid.Col>
          <Grid.Col span={9}>
            {(active===0)&&<UserDetail/>}
            {(active===1)&&<UserLocation/>}
          </Grid.Col>
        </Grid>
      </Paper>
    </Container>
  )
}

export default UserSummary;
