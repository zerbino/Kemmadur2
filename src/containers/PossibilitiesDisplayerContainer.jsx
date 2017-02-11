/**
 * Created by rmartignoni on 08/02/2017.
 */
import { connect } from "react-redux";
import PossibilitiesDisplayer from "../components/PossibilitiesDisplayer";
import { makeProposal } from "../actions/actions";

const getPossibilities = (state, exerciseList) => {
	let mutation = exerciseList[state.currentExerciseIndex].mutations.find((mutation) => {
		return mutation.mutationIndex === state.currentMutationIndex;
	});
	return mutation ? mutation.possibilities : [];
};

const mapStateToProps = (state, ownProps) => {
	return {
		possibilities: getPossibilities(state, ownProps.exerciseList),
		disabled: state.checkSolution
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onPossibilityClick: (possibilityIndex) => {
			dispatch(makeProposal(possibilityIndex));
		}
	}
};

const PossibilitiesDisplayerContainer = connect(mapStateToProps, mapDispatchToProps)(PossibilitiesDisplayer);

export default PossibilitiesDisplayerContainer;
