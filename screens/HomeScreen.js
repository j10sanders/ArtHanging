import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import { WebBrowser } from 'expo';
import { styles } from './Styles';
import { MonoText } from '../components/StyledText';
import { StackNavigator } from 'react-navigation';
import TextField from 'react-native-md-textinput';
import Calculations from '../components/calculations'


export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: "",
                  height: "",
                  center: "",
                  dRings: "", 
                  D_Top: "",};
  }

  //need to be able to set state.

  // <TextField
  //       highlightColor={'#00BCD4'} 
  //       label={'Input1 on Home Screen'}
  //       onChangeText={(text) => this.setState({text})}
  //       dense={true}
  //       value={this.state.text}
  //     />

  render() {
    return (
      <View style={styles.container}>
        <ScrollView 
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/robot-dev.png')
                  : require('../assets/images/robot-prod.png')
              }
              style={styles.welcomeImage}
            />
          </View>
    <View>
      <TextField
        highlightColor={'#00BCD4'}
        label={'Height of work'}
        onChangeText={(text) => this.setState({height: text})}
        dense={true}
        value={this.state.height}
      />
      <TextField
        highlightColor={'#00BCD4'}
        label={'Width of work'}
        onChangeText={(text) => this.setState({width: text})}
        dense={true}
        value={this.state.width}
      />
      <TextField
        highlightColor={'#00BCD4'}
        label={'Center (at eye level)'}
        onChangeText={(text) => this.setState({center: text})}
        dense={true}
        value={this.state.center}
      />

      <TextField
        highlightColor={'#00BCD4'}
        label={'Distance between D-rings'}
        onChangeText={(text) => this.setState({dRings: text})}
        dense={true}
        value={this.state.dRings}
      />
      <TextField
        highlightColor={'#00BCD4'}
        label={'Distance between D-ring and top of work'}
        onChangeText={(text) => this.setState({D_Top: text})}
        dense={true}
        value={this.state.D_Top}
      />

      <Calculations nums={this.state} />
      </View>
          <View style={styles.getStartedContainer}>
            {this._maybeRenderDevelopmentModeWarning()}


            <Text style={styles.getStartedText}>
              Hello World.
            </Text>
          </View>


          
        </ScrollView>

        <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>
            I'll probably get rid of this "tabBarInfoContainer"
          </Text>

          <View
            style={[styles.codeHighlightContainer, styles.navigationFilename]}>
            <MonoText style={styles.codeHighlightText}>
              navigation/MainTabNavigator.js
            </MonoText>
          </View>
        </View>
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use
          useful development tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/development-mode'
    );
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

