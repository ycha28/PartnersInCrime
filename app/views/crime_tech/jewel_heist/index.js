'use strict';

var React = require('react-native');
var {
  View,
  Text,
  Image,
  TouchableHighlight
} = React;

var styles = require('./style');

var JewelHeist = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headline}>Jewel Heist</Text>
        <Image source={require('image!kitten')} style={styles.image}/>
        <Text style={styles.paragraph}>
          Mission briefing: steal the crowned jewels of England!
        </Text>
        <Text style={styles.unorderedList}>
          Reward:
        </Text>
        <Text style={styles.unorderedList}>
          +100 Badass points
        </Text>
        <Text style={styles.unorderedList}>
          Time extension
        </Text>
        <Text style={styles.unorderedList}>
          Unlocks Art Thief Mission
        </Text>
        <TouchableHighlight onPress={this._onPressButton} style={styles.button}>
          <Text style={styles.buttonText}>ACCEPT MISSION</Text>
        </TouchableHighlight>
      </View>
    );
  }
})

module.exports = JewelHeist;