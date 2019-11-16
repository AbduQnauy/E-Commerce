import CollectionPage from "./collection.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import { selectCollectionsLoaded } from "../../redux/shop/shop.selectors";

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectCollectionsLoaded(state)
});

export default connect(mapStateToProps)(WithSpinner(CollectionPage));
