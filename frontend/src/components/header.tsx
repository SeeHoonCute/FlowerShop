import {Header as MantineHeader, Anchor} from "@mantine/core";

const navigations = [
  {name: "Home", href: "#", current: true},
  {name: "Others", href: "#", current: false},
  {name: "About", href: "#", current: false},
];

const Header = ()=> {
    return(
      <MantineHeader height={{base: 50, md: 70}} p="md">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: "100%",
            gap: "16px",
          }}
        >
          {/*TODO: Add logo*/}
          {navigations.map((item) => (
            <Anchor href={item.href} target="_self">
              {item.name}
            </Anchor>
          ))}
        </div>
      </MantineHeader>
    )
}

export default Header;
