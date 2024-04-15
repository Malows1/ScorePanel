import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  title: {
    color: '#000',

    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    top: -310,
  },
  bg: {
    position: 'absolute', // Added position absolute to position background independently
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
    width: '100%',
    zIndex: 1, // Ensure background is behind other elements
  },
  box: {
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderRadius: 10,
    borderBottomColor: '#BFBEC0',
  },
  spade: {
    width: '100%',
    height: '100%',
    opacity: 0.1,
  },

  closeButtonText: {
    color: '#000',

    fontSize: 30,
    top: -454,
    left: '90%',
    fontWeight: 'bold',
  },
  container: {
    height: 460,
    width: 400,
    backgroundColor: '#eee8f4',
    borderRadius: 20,
    left: 14,
    top: 100,
  },
  player: {
    color: '#000', // White
    fontSize: 18,
    top: 20,
    left: 20,
    fontWeight: 'bold',
  },
  round: {
    fontSize: 18,
    color: '#000',
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
    color: '#000',
    fontSize: 30,
  },
  button: {
    width: 150,
    height: 50,
    borderRadius: 10,
    left: 90,
    backgroundColor: '#000',
    top: -240,
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    top: 13,
    color: '#000',
  },
  Pcontainer: {
    width: 360,
    height: 90,
    top: -450,
    left: 15,

    marginBottom: 5,
  },
  //MOdalUi next page
  modalPlayerName: {
    color: '#000',
    fontSize: 20,
    top: -10,
    left: 10,
  },
  modalRound: {
    color: '#000',
    top: -5,
    left: 10,
    fontSize: 20,
  },
  modalScore: {
    color: '#000',
    fontSize: 40,
    top: -170,
    textAlign: 'center',
  },
  modalStyles: {
    width: '100%',
    top: -300,
  },
  modalTitle: {
    color: '#000',
    textAlign: 'center',
    fontSize: 20,
    top: -70,
  },
  otherplayer: {
    color: '#000',
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 10,
    top: -50,
  },
  Modalbutton: {
    width: 150,
    height: 50,
    borderRadius: 10,
    left: 120,

    top: -350,
  },
  ModalbuttonText: {
    fontSize: 30,
    textAlign: 'center',
    top: 15,
    color: '#6750a4',
  },
});

export default styles;
