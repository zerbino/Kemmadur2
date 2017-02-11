/**
 * Created by rmartignoni on 08/02/2017.
 */

const proposals = (state = [], action, wholeState) => {
	switch (action.type) {
		case "MAKE_PROPOSAL":
			let proposalInListIndex = state.findIndex((mutation) => mutation.mutationIndex === action.mutationIndex);
			let proposal = {mutationIndex: action.mutationIndex, possibilityIndex: action.possibilityIndex};
			let copiedState = state.slice();
			if (proposalInListIndex !== -1) {
				return copiedState.splice(proposalInListIndex, 1, proposal);
			}
			else {
				return [...copiedState, proposal];
			}
		default :
			return state;
	}
};

export default proposals;
