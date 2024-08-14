import {StyleSheet} from 'react-native';

export default StyleSheet.create({

    container: {
        flex: 1,
        padding: 16,
        backgroundColor: 'mintcream',
      },
      title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        color:'black',
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
      },
      productPrice: {
        fontSize: 16,
        color: 'green',
        marginTop: 4,
      },

});