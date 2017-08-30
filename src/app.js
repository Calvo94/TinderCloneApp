import React, { Component } from 'react';
import {
	View,
	StyleSheet,
	Text,
	Image,
	PanResponder,
	Animated
 } from 'react-native';

const fbImage = 'https:\\graph.facebook.com/1405171576/picture?height=500';

class App extends Component {
	componentWillMount() {
		this.pan = new Animated.ValueXY();

		this.cardPanResponder = PanResponder.create({
			onStartShouldSetPanResponder: () => true,
			onPanResponderMove: Animated.event([
				null,
				{ dx: this.pan.x, dy: this.pan.y }
			]),
			onPanResponderRelease: (e, gesture) => console.log('Release', gesture.moveY)
		});
	}
	render() {
		const rotateCard = this.pan.x.interpolate({
			inputRange: [-200, 0, 200],
			outputRange: ['-10deg', '0deg', '10deg'],
		});

		const AnimatedStyle = {
			transform: [
				{ translateX: this.pan.x },
				{ translateY: this.pan.y },
				{ rotate: rotateCard },
			]
		};
		return (
		<Animated.View
			{...this.cardPanResponder.panHandlers}
			style={[styles.card, AnimatedStyle]}
		>
			<Image
			style={{ flex: 1 }}
			source={{ uri: fbImage }}
			/>
			<View style={{ margin: 20 }}>
				<Text style={{ fontSize: 20 }}>Said, 23</Text>
				<Text style={{ fontSize: 15, color: 'darkgrey' }}>Engineer</Text>
			</View>
		</Animated.View>
	);
	}
}

const styles = StyleSheet.create({
	card: {
		flex: 1,
		overflow: 'hidden',
		backgroundColor: 'white',
		margin: 10,
		marginTop: 100,
		marginBottom: 100,
		borderWidth: 1,
		borderColor: 'lightgrey',
		borderRadius: 8,
	},
});
export default App;
