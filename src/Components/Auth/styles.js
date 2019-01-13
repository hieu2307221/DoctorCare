import { StyleSheet } from "react-native";

export default StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: undefined,
    height: undefined,
    flexDirection: "column",
    backgroundColor: "transparent",
    justifyContent: "flex-start"
  },
  thongtin: {
    flex: 1 / 2,
    justifyContent: "center",
    //backgroundColor: '#EE5407',
    alignItems: "center"
  },
  labeldangnhap: {
    //flex:1/10,
    width: "100%",
    height: 300,
    //ßbackgroundColor: '#EE5407',
    alignSelf: "center",
    justifyContent: "center",
    //alignItems: 'center',
    position: "absolute", //Here is the trick
    bottom: 0 //Here is the trick,
  },
  slide1: {
    flex: 1,
    alignSelf: "center",
    position: "absolute",
    bottom: 50
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center"
  },
  button: {
    marginLeft: 10,
    height: 50,
    marginRight: 10,
    marginBottom: 20
  },
  textbutton: {
    alignSelf:'center', marginTop:15, fontWeight:'bold', color:'white', fontSize:20
  },
  labeldangky:{
    flexDirection:'row', 
    justifyContent:'center'
  },
  textlabeldangky:{
    fontSize:15,textAlign:'center', marginTop:10, color:'black'
  },
  labeldieukhoan:{
    alignSelf: 'center',
  justifyContent: 'center',
  position: 'absolute', 
  bottom: 10,
  },
  textlabeldieukhoan:{
    fontSize:15
  }
});
