import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import CollectionOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionCotainer from "../collection/collection.container";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

// const CollectionsOverViewWithSpinner = WithSpinner(CollectionsOverView);
// const CollectionsPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({ fetchCollectionsStart, match }) => {
  // componentDidMount() {
  //   const { fetchCollectionsStart } = this.props;
  //   fetchCollectionsStart();
  // }
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);
  return (
    <div className="shop-page">
      {/* <Route
          exact
          path={`${match.path}`}
          // render={() => <CollectionsOverViewWithSpinner isLoading={loading} />}
          // render={() => CollectionsOverViewWithSpinner({ isLoading: loading })}
          render={() =>
            WithSpinner(CollectionsOverView)({
              isLoading: isFetchingCollections
            })
          }
        /> */}
      <Route
        exact
        path={`${match.path}`}
        component={CollectionOverviewContainer}
      />

      {/* <Route
          path={`${match.path}/:collectionId`}
          render={props =>
            // <CollectionsPageWithSpinner isLoading={loading} {...props} />
            // CollectionsPageWithSpinner({ isLoading: loading, ...props })
            WithSpinner(CollectionPage)({
              isLoading: !isCollectionLoaded,
              ...props
            })
          }
        /> */}
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionCotainer}
      />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
