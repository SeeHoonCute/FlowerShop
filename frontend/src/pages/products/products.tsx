import {Container, Grid, Pagination, Title} from "@mantine/core";
import FilterBar from "../../components/filter_bar/filter_bar";
import SortingBar from "../../components/sorting_bar/sorting_bar";
import ProductsList from "../../components/product_list/product_list";
// import { NUMPAGE } from "./methods";
import { useEffect, useState } from "react";

export const Products = () => {
  const [activePage, setPage] = useState(1);
  const [totalPage, setTotalPage]=useState(10);


  return (
    <Container size="xl">
      <Grid>
        <Grid.Col span="content">
          <FilterBar/>
        </Grid.Col>
        <Grid.Col span="auto">
          <SortingBar/>
          <ProductsList page={activePage} size={20} setTotalPage={setTotalPage}/>
          <Pagination value={activePage} onChange={setPage} total={totalPage} />
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default Products;
