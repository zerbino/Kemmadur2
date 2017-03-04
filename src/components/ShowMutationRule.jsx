import React from "react";

const ShowMutationRule = ({OnClick}) => {

	const showMutationRule = (e) => {
		e.preventDefault();
		e.stopPropagation();
		OnClick();
	};

	return <span onClick={(e) => showMutationRule(e)}>+</span>
};

export default ShowMutationRule;
