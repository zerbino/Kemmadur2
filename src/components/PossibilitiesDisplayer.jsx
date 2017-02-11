import React from 'react';

const PossibilitiesDisplayer = ({possibilities, onPossibilityClick, disabled}) => {
	return (
		<div className="possibility-container">
			{
				possibilities.map((possibility, index) => {
					return (
						<button
							className="possibility-button"
							key={index}
							disabled={disabled}
							onClick={(e) => {
								e.preventDefault();
								// pass the index of the possibility to the parent
								onPossibilityClick(index);
							}}
						>
							{possibility}
						</button>
					)
				})
			}
		</div>
	)
};

export default PossibilitiesDisplayer;
