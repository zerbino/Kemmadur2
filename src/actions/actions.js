/**
 * Created by rmartignoni on 09/02/2017.
 */

let proposalId = 0;

export const makeProposal = (possibilityIndex) => {
	return {
		type: "MAKE_PROPOSAL",
		possibilityIndex,
		proposalId: proposalId++
	};
};

export const checkSolution = () => {
	return {
		type: "CHECK_SOLUTION"
	}
};

/**
 * Set the mutation the user is about to answer
 * @returns {{type: string}}
 */
export const setCurrentMutation = (currentExerciseIndex, currentMutationIndex) => {
	return {
		type: "SET_CURRENT_MUTATION",
		currentExerciseIndex,
		currentMutationIndex
	};
};
