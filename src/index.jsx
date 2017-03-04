import React from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import kemmadurApp from "./reducers";
import AppContainer from './containers/AppContainer';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

let store = createStore(kemmadurApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
	<MuiThemeProvider>
		<Provider store={store}>
			<AppContainer/>
		</Provider>
	</MuiThemeProvider>,
	document.querySelector("#app")
);

//
//if (module && module.hot) {
//	module.hot.accept('./app.jsx', () => {
//		const App = require('./app.jsx').default;
//		render(
//			<AppContainer>
//				<Provider store={store}>
//					<App/>
//				</Provider>
//			</AppContainer>,
//			document.querySelector("#app")
//		);
//	});
//}
