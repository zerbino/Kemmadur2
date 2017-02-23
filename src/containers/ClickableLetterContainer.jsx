/**
 * Created by rmartignoni on 17/02/2017.
 */
import { connect } from "react-redux";
import { isCurrentMutation } from "../library/stateManipulations";
import { getPossibilities } from "../library/stateManipulations";
import ClickableLetter from "../components/ClickableLetter";

const mapStateToProps = (state, ownProps) => {
	return {
		letter: ownProps.letter,
		possibilities: getPossibilities(state, ownProps.exerciseList, ownProps.exerciseId, ownProps.mutationIndex),
		mutationIndex: ownProps.mutationIndex,
		isCurrent: isCurrentMutation(state, ownProps.mutationIndex, ownProps.exerciseId),
		isProposal: ownProps.isProposal,
		exerciseId: ownProps.exerciseId
	}
};

const mapDispatchToProps = (state, ownProps) => {
	return {
		onClick: ownProps.onClick
	}
};

const ClickableLetterContainer = connect(mapStateToProps, mapDispatchToProps)(ClickableLetter);

export default ClickableLetterContainer;
