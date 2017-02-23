/**
 * Created by rmartignoni on 10/02/2017.
 */

export const getExercise = (state, EXERCISE_LIST, exerciseId) => {
	return EXERCISE_LIST.find((exercise) => {
		return exercise.id === exerciseId;
	})
};

export const getMutations = (state, EXERCISE_LIST, exerciseId) => {
	return getExercise(state, EXERCISE_LIST, exerciseId).mutations;
};

export const getExerciseSentence = (state, EXERCISE_LIST, exerciseId) => {
	return getExercise(state, EXERCISE_LIST, exerciseId).splittedSentence;
};

export const getCurrentExercise = (state, EXERCISE_LIST) => {
	return getExercise(state, EXERCISE_LIST, state.currentExerciseId);
};

export const getCurrentMutations = (state, EXERCISE_LIST) => {
	return getMutations(state, EXERCISE_LIST, state.currentExerciseId);
};

export const getCurrentSentence = (state, EXERCISE_LIST) => {
	return getExerciseSentence(state, EXERCISE_LIST, state.currentExerciseId);
};

export const hasGivenAllSolutions = (state, EXERCISE_LIST) => {
	return getCurrentMutations(state, EXERCISE_LIST).length === state.proposals.length;
};

export const getMutationIndexes = (state, EXERCISE_LIST, exerciseId) => {
	return getMutations(state, EXERCISE_LIST, exerciseId).map((mutation) => mutation.mutationIndex);
};

/**
 * Return the array of answers given by the player, in the right order
 * @param state
 * @param exerciseList
 * @param exerciseId
 * @returns {Array}
*/
export const getSolutionsGiven = (state, exerciseList, exerciseId) => {
	let solutionsGivenList = state.proposals;
	let mutations = getMutations(state, exerciseList, exerciseId);
	//Sort the solutions in the order of the mutations
	return solutionsGivenList.filter((proposal) => {
			return proposal.exerciseId === exerciseId;
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

export const getPossibilities = (state, exerciseList, exerciseId, mutationIndex) => {
	let mutation = getMutations(state, exerciseList, exerciseId).find((mutation) => {
		return mutation.mutationIndex === mutationIndex;
	});
	return mutation ? mutation.possibilities : [];
};

export const isCurrentMutation = (state, mutationIndex, exerciseId) => {
	return state.currentMutationIndex === mutationIndex && state.currentExerciseId === exerciseId;
};
