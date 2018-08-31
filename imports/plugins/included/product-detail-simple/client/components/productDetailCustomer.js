import React, { Component } from "react";
import PropTypes from "prop-types";
import { Components } from "@reactioncommerce/reaction-components";
import { ReactionLayout } from "/imports/plugins/core/layout/lib";

class ProductDetailCustomer extends Component {
  render() {
    return (
      <div className="pdp" style={{ position: "relative" }}>
        <div className="container-main pdp-container" itemScope itemType="http://schema.org/Product">
          <div className="row">
            <Components.Alerts placement="productManagement" />
            <ReactionLayout
              context={this}
              layoutName={this.props.layout}
              layoutProps={this.props}
            />
          </div>
        </div>
      </div>
    );
  }
}

ProductDetailCustomer.propTypes = {
  layout: PropTypes.string
};

export default ProductDetailCustomer;