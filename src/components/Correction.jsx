import React from "react";

const Correction = ({show, rightAnswers, splittedCorrectedSentence, mutationIndexes}) => {
	let template = '';
	if (!show) {
		template = '';
	}
	else {
		if (rightAnswers) {
			template = <span className="check-solution">✓</span>;
		}
		else {
			let correction = splittedCorrectedSentence.map((chunk, index) => {
				let solutionLetterClass = (mutationIndexes.indexOf(index) !== -1) ? "solution-letter" : "";
				return <span key={index} className={solutionLetterClass}>{chunk}</span>
			});
			template = (
				<div>
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
