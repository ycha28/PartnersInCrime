'use strict';

var React = require('react-native');
var {
  View,
  Text,
  TouchableHighlight,
  TextInput
} = React;

var MenuView = require('../menu');

var styles = require('./style');

var Home = React.createClass({
  renderMenu() {
    this.props.navigator.push({
      title: "Partners in Crime - Menu",
      component: MenuView
    });
  },

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.inputField} placeholder="Username"/>
        <TextInput style={styles.inputField} placeholder="Password"/>

        <TouchableHighlight onPress={this.renderMenu} style={styles.loginButton}>
          <Text style={styles.buttonText}>
            Login
          </Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.renderMenu} style={styles.signupButton}>
          <Text style={styles.buttonText}>
            Sign Up
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
});

module.exports = Home;