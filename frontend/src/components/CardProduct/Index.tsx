export type CollectionProductProps = {
  // image: string;
  name: string;
  icon: ReactElement;
  color: string;
}
import { CardSection, createStyles, rem, Image, Title,Text, Card, BackgroundImage, Button } from "@mantine/core";
import Styles from "./styles.module.scss";
import { ReactElement } from "react";
const useStyles = createStyles((theme) => ({
 card: {
    border:'none',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: theme.radius.md,
    height: rem(90),
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    transition: 'box-shadow 150ms ease, transform 100ms ease',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
 },
 text:{
  color:'white'
 }
}))
const CollectionProduct = (props: CollectionProductProps) =>{
  // const { classes } = useStyles();
  // return(
  //   <Button className={classes.card}
  //     // shadow="md"
  //     p="xl"
  //     radius="md"
  //     sx={{ backgroundImage: `url(${props.image})` }}>
  //     <CardSection
  //   >
  //       <Text align="center"
  //       className={classes.text}
  //       >{props.name}</Text>
  //   </CardSection>
  //   </Button>
  // )
}
export default CollectionProduct;
