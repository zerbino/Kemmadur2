/**
 * Created by rmartignoni on 24/02/2017.
 */
import { connect } from "react-redux";
import Correction from "../components/Correction";
import { areAnswersRight, getCorrectedSentence, getMutationIndexes } from "../library/stateManipulations";

const mapStateToProps = (state, ownProps) => {
	return {
		show: state.showAnswers,
		rightAnswers: areAnswersRight(state.proposals, ownProps.exerciseList, ownProps.exerciseId),
		splittedCorrectedSentence: getCorrectedSentence(ownProps.exerciseList, ownProps.exerciseId),
		mutationIndexes: getMutationIndexes(ownProps.exerciseList, ownProps.exerciseId)
	};
};

const CorrectionContainer = connect(mapStateToProps)(Correction);

export default CorrectionContainer;
