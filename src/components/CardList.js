import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Card from './card';
import { fetchData } from '../actions';

class CardList extends Component {

	state = {
		profileIndex: 0,
	}

	componentWillMount() {
		this.props.fetchData();
	}

	nextCard = () => this.setState({ profileIndex: this.state.profileIndex + 1 });

	render() {
		const { profileIndex } = this.state;
		return (
			<View style={{ flex: 1 }}>
				{
					this.props.profiles.slice(profileIndex, profileIndex + 3).reverse().map((profile) => (
					<Card
						key={profile.id}
						profile={profile}
						onSwipeOff={this.nextCard}
					/>
				))}
			</View>
		);
	}
}

const mapStateToProps = state => {
	console.log(state);
  return { profiles: state.profiles.data, error: state.profiles.error };
};

const mapDispatchToProps = dispatch => {
	return {
		fetchData: () => dispatch(fetchData())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
