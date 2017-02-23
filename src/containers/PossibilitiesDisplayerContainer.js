/**
 * Created by rmartignoni on 17/02/2017.
 */
import { connect } from "react-redux";
import { makeProposal } from "../actions/actions";
import { resetCurrentMutation } from "../actions/actions";
import PossibilitiesDisplayer from "../components/PossibilitiesDisplayer";

const mapStateToProps = (state, ownProps) => {
	return {
		possibilities: ownProps.possibilities,
		isCurrent: ownProps.isCurrent
	}
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onPossibilityClicked: (possibilityIndex) => {
			dispatch(makeProposal(possibilityIndex, ownProps.mutationIndex, ownProps.exerciseId));
			dispatch(resetCurrentMutation())
		}
	}
};

const PossibilitiesDisplayerContainer = connect(mapStateToProps, mapDispatchToProps)(PossibilitiesDisplayer);

export default PossibilitiesDisplayerContainer;
