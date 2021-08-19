import React, { Component } from "react";
import CollectionPreview from "../../components/PreviewComponent/CollectionPreview";

import SHOP_DATA from "./ShopData";

class ShopPage extends Component {
  constructor() {
    super();

    this.state = { collections: SHOP_DATA };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
