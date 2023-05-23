import {Container, Grid, Pagination, Title} from "@mantine/core";
import FilterBar from "../../components/filter_bar/filter_bar";
import SortingBar from "../../components/sorting_bar/sorting_bar";
import ProductsList from "../../components/product_list/product_list";

export const Products = () => {
  return (
    <Container size="xl">
      <Grid>
        <Grid.Col span="content">
          <FilterBar/>
        </Grid.Col>
        <Grid.Col span="auto">
          <SortingBar/>
          <ProductsList/>
          <Pagination total={10} position="center"/>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default Products;
