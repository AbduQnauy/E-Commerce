import { connect } from "react-redux";
import CollectionsOverView from "./collections-overview.component";
import WithSpinner from "../with-spinner/with-spinner.component";
import { createStructuredSelector } from "reselect";
import { selectCollectionIsFetched } from "../../redux/shop/shop.selectors";

const CollectionOverviewContainer = ({ isFetchingCollections }) => {
  return WithSpinner(CollectionsOverView)({
    isLoading: isFetchingCollections
  });
};
const mapStateToProps = createStructuredSelector({
  isFetchingCollections: selectCollectionIsFetched
});

export default connect(mapStateToProps)(CollectionOverviewContainer);
