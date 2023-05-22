import { Card, Image, Text, Group, Badge, createStyles, Center, Button, rem } from '@mantine/core';
import { IconGasStation, IconGauge, IconManualGearbox, IconUsers } from '@tabler/icons-react';
import FlowerImg from "../..//assets/img/FlowerImg/hoa.webp";
import Styles from "./styles.module.scss";
const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  imageSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  label: {
    marginBottom: theme.spacing.xs,
    lineHeight: 1,
    fontWeight: 700,
    fontSize: theme.fontSizes.xs,
    letterSpacing: rem(-0.25),
    textTransform: 'uppercase',
  },

  section: {
    padding: theme.spacing.md,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  icon: {
    marginRight: rem(5),
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[5],
  },
}));

function FeaturesCard() {
  const { classes } = useStyles();
  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section className={classes.imageSection}>
        <Image src={FlowerImg} alt="Hoa Hong" />
      </Card.Section>

      <Group position="apart" mt="md" className={Styles.fontSize}>
        <div>
          <Text fw={500}>Hoa Hồng đỏ</Text>
        </div>
        <Badge variant="outline" className={Styles.ColorFont}>- 25%</Badge>
      </Group>
      <Card.Section className={classes.section}>
        <Group spacing={30}>
          <div>
            <Text fz="xl" fw={700} sx={{ lineHeight: 1 }} className={Styles.description}>
              360.000 đ
            </Text>
            <Text fz="sm" c="dimmed" fw={500} sx={{ lineHeight: 1 }} mt={3} className={Styles.Cost}>
              480.000 đ
            </Text>
          </div>

          <Button className={Styles.Color} radius="xl" style={{ flex: 1 }} >
            Mua
          </Button>
        </Group>
      </Card.Section>
    </Card>
  );
}
export default FeaturesCard
