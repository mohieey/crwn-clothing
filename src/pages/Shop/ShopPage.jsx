import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionsOverview from "../../components/CollectionsOverview/CollectionsOverview";

import CollectionPreview from "../../components/PreviewCollection/CollectionPreview";

import { selectShopCollections } from "./../../redux/shop/shopSelectors";

const ShopPage = ({ collections }) => {
  return (
    <div className="shop-page">
      <CollectionsOverview />
    </div>
  );
};

export default ShopPage;
