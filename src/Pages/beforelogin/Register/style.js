import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  AppTitle: {
    color: 'black',
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'normal',
    fontStyle: 'italic',
    marginBottom: 20, // Başlık ile diğer elemanlar arasında boşluk bırakmak için
    marginTop:0,
  },
  header:{
    paddingTop: 10, 
    paddingBottom: 20, 
  },
  scrollViewContent: {
    flexGrow: 1, // İçeriğin kaydırılabilir olmasını sağlar
    justifyContent: 'center', // İçeriğin ortalanmasını sağlar
    
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'mintcream',
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8, // Daha iyi hizalama için padding
    fontSize: 15,
    color: 'darkslategrey',
  },
  errorText: {
    color: 'red',
    marginBottom: 12,
  },
  backButton: {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: 2,
    borderRadius: 30,
    width: 63,
    height: 70,
  },
});
