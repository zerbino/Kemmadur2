/**
 * Created by rmartignoni on 09/02/2017.
 */
import { connect } from "react-redux";
import Result from "../components/Result";

const getActualSolutions = (state, exerciseList) => {
	return exerciseList[state.currentExerciseIndex].mutations.map((mutation) => {
		return mutation.possibilities[mutation.solutionIndex];
	})
};

const getShowSolution = (state) => {
	return state.checkSolution;
};

const mapStateToProps = (state, ownProps) => {
	return {
		actualSolutions: getActualSolutions(state, ownProps.exerciseList),
		showSolution: getShowSolution(state)
	}
};

const ResultContainer = connect(mapStateToProps)(Result);

export default ResultContainer;
