import React, {useEffect} from 'react';
import {View,Text,Button,FlatList,ActivityIndicator,Image,  Alert,TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProductsRequest, logoutRequest,addToCard} from '../../../Redux/Actions';
import {selectProducts,selectError,selectLoading,} from '../../../Redux/Selector';
import styles from './style';

const HomePage = ({navigation}) => {
  const dispatch = useDispatch();

  // Redux state'inden verileri almak
  const products = useSelector(selectProducts);
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);

  // Ürünleri API'den çekmek için useEffect
  useEffect(() => {
    dispatch(fetchProductsRequest());
  }, []);

  // Hata durumunda kullanıcıya alert göster
  useEffect(() => {
    if (error) {
      Alert.alert('Ürün Çekme Hatası', 'Ürünleri çekerken bir hata oluştu.');
    }
  }, [error]);

  // Çıkış yapma işlevi
  

  // Sepete Ekle işlevi
  const handleAddToCard = productId => {
    dispatch(addToCard(productId));
  };

  const handleGoToCard = () => {
    navigation.navigate('Card');
  };

  const handleGoToProfil = () => {
    navigation.navigate('Profile');
  };

  
  const handleGoToProductDetail = product => {
    navigation.navigate('ProductDetail', { product });
  };
  
  
  // Ürünleri listeleme
  const renderItem = ({item}) => (
    <TouchableOpacity onPress={() => handleGoToProductDetail(item)}>
    <View style={styles.productItem}>
      <Image source={{uri: item.image}} style={styles.productImage} />
      <View style={styles.productDetails}>
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productPrice}>{item.price} $</Text>
        <TouchableOpacity
        style={[styles.cardButton, item.inCard && styles.cardButtonDisabled]}
        onPress={() => handleAddToCard(item.id)}
        disabled={item.inCard}
      >
        <Text style={styles.cardButtonText}>
          {item.inCard ? 'Sepete Eklendi' : 'Sepete Ekle'}
        </Text>
      </TouchableOpacity>
      </View>
    </View>
    </TouchableOpacity>
  );

  
  // Sayfanın yüklenme durumu
  if (loading) return <ActivityIndicator size="large" color="#0000ff" />;

  return (
    <View style={styles.container}>
      
      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.sepetimButton} onPress={handleGoToCard} >
        <Text style={styles.sepetimButtonText}>Sepetim 🧺 </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.profilButton} onPress={handleGoToProfil}>
        <Text style={styles.profilButtonText}>profilim 🪪</Text>  
      </TouchableOpacity>
      </View>
      
      <Text style={styles.title}>SHOPPING </Text>

      {products.length > 0 ? ( // Eğer en az 1 ürün bile varsa render eder hiç ürün bulunamazsa 'ürün bulunamadı' yazar
        <FlatList
          data={products}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.productList}
        />
      ) : (
        <Text>Ürün bulunamadı</Text>
      )}
      

    </View>
  );
};

export default HomePage;
