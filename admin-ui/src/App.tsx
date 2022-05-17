import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { BrandInfoList } from "./brandInfo/BrandInfoList";
import { BrandInfoCreate } from "./brandInfo/BrandInfoCreate";
import { BrandInfoEdit } from "./brandInfo/BrandInfoEdit";
import { BrandInfoShow } from "./brandInfo/BrandInfoShow";
import { ProductCategoryList } from "./productCategory/ProductCategoryList";
import { ProductCategoryCreate } from "./productCategory/ProductCategoryCreate";
import { ProductCategoryEdit } from "./productCategory/ProductCategoryEdit";
import { ProductCategoryShow } from "./productCategory/ProductCategoryShow";
import { SupplierInfoList } from "./supplierInfo/SupplierInfoList";
import { SupplierInfoCreate } from "./supplierInfo/SupplierInfoCreate";
import { SupplierInfoEdit } from "./supplierInfo/SupplierInfoEdit";
import { SupplierInfoShow } from "./supplierInfo/SupplierInfoShow";
import { ProductSPUInfoList } from "./productSpuInfo/ProductSPUInfoList";
import { ProductSPUInfoCreate } from "./productSpuInfo/ProductSPUInfoCreate";
import { ProductSPUInfoEdit } from "./productSpuInfo/ProductSPUInfoEdit";
import { ProductSPUInfoShow } from "./productSpuInfo/ProductSPUInfoShow";
import { ProductPicInfoList } from "./productPicInfo/ProductPicInfoList";
import { ProductPicInfoCreate } from "./productPicInfo/ProductPicInfoCreate";
import { ProductPicInfoEdit } from "./productPicInfo/ProductPicInfoEdit";
import { ProductPicInfoShow } from "./productPicInfo/ProductPicInfoShow";
import { GoodsSkuInfoList } from "./goodsSkuInfo/GoodsSkuInfoList";
import { GoodsSkuInfoCreate } from "./goodsSkuInfo/GoodsSkuInfoCreate";
import { GoodsSkuInfoEdit } from "./goodsSkuInfo/GoodsSkuInfoEdit";
import { GoodsSkuInfoShow } from "./goodsSkuInfo/GoodsSkuInfoShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"My app"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="BrandInfo"
          list={BrandInfoList}
          edit={BrandInfoEdit}
          create={BrandInfoCreate}
          show={BrandInfoShow}
        />
        <Resource
          name="ProductCategory"
          list={ProductCategoryList}
          edit={ProductCategoryEdit}
          create={ProductCategoryCreate}
          show={ProductCategoryShow}
        />
        <Resource
          name="SupplierInfo"
          list={SupplierInfoList}
          edit={SupplierInfoEdit}
          create={SupplierInfoCreate}
          show={SupplierInfoShow}
        />
        <Resource
          name="ProductSPUInfo"
          list={ProductSPUInfoList}
          edit={ProductSPUInfoEdit}
          create={ProductSPUInfoCreate}
          show={ProductSPUInfoShow}
        />
        <Resource
          name="ProductPicInfo"
          list={ProductPicInfoList}
          edit={ProductPicInfoEdit}
          create={ProductPicInfoCreate}
          show={ProductPicInfoShow}
        />
        <Resource
          name="GoodsSkuInfo"
          list={GoodsSkuInfoList}
          edit={GoodsSkuInfoEdit}
          create={GoodsSkuInfoCreate}
          show={GoodsSkuInfoShow}
        />
      </Admin>
    </div>
  );
};

export default App;
