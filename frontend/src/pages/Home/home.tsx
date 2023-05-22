import {useParams} from "react-router-dom";
import ListProduct from "../../components/ListProduct/Index";
import Styles from "./styles.module.scss";
import Banner from "../../components/Banner/Banner";
import ProductCollection from "../../components/ProductColection/Index";
import CodeCatalog from "../../components/CodeCatalog/Index";
export const Home = () => {
return(
  <div className={Styles.HomeSection}>
      <div>
        <div className={Styles.ListProducts}>
          <ProductCollection></ProductCollection>
      </div>
      </div>
        <div className={Styles.Banner}>
          <Banner></Banner>
        </div>

      {/* <div className={Styles.Section}>
        <div className={Styles.ListProducts}>
          <CodeCatalog></CodeCatalog>
        </div>
      </div> */}

      <div className={Styles.Section}>
        <div className={Styles.TitleSection}>
          Giá ưu đãi!
        </div>
        <div className={Styles.ListProducts}>
          <ListProduct></ListProduct>
        </div>
      </div>

      <div className={Styles.Section}>
        <div className={Styles.TitleSection}>
          Siêu hot ngày hôm nay!
        </div>
        <div className={Styles.ListProducts}>
          <ListProduct></ListProduct>
        </div>
      </div>

      <div className={Styles.Section}>
        <div className={Styles.TitleSection}>
          Xả kho!
        </div>
        <div className={Styles.ListProducts}>
          <ListProduct></ListProduct>
        </div>
      </div>

  </div>
)
};


