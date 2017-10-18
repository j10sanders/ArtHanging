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
  
  // static getDefaultProps(){
  //   console.log(this.props); //note this logs undefined
  //   return {height : 1};
  // }

  hangingPoint(){ 
  	//let hP = parseInt(this.props.nums.height)/ ? parseInt(this.props.nums.number1)-1 : 0
    let height = parseInt(this.props.nums.height)
    let width = parseInt(this.props.nums.width)
    let D_Top = parseInt(this.props.nums.D_Top)
    let center = parseInt(this.props.nums.center)
    //console.log((this.props.nums.height/2- this.props.nums.D_Top) + this.props.nums.center)
  	let hP = (height/2) - D_Top + center
    if (typeof(hP) != 'undefined'){
      console.log("HP,", hP)
      return hP
    } else {
      hP = "waiting for inputs"
      return hP
  }
}

  holes(){
    let height = parseInt(this.props.nums.height)
    let width = parseInt(this.props.nums.width)
    let D_Top = parseInt(this.props.nums.D_Top)
    let center = parseInt(this.props.nums.center)
    let dRings = parseInt(this.props.nums.dRings)
    let distance = (width - dRings)/2
    let holes = [(distance), (width - distance)]
    return holes
  }

        
  render() {
  	return (
      <View>
      	<Text> The Hanging point is:
      	{this.hangingPoint() ? this.hangingPoint() : " waiting for inputs..."}
      	</Text>
        <Text> Hole 1:
        {this.holes()[0] ? this.holes()[0] : " waiting for inputs..."}
        </Text>
        <Text> Hole 2:
        {this.holes()[1] ? this.holes()[1] : " waiting for inputs..."}
        </Text>
      </View>

    )
	}
}