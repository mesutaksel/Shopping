import React, {useEffect} from 'react';
import {View,Text,Button,FlatList,ActivityIndicator,Image,  Alert,} from 'react-native';
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
  }, [dispatch]);

  // Hata durumunda kullanıcıya alert göster
  useEffect(() => {
    if (error) {
      Alert.alert('Ürün Çekme Hatası', 'Ürünleri çekerken bir hata oluştu.');
    }
  }, [error]);

  // Çıkış yapma işlevi
  const handleLogout = () => {
    dispatch(logoutRequest());
  };

  // Sepete Ekle işlevi
  const handleAddToCard = productId => {
    dispatch(addToCard(productId));
  };

  const handleGoToCard = () => {
    navigation.navigate('Card');
  };
  
  
  // Ürünleri listeleme
  const renderItem = ({item}) => (
    <View style={styles.productItem}>
      <Image source={{uri: item.image}} style={styles.productImage} />
      <View style={styles.productDetails}>
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productPrice}>{item.price} $</Text>
        <Button
          title={item.inCard ? 'Sepete Eklendi' : 'Sepete Ekle'}
          onPress={() => handleAddToCard(item.id)}
          disabled={item.inCard}
        />
      </View>
    </View>
  );

  
  // Sayfanın yüklenme durumu
  if (loading) return <ActivityIndicator size="large" color="#0000ff" />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SHOPPİNG </Text>

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
      <Button title="Çıkış Yap" onPress={handleLogout} color={'#333333'} />
      <Button title="Sepetim" onPress={handleGoToCard} color={'#333333'} />
    </View>
  );
};

export default HomePage;
