import {
  Text,
  TextInput,
  Textarea,
  Button,
  Group,
  SimpleGrid,
  createStyles,
  rem, Select,
} from '@mantine/core';

const useStyles = createStyles((theme) => {
  const BREAKPOINT = theme.fn.smallerThan('sm');

  return {
    form: {
      boxSizing: 'border-box',
      flex: 1,
      padding: theme.spacing.xl,
      paddingLeft: `calc(${theme.spacing.xl} * 2)`,
      borderLeft: 0,

      [BREAKPOINT]: {
        padding: theme.spacing.md,
        paddingLeft: theme.spacing.md,
      },
    },

    fields: {
      marginTop: rem(-12),
    },

    fieldInput: {
      flex: 1,

      '& + &': {
        marginLeft: theme.spacing.md,

        [BREAKPOINT]: {
          marginLeft: 0,
          marginTop: theme.spacing.md,
        },
      },
    },

    fieldsGroup: {
      display: 'flex',

      [BREAKPOINT]: {
        flexDirection: 'column',
      },
    },

    title: {
      marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,

      [BREAKPOINT]: {
        marginBottom: theme.spacing.xl,
      },
    },

    control: {
      [BREAKPOINT]: {
        flex: 1,
      },
    },
  };
});

const UserDetail = () => {
  const {classes} = useStyles();
  return (
    <form className={classes.form} onSubmit={(event) => event.preventDefault()}>
      <Text fz="lg" fw={700} className={classes.title}>
        Thông tin cá nhân
      </Text>

      <div className={classes.fields}>
        <TextInput label="Tên của bạn" placeholder="Tên của bạn" value="Huy Khoa Nguyễn"/>
        <TextInput label="Email" placeholder="flowery@gmail.com" value="19521697@gm.uit.edu.vn"/>

        <Select
          label="Giới tính"
          placeholder="Giới tính"
          value={"react"}
          data={[
            {value: 'react', label: 'Nam'},
            {value: 'ng', label: 'Nữ'},
            {value: 'svelte', label: 'Không xác định'},
          ]}
        />

        <Group position="right" mt="md">
          <Button type="submit" className={classes.control}>
            Cập nhật
          </Button>
        </Group>
      </div>
    </form>
  )
}

export default UserDetail;
