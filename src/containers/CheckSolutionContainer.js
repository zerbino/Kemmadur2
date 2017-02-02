/**
 * Created by rmartignoni on 10/02/2017.
 */
import CheckSolution from "../components/CheckSolution";
import { connect } from "react-redux";
import { checkSolution } from "../actions/actions";

// So far, not really usefull to have a container for this, BUT we know practically for sure that
// we'll add some conditions to clicking the button.
const mapStateToProps = (state, ownProps) => {
	return {
		disabled: state.showAnswers
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onCheckSolution: () => dispatch(checkSolution())
	}
};

const CheckSolutionContainer = connect(mapStateToProps, mapDispatchToProps)(CheckSolution);

export default CheckSolutionContainer;
