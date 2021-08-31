import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./CollectionsOverview.scss";
import CollectionPreview from "./../PreviewCollection/CollectionPreview";
import { selectShopCollectionsAsArray } from "./../../redux/shop/shopSelectors";

const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionsAsArray,
});

export default connect(mapStateToProps)(CollectionsOverview);
