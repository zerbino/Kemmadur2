/**
 * Created by rmartignoni on 10/02/2017.
 */

export const getExercise = (exerciseList, exerciseId) => {
	return exerciseList.find((exercise) => {
		return exercise.id === exerciseId;
	});
};

export const getMutations = (exerciseList, exerciseId) => {
	return getExercise(exerciseList, exerciseId).mutations;
};

export const getMutation = (exerciseList, exerciseId, mutationIndex) => {
	return getMutations(exerciseList, exerciseId).find((mutation) => mutation.mutationIndex === mutationIndex);
};

export const getCurrentMutation = (state, exerciseList) => {
	let currentExerciseId = state.currentExerciseId;
	let currentMutationIndex = state.currentMutationIndex;
	if (currentMutationIndex === -1) {
		let error = new Error('No mutation currently selected');
		error.name = "NoMutationSelected";
		throw error;
	}
	return getMutation(exerciseList, currentExerciseId, currentMutationIndex);
};

export const getExerciseSentence = (exerciseList, exerciseId) => {
	return getExercise(exerciseList, exerciseId).splittedSentence;
};

export const getMutationIndexes = (exerciseList, exerciseId) => {
	return getMutations(exerciseList, exerciseId).map((mutation) => mutation.mutationIndex);
};

/**
 * Return the array of answers given by the player, in the right order for a given exercise
 * @param state
 * @param exerciseList
 * @param exerciseId
 * @returns {Array}
*/
export const getSolutionsGiven = (state, exerciseList, exerciseId) => {
	let solutionsGivenList = state.proposals;
	let mutations = getMutations(exerciseList, exerciseId);
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

/**
 * Get the list of right solutions for
 * @param exerciseList
 * @param exerciseId
 * @returns {*}
 */
export const getSolutionsForExercise = (exerciseList, exerciseId) => {
	return getMutations(exerciseList, exerciseId).map((mutation) => {
		return mutation.possibilities[mutation.solutionIndex];
	})
};

export const findProposalForMutation = (mutationIndex, proposals) => {
	return proposals.find((proposal) => proposal.mutationIndex === mutationIndex);
};

export const findExerciseProposals = (proposals, exerciseId) => {
	return proposals.filter((proposal) => proposal.exerciseId === exerciseId);
};

export const getPossibilities = (exerciseList, exerciseId, mutationIndex) => {
	let mutation = getMutations(exerciseList, exerciseId).find((mutation) => {
		return mutation.mutationIndex === mutationIndex;
	});
	return mutation ? mutation.possibilities : [];
};

export const isCurrentMutation = (state, mutationIndex, exerciseId) => {
	return state.currentMutationIndex === mutationIndex && state.currentExerciseId === exerciseId;
};

export const rightPossibilityIndex = (exerciseList, exerciseId, proposalMutationIndex) => {
	return getMutation(exerciseList, exerciseId, proposalMutationIndex).solutionIndex;
};

export const isRightAnswer = (proposal, exerciseList, exerciseId) => {
	let proposalMutationIndex = proposal.mutationIndex;
	let possibilityIndex = proposal.possibilityIndex;
	let _rightPossibilityIndex = rightPossibilityIndex(exerciseList, exerciseId, proposalMutationIndex);
	return possibilityIndex === _rightPossibilityIndex;
};

export const areAnswersRight = (proposals, exerciseList, exerciseId) => {
	let exerciseProposals = findExerciseProposals(proposals, exerciseId);
	let numberMutationInExercise = getMutations(exerciseList, exerciseId);
	let answeredAllQuestions = exerciseProposals.length === numberMutationInExercise.length;
	let answersAreRight = exerciseProposals.reduce((previousProposalsCorrectness, proposal) => {
		let currentRightAnswer = isRightAnswer(proposal, exerciseList, exerciseId);
		return previousProposalsCorrectness && currentRightAnswer;
	}, true);
	return answeredAllQuestions && answersAreRight;
};

export const getSolutions = (exerciseList, exerciseId) => {
	let mutations = getMutations(exerciseList, exerciseId);
	return mutations.map((mutation) => {
		return {mutationIndex: mutation.mutationIndex, solutionLetter: mutation.possibilities[mutation.solutionIndex]};
	});
};

export const getCorrectedSentence = (exerciseList, exerciseId) => {
	let splittedSentence = getExerciseSentence(exerciseList, exerciseId).slice();
	let solutionLetters = getSolutions(exerciseList, exerciseId);
	solutionLetters.map((solution) => {
		splittedSentence.splice(solution.mutationIndex, 1, solution.solutionLetter);
	});
	return splittedSentence;
};

export const getMutationRuleAndCaseIdFor = (mutation, rules) => {
	let mutationLink = mutation.mutationLink;
	return {
		mutationRule: rules.find((rule) => rule.mutationRuleId === mutationLink.mutationId),
		caseId: mutationLink.caseId
	};
};

export const getCurrentMutationRuleAndCaseId = (showedMutationRule, exerciseList, rules) => {
	if (!showedMutationRule) {
		return false;
	}
	else {
		let ruleMutationIndex = showedMutationRule.currentRuleMutationIndex;
		let ruleExerciseId = showedMutationRule.currentRuleExerciseId;
		let currentMutation = getMutation(exerciseList, ruleExerciseId, ruleMutationIndex);
		return getMutationRuleAndCaseIdFor(currentMutation, rules);
	}
};
