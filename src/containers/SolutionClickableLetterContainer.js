/**
 * Created by rmartignoni on 06/03/2017.
 */
import { connect } from "react-redux";
import SolutionClickableLetter from "../components/SolutionClickableLetter";

const mapStateToProps = (state, ownProps) => {
	return {
		exerciseId: ownProps.exerciseId,
		mutationIndex: ownProps.currentMutationIndex,
		solutionLetter: ownProps.solutionLetter
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onClick: (ruleMutationIndex) => {
			ownProps.onClickDisplayRule(ruleMutationIndex);
		}
	};
};

const SolutionClickableLetterContainer = connect(mapStateToProps, mapDispatchToProps)(SolutionClickableLetter);

export default SolutionClickableLetterContainer;
