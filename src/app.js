import React, { Component } from 'react';
import { View } from 'react-native';
import Card from './card';

class App extends Component {
	render() {
		return (
			<View style={{ flex: 1 }}>
			<Card />
			<Card />
			</View>
		);
	}
}

export default App;
