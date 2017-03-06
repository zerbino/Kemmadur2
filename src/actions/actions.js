/**
 * Created by rmartignoni on 09/02/2017.
 */

let proposalId = 0;

export const makeProposal = (possibilityIndex, mutationIndex, exerciseId) => {
	return {
		type: "MAKE_PROPOSAL",
		possibilityIndex,
		proposalId: proposalId++,
		mutationIndex,
		exerciseId
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
export const setCurrentMutation = (currentExerciseId, currentMutationIndex) => {
	return {
		type: "SET_CURRENT_MUTATION",
		currentExerciseId,
		currentMutationIndex
	};
};

export const resetCurrentMutation = () => {
	return {
		type: "RESET_CURRENT_MUTATION"
	};
};

export const setShowedMutationRule = (exerciseId, mutationIndex) => {
	return {
		type: "SET_SHOWED_MUTATION_RULE",
		exerciseId,
		mutationIndex
	}
};

export const reSetShowedMutationRule = () => {
	return {
		type: "RESET_SHOWED_MUTATION_RULE"
	}
};
