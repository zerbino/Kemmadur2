/**
 * Created by rmartignoni on 08/02/2017.
 */
import { combineReducers } from "redux";
import proposals from "./proposals";
import currentExerciseIndex from "./currentExerciseIndex";

const initialState = {
	"currentExerciseIndex": 0,
	"proposals": [],
	"checkSolution": false
};

const kemmadurApp = (state = initialState, action) => {
	switch (action.type) {
		case "NEXT_EXERCISE":
			return Object.assign({}, state, {currentExerciseIndex: currentExerciseIndex + 1});
		case "MAKE_PROPOSAL":
		{
			let proposals = state.proposals;
			let proposalInListIndex = proposals.findIndex((mutation) => {
				return mutation.mutationIndex === state.currentMutationIndex && mutation.exerciseIndex === state.currentExerciseIndex
			});
			let proposal = {
				mutationIndex: state.currentMutationIndex,
				possibilityIndex: action.possibilityIndex,
				proposalId: action.proposalId,
				exerciseIndex: state.currentExerciseIndex
			};
			let newProposals;
			if (state.checkSolution) {
				return state;
			}
			else if (proposalInListIndex !== -1) {
				newProposals = proposals.slice();
				newProposals.splice(proposalInListIndex, 1, proposal);
			}
			else {
				newProposals = [...proposals, proposal];
			}
			return Object.assign({}, state, {proposals: newProposals});
		}
		case "CHECK_SOLUTION": {
			return Object.assign({}, state, {checkSolution: true});
		}
		case "SET_CURRENT_MUTATION":
			return Object.assign({}, state, {
				"currentExerciseIndex": action.currentExerciseIndex,
				"currentMutationIndex": action.currentMutationIndex
			});
		default:
			return state;
	}
};

export default kemmadurApp;
