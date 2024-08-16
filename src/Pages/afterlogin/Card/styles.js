import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 17, 
    backgroundColor: 'mintcream',
  },
  title: {
    fontSize: 58,
    fontWeight: 'bold',
    marginBottom: 36,
    top:38,
    color:'black',
    textAlign:'center',
  },
  productItem: {
    flexDirection: 'row',
    marginBottom: 10, 
    marginTop: 7,    
    top:35,
  },
  productImage: {
    width: 100,
    height: 100,
    marginRight: 16,
  },
  productDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  productTitle: {
    color:'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
    color: 'green',
    fontWeight:'bold',
    padding:8,
  },
  productList: {
    paddingBottom: 30,
  },
  backButton:{
    position:'absolute',
    top:7,
    left:3,
    padding:2,
    borderRadius: 30,
    width:83,
  },
  Info:{
    top:70,
    color:'black',
    fontWeight:'bold',
    fontSize:19,
  },
  removeCard: {
    backgroundColor: '#4682B4',
    padding: 8,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
