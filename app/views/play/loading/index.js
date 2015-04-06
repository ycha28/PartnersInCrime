'use strict';

var React = require('react-native');
var {
  View,
  Text,
  Image
} = React;

var styles = require('./style');
var GameView = require('../game');

var Loading = React.createClass({
  renderGame() {
    this.props.navigator.push({
      component: GameView
    });
  },

  componentDidMount() {    
    setTimeout(this.renderGame, 3000);
  },

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('image!mugshot')} style={styles.image}/>
        <Text style={styles.smallText}>ppzgenome</Text>
        <Text style={styles.smallText}>Found fellow gangster!</Text>
        <Text style={styles.smallText}>Mission start in...</Text>
        <Text style={styles.largeText}>3, 2, 1...</Text>
      </View>
    );
  }
})

module.exports = Loading;