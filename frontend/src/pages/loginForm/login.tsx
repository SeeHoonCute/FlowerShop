import { AuthenticationSignInForm } from "./component/AuthenticationSignInForm";
import { Text } from "@mantine/core";
import SliderLogin from "./component/slider";

function LoginForm() {
  return (
    <div style={{ display: "flex", width: "100%", minHeight: "100vh" }}>
      <div style={{ backgroundColor: "#f6f6f6", width: "40%" }}>
        <SliderLogin />
      </div>
      <div
        style={{
          backgroundColor: "white",
          width: "60%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <AuthenticationSignInForm></AuthenticationSignInForm>
        <footer 
          style={{ position: "absolute", bottom: "0px", marginBottom: "10px" }}
        >
          <Text c="dimmed" size="11px" align="center" mt="10%">
            @ 2022 ALL RIGHTS RESERVED
          </Text>
        </footer>
      </div>
    </div>
  );
}

export default LoginForm;
