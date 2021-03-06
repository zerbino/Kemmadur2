/**
 * Created by rmartignoni on 08/02/2017.
 */
import { combineReducers } from "redux";
import proposals from "./proposals";
import currentExerciseIndex from "./currentExerciseIndex";

const initialState = {
	"currentExerciseIndex": 0,
	"proposals": [],
	"checkSolution": false,
	"showAnswers": false,
	"showMutationRule": false,
	"currentlyShowedMutationRule": {
		mutationRuleId: -1,
		caseId: -1
	},
	"currentMutationIndex": -1,
	"currentExerciseId": -1
};

const kemmadurApp = (state = initialState, action) => {
	switch (action.type) {
		case "NEXT_EXERCISE":
			return Object.assign({}, state, {currentExerciseIndex: currentExerciseIndex + 1});
		case "MAKE_PROPOSAL":
		{
			let proposals = state.proposals;
			let proposalInListIndex = proposals.findIndex((mutation) => {
				return mutation.mutationIndex === action.mutationIndex && mutation.exerciseId === state.currentExerciseId
			});
			let proposal = {
				mutationIndex: action.mutationIndex,
				possibilityIndex: action.possibilityIndex,
				proposalId: action.proposalId,
				exerciseId: state.currentExerciseId
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
			return Object.assign({}, state, {showAnswers: true});
		}
		case "SET_CURRENT_MUTATION":
			return Object.assign({}, state, {
				"currentExerciseId": action.currentExerciseId,
				"currentMutationIndex": action.currentMutationIndex
			});
		case "RESET_CURRENT_MUTATION":
			return Object.assign({}, state, {currentMutationIndex: -1});
		case "SET_SHOWED_MUTATION_RULE":
			return Object.assign({}, state, {
				showedMutationRule: {
					currentRuleMutationIndex: action.mutationIndex,
					currentRuleExerciseId: action.exerciseId
				}
			});
		case "RESET_SHOWED_MUTATION_RULE":
					return Object.assign({}, state, {showedMutationRule: undefined});
		default:
			return state;
	}
};

export default kemmadurApp;
