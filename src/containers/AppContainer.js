/**
 * Created by rmartignoni on 04/03/2017.
 */
import { connect } from "react-redux";
import App from "../components/App";

const mapStateToProps = (state) => {
	return {
		solutionDisplayed: state.showAnswers
	}
};

const AppContainer = connect(mapStateToProps)(App);

export default AppContainer;
