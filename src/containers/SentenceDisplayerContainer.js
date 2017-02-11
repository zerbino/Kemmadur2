/**
 * Created by rmartignoni on 09/02/2017.
 */
import SentenceDisplayer from "../components/SentenceDisplayer";
import { connect } from "react-redux";
import { getSolutionsGiven } from "../library/stateManipulations";
import { setCurrentMutation } from "../actions/actions"

const getSplittedSentence = (state, exerciseList, exerciseIndex) => {
	return exerciseList[exerciseIndex].splittedSentence;
};

const getMutationIndexes = (state, exerciseList, exerciseIndex) => {
	return exerciseList[exerciseIndex].mutations.map((mutation) => mutation.mutationIndex);
};

const mapStateToProps = (state, ownProps) => {
	return {
		mutationIndexes: getMutationIndexes(state, ownProps.exerciseList, ownProps.exerciseIndex),
		splittedSentence: getSplittedSentence(state, ownProps.exerciseList, ownProps.exerciseIndex),
		proposals: getSolutionsGiven(state, ownProps.exerciseList, ownProps.exerciseIndex)
	}
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onMutationClicked: (mutationIndex) => {
			dispatch(setCurrentMutation(ownProps.exerciseIndex, mutationIndex));
		}
	}
};

const SentenceDisplayerContainer = connect(mapStateToProps, mapDispatchToProps)(SentenceDisplayer);

export default SentenceDisplayerContainer;
