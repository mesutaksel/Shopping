import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  AppTitle: {
    position: 'absolute', // Pozisyonu sabitler
    color: 'black',
    textAlign: 'center',
    alignItems:'center',
    left:0,
    right:0,
    top:30,
    fontSize:43,
    fontWeight:'bold',
    fontStyle:'italic',
    color:'darkslategrey',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor:'mintcream',
  },
  input: {
    height: 45,
    borderColor: 'gray',
    borderBottomWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    fontSize:20,
    color:'darkslategrey'
  },
  errorText: {
    color: 'red',
    marginBottom: 18,
    fontSize:15,
  },
});
