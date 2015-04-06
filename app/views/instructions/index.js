'use strict';

var React = require('react-native');
var {
  View,
  Text
} = React;

var styles = require('./style');

var Instructions = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>How to Play</Text>

        <Text style={styles.paragraph}>You are a member of a worldwide crime ring.</Text>
        <Text style={styles.paragraph}>Move up in the social underground by completing missions with another partner in crime.</Text>
        <Text style={styles.paragraph}>The two of you must together decode the keywords to complete missions.</Text>
        <Text style={styles.paragraph}>Use the Crime Tech to escape the clutches of law enforcement.</Text>
      </View>
    );
  }
})

module.exports = Instructions;