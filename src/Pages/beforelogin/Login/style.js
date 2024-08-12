import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  AppTitle: {
    position: 'absolute', // Pozisyonu sabitler
    color: 'black',
    textAlign: 'center',
    alignItems:'center',
    left:0,
    right:0,
    top:40,
    fontSize:50,
    fontWeight:'bold',
    fontStyle:'italic',
    color:'black',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor:'mintcream',
  },
  input: {
    height: 45,
    borderBottomWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 4,
    fontSize:20,
    color:'darkslategrey'
  },
  errorText: {
    color: 'red',
    marginBottom: 18,
    fontSize:15,
  },
});
