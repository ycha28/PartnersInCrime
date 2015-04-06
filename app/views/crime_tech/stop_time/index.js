'use strict';

var React = require('react-native');
var {
  View,
  Text,
  Image,
  TouchableHighlight
} = React;

var styles = require('./style');

var StopTime = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headline}>Stop Time</Text>
        <Image source={require('image!kitten')} style={styles.image}/>
        <Text style={styles.paragraph}>
          Stops the clock temporarily.
        </Text>
        <Text style={styles.paragraph}>
          Price: $$$
        </Text>
        <Text style={styles.paragraph}>
          How to use: tap the jammer icon during a mission.
        </Text>
        <TouchableHighlight onPress={this._onPressButton} style={styles.button}>
          <Text style={styles.buttonText}>LOCKED</Text>
        </TouchableHighlight>
        <Text style={styles.paragraph}>
          Successfully decode 10 times.
        </Text>
      </View>
    );
  }
})

module.exports = StopTime;