import { Button } from "@mantine/core";
import { GoogleIcon } from "./GoogleIcon";
import { ButtonProps  } from "@mantine/core";
interface GoogleButtonProps extends ButtonProps{}

export function GoogleButton(props:GoogleButtonProps) {
  return (
    <Button
      leftIcon={<GoogleIcon />}
      variant="default"
      color="gray"
      {...props}
    />
  );
}
