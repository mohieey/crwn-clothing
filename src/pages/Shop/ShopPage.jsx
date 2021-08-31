import { Route } from "react-router-dom";

import CollectionsOverview from "../../components/CollectionsOverview/CollectionsOverview";
import CollectionPage from "./../Collection/CollectionPage";

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={match.path} component={CollectionsOverview} />
      <Route
        path={`${match.path}/:collectionName`}
        component={CollectionPage}
      />
    </div>
  );
};

export default ShopPage;
