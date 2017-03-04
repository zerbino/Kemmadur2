/**
 * Created by rmartignoni on 17/02/2017.
 */
import React from "react";
import ShowMutationRuleContainer from "../containers/ShowMutationRuleContainer";

const PossibilitiesDisplayer = ({possibilities, onPossibilityClicked, isCurrent}) => {

	// These classes are for animation
	const currentClass = isCurrent ? "mutation-possibilities-current" : "mutation-possibilities-hidden";

	const onClick = (e, possibilityIndex) => {
		e.preventDefault();
		e.stopPropagation();
		onPossibilityClicked(possibilityIndex);
	};

	// Define what's displayed when the letter is just an empty string
	const displayedLetter = (letter) => {
		return letter === '' ? '\u2205' : letter;
	};

	return (
		<div className="possibility-container">
			<div className={currentClass + " mutation-possibilities"}>
				{
					possibilities.map((possibility, possibilityIndex) => {
						return <span key={possibilityIndex} onClick={(e) => {onClick(e, possibilityIndex)}}>{displayedLetter(possibility)}</span>
					})
				}
				<ShowMutationRuleContainer/>
			</div>
		</div>
	)

};

export default PossibilitiesDisplayer;
