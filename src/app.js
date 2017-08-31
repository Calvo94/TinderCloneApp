import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import CardList from './components/CardList';

const App = () => (
		<Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
			<View style={{ flex: 1 }}>
				<Header headerText="Tinder App" />
				<CardList />
			</View>
		</Provider>
	);

export default App;
