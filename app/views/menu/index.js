'use strict';

var React = require('react-native');
var {
  View,
  Text,
  TouchableHighlight
} = React;

var InstructionsView = require('../instructions');
var ProfileView = require('../profile');
var CrimeTechView = require('../crime_tech');
var SearchingView = require('../play/searching');

var styles = require('./style');

var Menu = React.createClass({
  renderPlay() {
    this.props.navigator.push({
      component: SearchingView
    });
  },

  renderInstructions() {
    this.props.navigator.push({
      title: "Partners in Crime - How to Play",
      component: InstructionsView
    });
  },

  renderProfile() {
    this.props.navigator.push({
      title: "Partners in Crime - Profile",
      component: ProfileView
    });
  },

  renderCrimeTech() {
    this.props.navigator.push({
      title: "Partners in Crime - Crime Tech Vault",
      component: CrimeTechView
    });
  },

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.renderPlay} style={styles.button}>
          <Text style={styles.buttonText}>
            Play
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.renderProfile} style={styles.button}>
          <Text style={styles.buttonText}>
            Profile
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.renderCrimeTech} style={styles.button}>
          <Text style={styles.buttonText}>
            Crime Tech
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this._onPressButton} style={styles.button}>
          <Text style={styles.buttonText}>
            Settings
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.renderInstructions} style={styles.button}>
          <Text style={styles.buttonText}>
            How to Play
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
});

module.exports = Menu;