'use strict';

var React = require('react-native');
var {
  ScrollView,
  View,
  Text,
  Image,
  TouchableHighlight
} = React;

var styles = require('./style');

var StopTimeView = require('./stop_time');
var PoliceJammerView = require('./police_jammer');
var JewelHeistView = require('./jewel_heist');
var StealArtView = require('./steal_art');

var CrimeTech = React.createClass({
  renderPoliceJammer() {
    this.props.navigator.push({
      title: "Partners in Crime - Police Jammer",
      component: PoliceJammerView
    });    
  },

  renderStopTime() {
    this.props.navigator.push({
      title: "Partners in Crime - Stop Time",
      component: StopTimeView
    });    
  },

  renderJewelHeist() {
    this.props.navigator.push({
      title: "Partners in Crime - Jewel Heist",
      component: JewelHeistView
    });    
  },

  renderStealArt() {
    this.props.navigator.push({
      title: "Partners in Crime - Steal Art",
      component: StealArtView
    });    
  },

  render() {
    return (
      <ScrollView style={styles.container} scrollEventThrottle={200} contentInset={{top: -50}}>
        <Text style={styles.headline}>Crime Tech Vault</Text>
        <View style={styles.vaultOptions}>
          <TouchableHighlight onPress={this._onPressButton} style={styles.button}>
            <Text style={styles.buttonText}>Extra Life</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.renderPoliceJammer} style={styles.button}>
            <Text style={styles.buttonText}>Police Jammer</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.vaultOptions}>
          <TouchableHighlight onPress={this._onPressButton} style={styles.button}>
            <Text style={styles.buttonText}>Slippers</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this._onPressButton} style={styles.button}>
            <Text style={styles.buttonText}>Bananas</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.vaultOptions}>
          <TouchableHighlight onPress={this.renderStopTime} style={styles.button}>
            <Text style={styles.buttonText}>Stop Time</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this._onPressButton} style={styles.button}>
            <Text style={styles.buttonText}>Pass</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.vaultOptions}>
          <TouchableHighlight onPress={this.renderJewelHeist} style={styles.button}>
            <Text style={styles.buttonText}>Jewel Heist</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this._onPressButton} style={styles.button}>
            <Text style={styles.buttonText}>Bank Heist</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.vaultOptions}>
          <TouchableHighlight onPress={this.renderStopTime} style={styles.button}>
            <Text style={styles.buttonText}>Car Boosting</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this._onPressButton} style={styles.button}>
            <Text style={styles.buttonText}>Spring from Jail</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.vaultOptions}>
          <TouchableHighlight onPress={this.renderStealArt} style={styles.button}>
            <Text style={styles.buttonText}>Steal Art</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this._onPressButton} style={styles.button}>
            <Text style={styles.buttonText}>Break into Wine Cellar</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    );
  }
})

module.exports = CrimeTech;