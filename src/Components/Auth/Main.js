import React, {Component} from 'react';
import {View, Text, ImageBackground, StyleSheet, Image} from 'react-native';
import { Button } from 'react-native-elements';
import Swiper from 'react-native-swiper';

import FontAwesome, { Icons } from 'react-native-fontawesome';

export default class Main extends Component {
 
  render() {
    return (
      <View style={{flex:1}}>
      <ImageBackground source={require('../../../Imgs/Background/main.png')} 
        style={styles.backgroundImage} >
        <View style={{flex:1}}>
<View style={{flex:1/5}}>
<Image
style={{alignSelf:'center', marginTop:20}}
          source={require('../../../Imgs/logo/logo.png')}
        />
                <Text style={{fontSize:30,  alignSelf:'center', color:'#FFF', fontWeight:'bold'}}>DOCTOR CARE</Text>

        <Text style={{fontSize:20,  alignSelf:'center', color:'#dfe6e9'}}>BÁC SĨ CỦA GIA ĐÌNH</Text>
</View>
        <View style={styles.thongtin}>
       
        <Swiper style={styles.wrapper} showsButtons={false}>
        <View style={styles.slide1}>
          <Text style={styles.text}>Nhan phan hoi nhanh tu cac bac si</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Tim kiem bac si tu cac benh vien uy tin</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>Nhan loi khuyen tu cac bac si</Text>
        </View>
      </Swiper>

</View>
             <View style={styles.thanhvien}>
<View>
  
</View>
                <View style={{backgroundColor:'#1AD7E7', marginLeft:10, height:50, marginRight:10, marginBottom:20}}>
                
                <Text style={{alignSelf:'center', marginTop:15, fontWeight:'bold', color:'white', fontSize:20}}> LOGIN</Text>

                </View>
 


                <View style={{backgroundColor:'#3864A6', marginLeft:10, height:50, marginRight:10}}>
      



                <Text style={{alignSelf:'center', marginTop:15, fontWeight:'bold', color:'white', fontSize:20}}>DANG NHAP FACEBOOK</Text>

                </View>
 
             </View>
        </View>
       
        </ImageBackground>
    </View>
    );
  }
}
const styles = StyleSheet.create({
  backgroundImage: {
      flex: 1,
      width: undefined,
      height: undefined,
      flexDirection: 'column',
      backgroundColor:'transparent',
      justifyContent: 'flex-start',
  },
  thongtin:{
    flex: 1/2,
    justifyContent: 'center',
    //backgroundColor: '#EE5407',
    alignItems: 'center'
  },
  thanhvien:{
    //flex:1/10,
    width:'100%',
    height: 200,
  backgroundColor: '#EE5407',
  alignSelf: 'center',
  justifyContent: 'center',
  //alignItems: 'center',
  position: 'absolute', //Here is the trick
  bottom: 0, //Here is the trick,

  },
  slide1: {
    flex: 1,
    alignSelf: 'center',
    position: 'absolute', 
    bottom: 0, 
  },
  slide2: {
    flex: 1,
    alignSelf: 'center',
    position: 'absolute', 
    bottom: 100, 
     },
  slide3: {
    flex: 1,
    alignSelf: 'center',
    position: 'absolute', 
    bottom: 50, 
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center'
  },
 

});

