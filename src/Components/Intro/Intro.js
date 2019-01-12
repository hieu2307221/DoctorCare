import React from 'react';
import { StyleSheet } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Main from '../Auth/Main';
 
const styles = StyleSheet.create({
  image: {
    width: 220,
    height: 220,
  },
  titlelable:{
    color:'#fff',
    fontSize: 20,
    fontWeight: 'bold',
  }

});
 
const slides = [
  {
    key: 'somethun',
    title: 'TÌM KIẾM BÁC SĨ',
    titleStyle:styles.titlelable,
    text: 'TỪ CÁC BỆNH VIỆN UY TÍN',
    image: require('../../../Imgs/Intro/tinkiem.png'),
    imageStyle: styles.image,
    backgroundColor: '#55a3d6',
  },
  {
    key: 'somethun2',
    title: 'NHẬN LỜI KHUYÊN TỪ BÁC SĨ' ,
    titleStyle:styles.titlelable,
    text: 'TỪ CÁC BỆNH VIỆN UY TÍN',
    image: require('../../../Imgs/Intro/loikhuyen.png'),
    imageStyle: styles.image,
    backgroundColor: '#5187ce',
  },
  {
    key: 'somethun3',
    title: 'NHẬN PHẢN HỒI MỚI NHẤT',
    titleStyle:styles.titlelable,
    text: 'TỪ CÁC BÁC SĨ CÓ CHUYÊN MÔN CAO',
    image: require('../../../Imgs/Intro/tinkiem.png'),
    imageStyle: styles.image,
    backgroundColor: '#57bfd5',
  }
];
 
export default class Intro extends React.Component {
 constructor(props){
   super(props);
   this.state = {
    showRealApp: false
  }
 }
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  }
  render() {
    if (this.state.showRealApp) {
      return <Main />;
    } else {
      return <AppIntroSlider slides={slides} onDone={this._onDone}/>;
    }
  }
}