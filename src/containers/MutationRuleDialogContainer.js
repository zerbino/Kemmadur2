/**
 * Created by rmartignoni on 02/03/2017.
 */
import MutationRuleDialog from "../components/MutationRuleDialog";
import { reSetShowedMutationRule } from "../actions/actions";
import { resetCurrentMutation } from "../actions/actions";
import { getCurrentMutationRuleAndCaseId } from "../library/stateManipulations";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
	return {
		poppedUp: !!state.showedMutationRule,
		mutationRuleAndCaseId: getCurrentMutationRuleAndCaseId(state.showedMutationRule, ownProps.exerciseList, ownProps.mutationRules)
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		OnClose: () => {
			dispatch(reSetShowedMutationRule());
		}
	};
};

const MutationRuleDialogContainer = connect(mapStateToProps, mapDispatchToProps)(MutationRuleDialog);

export default MutationRuleDialogContainer;
