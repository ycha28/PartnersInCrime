'use strict';

var React = require('react-native');
var {
  View,
  Text,
  Image,
  TextInput
} = React;

var styles = require('./style');
var SuccessView = require('../success');

var Game = React.createClass({
  componentWillMount() {
    this.setState({correctAnswer: "Donkey"})
    this.setState({lives: 3})
  },

  setGuess(text) {
    if (text === this.state.correctAnswer) {
      this.renderSuccess();
    } else {
      // this.removeLife();
    }
  },

  renderSuccess() {
    this.props.navigator.push({
      component: SuccessView
    });
  },

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.lives}>
          <Image source={require('image!mugshot')} style={styles.lifeImage}/>
          <Image source={require('image!mugshot')} style={styles.lifeImage}/>
          <Image source={require('image!mugshot')} style={styles.lifeImage}/>
        </View>
        <View style={styles.main}>
          <View style={styles.mainImageContainer}>
            <Text style={styles.headline}>
              Describe the image
            </Text>
            <Image source={require('image!kitten')} style={styles.mainImage}/>
          </View>
          <View style={styles.crimeTechContainer}>
            <Image source={require('image!kitten')} style={styles.crimeTechImage}/>
          </View>
        </View>
        <TextInput
          style={styles.guess}
          onChangeText={this.setGuess}/>
      </View>
    );
  }
})

module.exports = Game;