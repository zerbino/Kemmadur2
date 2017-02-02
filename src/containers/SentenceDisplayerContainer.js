/**
 * Created by rmartignoni on 09/02/2017.
 */
import SentenceDisplayer from "../components/SentenceDisplayer";
import { connect } from "react-redux";
import { getSolutionsGiven } from "../library/stateManipulations";
import { getExerciseSentence } from "../library/stateManipulations";
import { getMutationIndexes } from "../library/stateManipulations";
import { setCurrentMutation } from "../actions/actions"

const mapStateToProps = (state, ownProps) => {
	return {
		mutationIndexes: getMutationIndexes(ownProps.exerciseList, ownProps.exerciseId),
		splittedSentence: getExerciseSentence(ownProps.exerciseList, ownProps.exerciseId),
		proposals: getSolutionsGiven(state, ownProps.exerciseList, ownProps.exerciseId),
		exerciseId: ownProps.exerciseId
	}
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onMutationClicked: (mutationIndex) => {
			dispatch(setCurrentMutation(ownProps.exerciseId, mutationIndex));
		}
	}
};

const SentenceDisplayerContainer = connect(mapStateToProps, mapDispatchToProps)(SentenceDisplayer);

export default SentenceDisplayerContainer;
