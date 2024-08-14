import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCard } from '../../../Redux/Actions';
import { selectProducts } from '../../../Redux/Selector';

const Card = ({navigation}) => {
  const dispatch = useDispatch();
  
  // Redux state'inden ürünleri almak
  const products = useSelector(selectProducts);

  // Sepetteki ürünleri filtrele
  const cardItems = products.filter(product => product.inCard);

  // Sepetten ürün çıkartma işlevi
  const handleRemoveFromCard = (productId) => {
    dispatch(removeFromCard(productId));
  };

  // Ürünleri listeleme
  const renderItem = ({ item }) => (
    <View style={styles.productItem}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.productDetails}>
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productPrice}>{item.price} $</Text>
        <Button 
          title="Sepetten Çıkar" 
          onPress={() => handleRemoveFromCard(item.id)} 
        />
        
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Button title="GERİ" onPress={() => navigation.goBack()} color={'#333333'}  />
      <Text style={styles.title}>Sepet</Text>
      {cardItems.length > 0 ? (
        <FlatList
          data={cardItems}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.productList}
        />
      ) : (
        <Text>Sepetiniz boş</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  productItem: {
    flexDirection: 'row',
    marginBottom: 16,
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
    fontSize: 18,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
    color: 'green',
  },
  productList: {
    paddingBottom: 16,
  },
});

export default Card;
