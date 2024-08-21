import { StyleSheet } from "react-native";

export default StyleSheet.create({


    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
      },
      image: {
        marginTop: 40,
        width: '100%',
        height: 300,
        resizeMode: 'contain',
      },
      title: {
        padding:10,
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 8,
        color:'black',
      },
      price: {
        padding:30,
        fontWeight:'bold',
        fontSize: 20,
        color: 'green',
        marginVertical: 8,
        textAlign:'right'
      },
      description: {
        fontSize: 17,
        color: '#666',
        fontWeight:'bold',
      },
      backButton: {
        position: 'absolute',
        top: 7,
        left: 3,
        padding: 2,
        borderRadius: 30,
        width: 83,
      },
      scrollContainer: {
        flex: 1,
        marginTop: 40,
      },
      cardButton: {
        backgroundColor: '#4682B4',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 20,
      },
      cardButtonDisabled: {
        backgroundColor: 'gray',
      },
      cardButtonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
      },

});