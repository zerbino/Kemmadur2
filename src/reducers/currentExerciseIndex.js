/**
 * Created by rmartignoni on 09/02/2017.
 */

const currentExerciseIndex = (state = 0, action) => {
	switch (action.type) {
		case "NEXT_EXERCISE":
			return state ++;
		default :
			return state;
	}
};

export default currentExerciseIndex;
