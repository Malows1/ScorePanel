import {StyleSheet} from 'react-native';
import { back } from 'react-native/Libraries/Animated/Easing';

const styles = StyleSheet.create({
  title: {
    color: '#fff',
     
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    top: -310,
  },
  BG: {
    backgroundColor: '#f0f0f0',
    height: '100%',
  },
  spade: {
    width: '100%',
    height: '100%',
    opacity: 0.1,
  },
  container: {
    height: 460,
    width: 400,
    backgroundColor: '#808088',
    borderRadius: 10,
    borderWidth: 10,
    borderColor: '#6e6e6e',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
    left: 14,
    top: 100,
  },
  player: {
    color: '#fff', // White
    fontSize: 18,
    top: 20,
    left: 20,
    fontWeight: 'bold',
  },
  round: {
    fontSize: 18,
    color: '#fff',
    top: 20,
   left: 20,
    fontWeight: 'bold',
  },
  scorebox: {
    borderRadius: 10,
    top: -20,
    left: -20,
  },
  score: {
    textAlign: 'right',
    color: '#fff',
    fontSize: 30,
  },
  button:{
     width: 150,
     height: 50,
     borderRadius: 10,
     left: 90,
     backgroundColor: "#fff",
     top: -240
  },
  buttonText:{
    fontSize: 20,
    textAlign: "center",
    top: 13 ,
    color: "#000"
  },
  Pcontainer: {
    width: 360,
    height: 90,
    top: -420,
    left: 9,
    marginBottom: 10,
    borderRadius: 10, // Border radius for rounded corners
    shadowColor: '#000', // Shadow color
    shadowOffset: {
     
    },
    shadowOpacity: 0.25, // Opacity of the shadow
    shadowRadius: 3.84, // Radius of the shadow
    elevation: 4, // Android only - elevation for shadow effect
  },
  //MOdalUi next page
  modalPlayerName:{
    color: "#fff",
    fontSize: 20,
    top:-105,
    left: 10,
  },
  modalRound:{
    color: "#fff",
    top:-100,
    left: 10,
    fontSize: 20
  },
  modalScore:{
    color: "#fff",
    fontSize: 40,
    top:-120,
    textAlign:"center"
  },
  modalStyles:{
    width:"100%",
    top:-300
  },
  modalTitle:{
    color: "#fff",
    textAlign:"center",
    fontSize: 20,
    top:-70
  },
  otherplayer:{
    color:"#fff",
    fontSize: 15,
    textAlign:"center",
    marginBottom: 10,
    top:-60
  },
  Modalbutton:{
    width: 150,
    height: 50,
    borderRadius: 10,
    left: 120,
    backgroundColor: "#fff",
    top: -350

  },
  ModalbuttonText:{
    fontSize: 20,
    textAlign: "center",
    top: 13 ,
    color: "#000"
  },
});

export default styles;
