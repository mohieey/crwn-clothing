import { connect } from "react-redux";
import {
  selectCollection,
  selectShopCollections,
} from "../../redux/shop/shopSelectors";

import "./CollectionPage.scss";
import CollectionItem from "./../../components/CollectionItem/CollectionItem";

const CollectionPage = ({ collection }) => {
  return (
    <div className="collection-page">
      <h1 className="title">{collection.title}</h1>
      <div className="items">
        {collection.items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionName)(state),
});
export default connect(mapStateToProps)(CollectionPage);
