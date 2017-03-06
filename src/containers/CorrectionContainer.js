/**
 * Created by rmartignoni on 24/02/2017.
 */
import { connect } from "react-redux";
import Correction from "../components/Correction";
import { areAnswersRight, getCorrectedSentence, getMutationIndexes } from "../library/stateManipulations";
import { setShowedMutationRule } from "../actions/actions";

const mapStateToProps = (state, ownProps) => {
	return {
		show: state.showAnswers,
		rightAnswers: areAnswersRight(state.proposals, ownProps.exerciseList, ownProps.exerciseId),
		splittedCorrectedSentence: getCorrectedSentence(ownProps.exerciseList, ownProps.exerciseId),
		mutationIndexes: getMutationIndexes(ownProps.exerciseList, ownProps.exerciseId)
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onClickDisplayRule: (mutationIndex) => {
			dispatch(setShowedMutationRule(ownProps.exerciseId, mutationIndex));
		}
	};
};

const CorrectionContainer = connect(mapStateToProps, mapDispatchToProps)(Correction);

export default CorrectionContainer;
