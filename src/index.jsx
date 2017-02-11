import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import kemmadurApp from "./reducers";
import App from './components/App';

let store = createStore(kemmadurApp);

render(
	<Provider store={store}>
		<App/>
	</Provider>,
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
