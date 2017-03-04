/**
 * Created by rmartignoni on 17/02/2017.
 */
import React from "react";
import ShowMutationRuleContainer from "../containers/ShowMutationRuleContainer";

const PossibilitiesDisplayer = ({possibilities, onPossibilityClicked, isCurrent}) => {

	const currentClass = isCurrent ? "mutation-possibilities-current" : "mutation-possibilities-hidden";

	const onClick = (e, possibilityIndex) => {
		e.preventDefault();
		e.stopPropagation();
		onPossibilityClicked(possibilityIndex);
	};

	return (
		<div className="possibility-container">
			<div className={currentClass + " mutation-possibilities"}>
				{
					possibilities.map((possibility, possibilityIndex) => {
						return <span key={possibilityIndex} onClick={(e) => {onClick(e, possibilityIndex)}}>{possibility}</span>
					})
				}
				<ShowMutationRuleContainer/>
			</div>
		</div>
	)

};

export default PossibilitiesDisplayer;
