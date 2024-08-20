import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'mintcream',
  },

  title: {
    fontSize: 64,
    fontWeight: 'bold',
    marginBottom: 150,
    top: 78,
    color: 'black',
    textAlign: 'center',
  },

  backButton: {
    position: 'absolute',
    top: 7,
    left: 3,
    padding: 2,
    borderRadius: 30,
    width: 83,
  },
  label:{
    margin:25,
    fontWeight:'bold',
    color:'black',
    fontSize:20,
    marginBottom:0,
  },
  logoutButton: {
    marginLeft:80,
    marginTop: 100,
    width: 230,
    alignItems: 'center',
    paddingVertical: 15, // Yüksekliği artırır
    backgroundColor: '#333333', // Butonun arka plan rengi
    borderRadius: 30, // Köşeleri yuvarlatır
  },
  
  logoutButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
