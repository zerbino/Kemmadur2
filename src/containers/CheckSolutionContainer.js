/**
 * Created by rmartignoni on 10/02/2017.
 */
import CheckSolution from "../components/CheckSolution";
import { connect } from "react-redux";
import { hasGivenAllSolutions } from "../library/stateManipulations";

const mapStateToProps = (state, ownProps) => {
	let EXERCISE_LIST = ownProps.exerciseList;
	return {
		disabled: !hasGivenAllSolutions(state, EXERCISE_LIST)
	};
};

const CheckSolutionContainer = connect(mapStateToProps)(CheckSolution);

export default CheckSolutionContainer;
