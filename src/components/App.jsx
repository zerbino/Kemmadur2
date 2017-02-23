/**
 * Created by rmartignoni on 08/02/2017.
 */
import React from "react";
import SentenceDisplayerList from "../components/SentenceDisplayerList";
import CheckSolutionContainer from "../containers/CheckSolutionContainer";
import EXERCISE_LIST from '../data';

const App = () => {
	return (
		<div>
			<div className="consigne">Trouvez les bonnes mutations</div>
			<SentenceDisplayerList exerciseList={EXERCISE_LIST}/>
		</div>
	)
};

export default App;
