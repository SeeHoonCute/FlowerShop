const navigations = [
  {name: "Home", href: "#", current: true},
  {name: "Others", href: "#", current: false},
  {name: "About", href: "#", current: false},
];

const Header = ()=> {
    return(
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
            <div>
              {item.name}
            </div>
          ))}
        </div>
    )
}

export default Header;
