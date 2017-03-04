/**
 * Created by rmartignoni on 02/03/2017.
 */
import ShowMutationRule from "../components/ShowMutationRule";
import { setShowMutationRule } from "../actions/actions";
import { connect } from "react-redux";

const mapStateToProps = () => {
	return {}
};

const mapDispatchToProps = (dispatch) => {
	return {
		OnClick: () => {
			dispatch(setShowMutationRule(true));
		}
	};
};

const ShowMutationRuleContainer = connect(mapStateToProps, mapDispatchToProps)(ShowMutationRule);

export default ShowMutationRuleContainer;
