'use strict';

var React = require('react-native');
var {
  View,
  Text,
  Image,
  TouchableHighlight
} = React;

var styles = require('./style');

var PoliceJammer = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headline}>Police Jammer</Text>
        <Image source={require('image!kitten')} style={styles.image}/>
        <Text style={styles.paragraph}>
          Disables police radios and buys you an extra 5 seconds during a mission.
        </Text>
        <Text style={styles.paragraph}>
          Price: $$$
        </Text>
        <Text style={styles.paragraph}>
          How to use: tap the jammer icon during a mission.
        </Text>
        <TouchableHighlight onPress={this._onPressButton} style={styles.button}>
          <Text style={styles.buttonText}>BUY (150 BP)</Text>
        </TouchableHighlight>
      </View>
    );
  }
})

module.exports = PoliceJammer;