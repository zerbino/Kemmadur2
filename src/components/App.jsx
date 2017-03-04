/**
 * Created by rmartignoni on 08/02/2017.
 */
import React from "react";
import SentenceDisplayerList from "../components/SentenceDisplayerList";
import CheckSolutionContainer from "../containers/CheckSolutionContainer";
import {EXERCISE_LIST} from '../data';
import {MUTATION_RULES} from '../data';
import MutationRuleDialogContainer from "../containers/MutationRuleDialogContainer";

const App = ({solutionDisplayed}) => {

	let blinkOnDisplayingSolutionClass = (solutionDisplayed) ? "solution-displayed" : "";
	return (
		<div className={blinkOnDisplayingSolutionClass}>
			<div className="instruction-title">Trouvez les bonnes mutations</div>
			<SentenceDisplayerList exerciseList={EXERCISE_LIST}/>
			<CheckSolutionContainer/>
			<MutationRuleDialogContainer exerciseList={EXERCISE_LIST} mutationRules={MUTATION_RULES}/>
		</div>
	)
};

export default App;
