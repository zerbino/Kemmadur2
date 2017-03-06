/**
 * Created by rmartignoni on 02/03/2017.
 */
import ShowMutationRule from "../components/ShowMutationRule";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
	return {
		mutationIndex: state.currentMutationIndex,
		exerciseId: state.currentExerciseId
	}
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onClick: (ruleExerciseId, ruleMutationIndex) => {
			ownProps.onClickDisplayRule(ruleMutationIndex)
		}
	};
};

const ShowMutationRuleContainer = connect(mapStateToProps, mapDispatchToProps)(ShowMutationRule);

export default ShowMutationRuleContainer;
