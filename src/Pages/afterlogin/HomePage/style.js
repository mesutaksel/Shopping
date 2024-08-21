import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'mintcream',
  },
  title: {
    fontSize: 37,
    fontWeight: 'bold',
    textAlign: 'left',
    color: 'black',
    marginBottom: 20,
  },
  productList: {
    paddingBottom: 16, // en alttan boşluk bırakır
  },
  productItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginVertical: 8,
    backgroundColor: '#E0E0E0',
    borderRadius: 8,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 16,
  },
  productDetails: {
    flex: 1,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  productPrice: {
    fontSize: 16,
    color: 'green',
    marginTop: 4,
    fontWeight: 'bold',
    padding:8,
  },
  cardButton: {
    backgroundColor: '#4682B4', 
    padding: 8,
    borderRadius: 5,
    alignItems: 'center',
  },
  cardButtonDisabled: {
    backgroundColor: 'gray', // Sepete eklendiğinde butonun rengi gri olur
  },
  cardButtonText: {
    color: 'white', // Butonun üzerindeki yazı beyaz olacak
    fontWeight: 'bold',
    fontSize:16,
  },
  sepetimButtonText:{
    fontSize:23,
    color:'black',
    textAlign: 'right',
    fontWeight:'bold',
  },
  sepetimButton:{},
  buttonContainer:{
    alignItems: 'flex-end', // bu eklenmediği takdirde sepetim kısmı hizasının her yerinden basılıyor
  },
  profilButtonText:{
    fontSize:23,
    color:'black',
    textAlign: 'right',
    fontWeight:'bold',
  },
  profilButton:{
    right:8
  }
  

});
