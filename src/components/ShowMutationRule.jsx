import React from "react";

const ShowMutationRule = ({onClick, exerciseId, mutationIndex}) => {

	const showMutationRule = (e) => {
		e.preventDefault();
		e.stopPropagation();
		onClick(exerciseId, mutationIndex);
	};

	return <span onClick={(e) => {showMutationRule(e)}}>+</span>

};

export default ShowMutationRule;
