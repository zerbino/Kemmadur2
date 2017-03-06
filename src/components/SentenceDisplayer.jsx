import React from 'react';
import { findProposalForMutation } from "../library/stateManipulations";
import QuestionClickableLetterContainer from "../containers/QuestionClickableLetterContainer";
import EXERCISE_LIST from "../data/exerciseList";

const SentenceDisplayer = ({mutationIndexes, splittedSentence, proposals, exerciseId, onMutationClicked, onClickDisplayRule}) => {
	return (
		<div className="sentenceDisplayerContainer">{
			splittedSentence.map((chunk, index) => {
				// If the chunk is a mutation...
				if (mutationIndexes.indexOf(index) !== -1) {
					let mutationIndex = index;
					let proposal = findProposalForMutation(mutationIndex, proposals);
					let isProposal = typeof proposal !== "undefined";
					let letter = isProposal ? proposal.text : chunk;
					return (
						<QuestionClickableLetterContainer exerciseList={EXERCISE_LIST}
																			onClick={onMutationClicked}
																			key={index}
																			mutationIndex={mutationIndex}
																			letter={letter}
																			exerciseId={exerciseId}
																			isProposal={isProposal}
																			mutationIndex={mutationIndex}
																			onClickDisplayRule={onClickDisplayRule}
						>
						</QuestionClickableLetterContainer>
					)
				}
				// If it's not a mutation, simply display the chunk
				else {
					return <span key={index}>{chunk}</span>
				}
			})
		}</div>
	)
};

export default SentenceDisplayer;
