import React from "react";
import { Route } from "react-router-dom";
import CollectionsOverView from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase-utils";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

// const CollectionsOverViewWithSpinner = WithSpinner(CollectionsOverView);
// const CollectionsPageWithSpinner = WithSpinner(CollectionPage);

class shopPage extends React.Component {
  state = { loading: true };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   this.setState({
    //     loading: false
    //   });
    // });

    collectionRef.get().then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({
        loading: false
      });
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          // render={() => <CollectionsOverViewWithSpinner isLoading={loading} />}
          // render={() => CollectionsOverViewWithSpinner({ isLoading: loading })}
          render={() =>
            WithSpinner(CollectionsOverView)({ isLoading: loading })
          }
        />

        <Route
          path={`${match.path}/:collectionId`}
          render={props =>
            // <CollectionsPageWithSpinner isLoading={loading} {...props} />
            // CollectionsPageWithSpinner({ isLoading: loading, ...props })
            WithSpinner(CollectionPage)({ isLoading: loading, ...props })
          }
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap))
});
export default connect(
  null,
  mapDispatchToProps
)(shopPage);
