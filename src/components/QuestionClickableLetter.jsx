/**
 * Created by rmartignoni on 16/02/2017.
 */
import React from "react";
import PossibilitiesDisplayerContainer from "../containers/PossibilitiesDisplayerContainer";

/**
 * The component that represents a letter in a word that can be clicked to display possibilities.
 *
 * @param onClick: the method to call when the letter is clicked
 * @param letter: the letter to display
 * @param mutationIndex: the index of the corresponding mutation in the sentence
 * @param possibilities: the list of possibilities for this letter
 * @param isCurrent: true if this component is the current mutation letter
 * @param isProposal: true if this component currently displays a proposal, false if it's the letter of the not mutated word.
 * @param exerciseId: the id of the exercise containing the mutation
 */
const QuestionClickableLetter = ({onClick, letter, mutationIndex, possibilities, isCurrent, isProposal, exerciseId, onClickDisplayRule}) => {

	let letterStyle;
	if (isProposal) {
		letterStyle = {color: "blue"};
	}
	else {
		letterStyle = {color: "red"};
	}

	const onClickMethod = (e) => {
		e.preventDefault();
		e.stopPropagation();
		onClick(mutationIndex);
	};

	const onDisplayRuleClicked = () => {
		onClickDisplayRule(mutationIndex);
	};

	return (
		<div onClick={(e) => {onClickMethod(e)}} className="clicable-letter">
			<span style={letterStyle}>[{letter}]</span>
			<PossibilitiesDisplayerContainer isCurrent={isCurrent} possibilities={possibilities} mutationIndex={mutationIndex} exerciseId={exerciseId} onClickDisplayRule={onDisplayRuleClicked}/>
		</div>
	)
};

export default QuestionClickableLetter;
