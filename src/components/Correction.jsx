import React from "react";
import SolutionClickableLetterContainer from "../containers/SolutionClickableLetterContainer";

const Correction = ({show, rightAnswers, splittedCorrectedSentence, mutationIndexes, onClickDisplayRule}) => {
	let template = '';
	if (!show) {
		template = '';
	}
	else {
		if (rightAnswers) {
			template = <span className="right-answer">✓</span>;
		}
		else {
			let correction = splittedCorrectedSentence.map((chunk, index) => {
				if (mutationIndexes.indexOf(index) !== -1) {
					return <SolutionClickableLetterContainer key={index} solutionLetter={chunk} onClickDisplayRule={() => {onClickDisplayRule(index)}}/>
				}
				else {
					return <span key={index}>{chunk}</span>
				}
			});
			template = (
				<div className="solution-band">
					<span className="wrong-answer">X </span>
					{correction}
				</div>
			)
		}
	}
	return (
		<div>
			{template}
		</div>
	)
};

export default Correction;
