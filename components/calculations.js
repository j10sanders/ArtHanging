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



export default class Calculations extends React.Component {
  constructor(props) {
    super(props);
  }
  
  minus1(){
  	let a = parseInt(this.props.number1) ? parseInt(this.props.number1)-1 : 0
  	return a 
  }

  render() {
  	return (
    	<Text>
    	{this.minus1()}
    	</Text>
    )
	}
}