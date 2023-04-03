import {ActionIcon, Group, NumberInput, rem} from "@mantine/core";
import {useState} from "react";

export const NumberWithAddSub = () => {
  const [value, setValue] = useState<number>(0);

  return (
    <Group spacing={5}>
      <ActionIcon size={42} variant="default" onClick={() => setValue(value - 1)}>
        –
      </ActionIcon>

      <NumberInput
        hideControls
        value={value}
        max={10}
        min={0}
        step={2}
        styles={{input: {width: rem(54), textAlign: 'center'}}}
      />

      <ActionIcon size={42} variant="default" onClick={() => setValue(value + 1)}>
        +
      </ActionIcon>
    </Group>
  );
}
