import {useParams} from "react-router-dom";
import ListProduct from "../../components/ListProduct/Index";
import Styles from "./styles.module.scss";
import Banner from "../../components/Banner/Banner";
import CollectionProductList from "../../components/ProductColection/Index";
import CodeCatalog from "../../components/CodeCatalog/Index";
import { Title } from "@mantine/core";
import ProductsList from "../../components/product_list/product_list";
export const Home = () => {
return(
  <div className={Styles.HomeSection}>
        <div className={Styles.Banner}>
          <Banner></Banner>
        </div>
      <div>
        <div className={Styles.ListProducts}>
          <CollectionProductList></CollectionProductList>
      </div>
      </div>
      <div className={Styles.SectionCard}>
        <Title className={Styles.TitleSection}>
          SALE CỰC MẠNH!
        </Title>
        <div className={Styles.ListProducts}>
          <ListProduct></ListProduct>
        </div>
      </div>

      <div className={Styles.Section}>
        <Title className={Styles.TitleSection}>
          SIÊU HOT NGÀY HÔM NAY!
        </Title>
        <div className={Styles.ListProducts}>
          <ListProduct></ListProduct>
        </div>
      </div>

      <div className={Styles.Section}>
        <Title className={Styles.TitleSection}>
          XẢ KHO!
        </Title>
        <div className={Styles.ListProducts}>
          <ListProduct></ListProduct>
        </div>
      </div>

  </div>
)
};


