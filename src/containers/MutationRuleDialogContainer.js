/**
 * Created by rmartignoni on 02/03/2017.
 */
import MutationRuleDialog from "../components/MutationRuleDialog";
import { setShowMutationRule } from "../actions/actions";
import { resetCurrentMutation } from "../actions/actions";
import { getCurrentMutationRuleAndCaseId } from "../library/stateManipulations";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
	return {
		poppedUp: state.showMutationRule,
		mutationRuleAndCaseId: getCurrentMutationRuleAndCaseId(state, ownProps.exerciseList, ownProps.mutationRules)
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		OnClose: () => {
			dispatch(setShowMutationRule(false));
			dispatch(resetCurrentMutation());
		}
	};
};

const MutationRuleDialogContainer = connect(mapStateToProps, mapDispatchToProps)(MutationRuleDialog);

export default MutationRuleDialogContainer;
