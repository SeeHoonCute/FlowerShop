import {AppShell, useMantineTheme} from "@mantine/core";
import {Outlet} from 'react-router-dom';
import Footer from "./components/footer";
import Header from "./components/header";

export const Frame = () => {
  const theme = useMantineTheme();
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors["dark"][8]
              : theme.colors["gray"][0],
        },
      }}
      footer={
        <Footer/>
      }
      header={
        <Header/>
      }
    >
      <Outlet></Outlet>
    </AppShell>
  );
};
