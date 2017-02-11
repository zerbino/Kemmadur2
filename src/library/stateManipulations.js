/**
 * Created by rmartignoni on 10/02/2017.
 */

export const getCurrentExercise = (state, EXERCISE_LIST) => {
	return EXERCISE_LIST[state.currentExerciseIndex];
};

export const getCurrentMutations = (state, EXERCISE_LIST) => {
	return getCurrentExercise(state, EXERCISE_LIST).mutations;
};

export const getCurrentSentence = (state, EXERCISE_LIST) => {
	return getCurrentExercise(state, EXERCISE_LIST).splittedSentence;
};

export const hasGivenAllSolutions = (state, EXERCISE_LIST) => {
	return getCurrentMutations(state, EXERCISE_LIST).length === state.proposals.length;
};

/**
 * Return the array of answers given by the player, in the right order
 * @param state
 * @param exerciseList
 * @param exerciseIndex
 * @returns {Array}
 */
export const getSolutionsGiven = (state, exerciseList, exerciseIndex) => {
	let solutionsGivenList = state.proposals;
	let mutations = exerciseList[exerciseIndex].mutations;
	//Sort the solutions in the order of the mutations
	return solutionsGivenList.filter((proposal) => {
			return proposal.exerciseIndex === exerciseIndex;
		})
		.sort((answerA, answerB) => {
			return answerA.mutationIndex - answerB.mutationIndex;
		})
		// Map the proposal, of the form {mutationIndex, possibilityIndex, proposalId}, to {text, proposalId}
		.map((proposal) => {
			return {
				mutationIndex: proposal.mutationIndex,
				proposalId: proposal.proposalId,
				text: mutations.find(mutation => mutation.mutationIndex === proposal.mutationIndex).possibilities[proposal.possibilityIndex]
			};
		})
};

export const findProposalForMutation = (mutationIndex, proposals) => {
	return proposals.find((proposal) => proposal.mutationIndex === mutationIndex);
};
