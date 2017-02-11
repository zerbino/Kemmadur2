import React from "react";

const Result = ({actualSolutions, showSolution}) => {
	let realSolution;
	if (showSolution) {
		realSolution = actualSolutions.map((actualSolution, index) => <span key={index}>{actualSolution}</span>)
	}
	return (
		<div>
			<div>
				Solution:
				{realSolution}
			</div>
		</div>
	)
};

export default Result;
