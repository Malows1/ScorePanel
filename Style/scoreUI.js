import {StyleSheet} from 'react-native';

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
    height: 360,
    width: 350,
    backgroundColor: '#808088',
    borderRadius: 10,
    borderWidth: 10,
    borderColor: '#6e6e6e',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
    left: 40,
    top: 100,
  },
  player: {
    color: '#fff', // White
    fontSize: 18,
    top: -230,

    fontWeight: 'bold',
  },
  round: {
    fontSize: 18,
    color: '#fff',
    top: -210,
    fontWeight: 'bold',
  },
  scorebox: {
    borderRadius: 10,

    top: -360,
  },
  score: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 50,
  },
  button:{
     width: 150,
     height: 50,
     borderRadius: 10,
     left: 80,
     backgroundColor: "#fff",
     top: -240
  },
  buttonText:{
    fontSize: 20,
    textAlign: "center",
    top: 13 ,
    color: "#000"
  }
});

export default styles;
