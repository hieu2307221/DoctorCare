import React, { Component } from "react";
import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";
import Swiper from "react-native-swiper";
import styles from "./styles";
import Languages from "../../common/Languages";
export default class Main extends Component {
  render() {
    const {
      thongtin,
      wrapper,
      slide1,
      text,
      labeldangnhap,
      button,
      textbutton,
      labeldangky,
      textlabeldangky,
      labeldieukhoan,
      textlabeldieukhoan
    } = styles;
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require("../../../Imgs/Background/main.png")}
          style={styles.backgroundImage}
        >
          <View style={{ flex: 1 }}>
            <View style={{ flex: 1 / 5 }}>
              <Image
                style={{ alignSelf: "center", marginTop: 20 }}
                source={require("../../../Imgs/logo/logo.png")}
              />
              <Text
                style={{
                  fontSize: 30,
                  alignSelf: "center",
                  color: "#FFF",
                  fontWeight: "bold"
                }}
              >
                {Languages.tendungdung}
              </Text>

              <Text
                style={{ fontSize: 20, alignSelf: "center", color: "#dfe6e9" }}
              >
                {Languages.gioithieuungdung}
              </Text>
            </View>
            <View style={thongtin}>
              <Swiper style={wrapper} showsButtons={false}>
                <View style={slide1}>
                  <Text style={text}>{Languages.noidung1}</Text>
                </View>
                <View style={slide1}>
                  <Text style={text}>{Languages.noidung1}</Text>
                </View>
                <View style={slide1}>
                  <Text style={text}>{Languages.noidung3}</Text>
                </View>
              </Swiper>
            </View>
            <View style={labeldangnhap}>
              <View style={[button, { backgroundColor: "#1AD7E7" }]}>
                <Text style={textbutton}>{Languages.lg}</Text>
              </View>

              <View style={[button, { backgroundColor: "#3864A6" }]}>
                <Text style={textbutton}>{Languages.f}</Text>
              </View>
              <View style={labeldangky}>
                <Text style={textlabeldangky}>{Languages.ndk}</Text>
                <Text style={textlabeldangky}>{Languages.dk}</Text>
              </View>
              <View style={labeldieukhoan}>
                <Text style={textlabeldieukhoan}>{Languages.chinhsach}</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
