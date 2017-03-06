import React from "react";

const SolutionClickableLetter = ({onClick, solutionLetter, mutationIndex}) => {

	const onLetterClicked = (e) => {
		e.stopPropagation();
		e.preventDefault();
		onClick(mutationIndex);
	};

	return <span className="solution-letter clicable" onClick={(e) => {onLetterClicked(e)}}>{solutionLetter}</span>

};

export  default SolutionClickableLetter;
