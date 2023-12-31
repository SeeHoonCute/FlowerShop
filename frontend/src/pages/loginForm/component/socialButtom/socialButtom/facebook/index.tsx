import { Button, ButtonProps  } from "@mantine/core";
import { FacebookIcon } from "./FacebookIcon";
interface FacebookButtonProps extends ButtonProps{}

export function FacebookButton(props:FacebookButtonProps) {
  return (
    <Button
      leftIcon={<FacebookIcon />}
      sx={(theme) => ({
        backgroundColor: "#4267B2",
        color: "#fff",
        "&:hover": {
          backgroundColor: theme.fn.darken("#4267B2", 0.1),
        },
      })}
      {...props}
    />
  );
}
