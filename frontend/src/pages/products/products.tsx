import {Container, Grid, Pagination, Title} from "@mantine/core";
import FilterBar from "../../components/filter-bar/filter-bar";
import SortingBar from "../../components/sorting-bar/sorting-bar";

export const Products = () => {
  return (
    <Container size="xl">
      <Grid>
        <Grid.Col span="content">
          <FilterBar/>
        </Grid.Col>
        <Grid.Col span="auto">
          <SortingBar/>
          <div>
            Products
          </div>
          <Pagination total={10} position="center"/>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default Products;
