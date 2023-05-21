import { useForm } from "@mantine/form";
// import { IconLock, IconMail } from "@tabler/icons";
import { FacebookButton } from "./components/socialButtom/socialButtom/facebook/index";
import { GoogleButton } from "./components/socialButtom/socialButtom/google/index";
import { ButtonProps, Checkbox  } from "@mantine/core";
import { IconLock, IconMail } from "@tabler/icons-react";
interface AuthenticationButtonProps extends ButtonProps{}

import {
  ActionIcon,
  Anchor,
  Button,
  Divider,
  Group,
  Paper,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Box
} from "@mantine/core";

export function AuthenticationSignUpForm(props:AuthenticationButtonProps) {
  const form = useForm({
    initialValues: {
      email: 'nguyentri@gmail.com',
      // name: "",
      password: 'secret',
      confirmPassword: 'sevret',
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (val) =>( val.length <= 6
        ? "Password should include at least 6 characters"
        : null),
      confirmPassword: (value, values) =>
      value !== values.password ? 'Passwords did not match' : null,
    },
  });

  return (
    <Paper
    radius="md"
    p="xl"
    withBorder
    style={{ width: "430px", border: "none" }}
    {...props}
  >
    <Text size="xl" weight={500}>
      Sign Up Form
    </Text>
    <Text c="dimmed" style={{ fontSize: "12px", marginTop: "2%" }}>
      Start managing your finnace faster and better{" "}
    </Text>

    <form onSubmit={form.onSubmit(() => {})}>
      <Stack>
        <TextInput
          variant="filled"
          icon={
            <ActionIcon variant="outline" color="blue" p={4} bg="white">
              <IconMail />
            </ActionIcon>
          }
          size="md"
          style={{ marginTop: "8%" }}
          required
          placeholder="Seehoon@gmail.com"
          value={form.values.email}
          onChange={(event) =>
            form.setFieldValue("email", event.currentTarget.value)
          }
          error={form.errors.email && "Invalid email"}
        />

        <PasswordInput
          variant="filled"
          icon={
            <ActionIcon variant="outline" color="blue" p={4} bg="white">
              <IconLock />
            </ActionIcon>
          }
          size="md"
          required
          placeholder="Your password"
          // value={form.values.password}
            {...form.getInputProps("password")}

          // error={
          //   form.errors.password &&
          //   "Password should include at least 6 characters"
          // }
        />

          <PasswordInput
          variant="filled"
          icon={
            <ActionIcon variant="outline" color="blue" p={4} bg="white">
              <IconLock />
            </ActionIcon>
          }
          size="md"
          required
          placeholder="Confirm password"
          // value={form.values.confirmPassword}
          { ...form.getInputProps("confirmPassword")}

        />
      </Stack>

      <Group position="apart" mt="xl">
        <Button size="md" type="submit" style={{ width: "100%" }}>
          Login
        </Button>
      </Group>
    </form>

    <Divider
      c="dimmed"
      label="Or"
      labelPosition="center"
      my="lg"
      style={{ marginTop: "10%" }}
    />

    <Group grow mb="md" mt="md">
      <GoogleButton size="md" radius="10px">
        Google
      </GoogleButton>
      {/* <FacebookButton size="md" radius="10px">
        Facebook
      </FacebookButton> */}
    </Group>

    <Text c="dimmed" size="sm" align="center" mt="10%">
      Already have an account ?{" "}
      <Anchor
        ml={5}
        href="#"
        weight={700}
        onClick={(event) => event.preventDefault()}
      >
        Sign In
      </Anchor>
    </Text>
  </Paper>
  );
}
