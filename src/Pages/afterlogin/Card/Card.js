import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCard } from '../../../Redux/Actions';
import { selectProducts } from '../../../Redux/Selector';
import styles from '../Card/styles'

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
          color={'#4682B4'}
        />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.backButton}>
        <Button title="GERİ" onPress={() => navigation.goBack()} color={'#333333'}  />
      </View>
      <Text style={styles.title}>Sepetim</Text>
      {cardItems.length > 0 ? (
        <FlatList
          data={cardItems}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.productList}
        />
      ) : (
        <Text style={styles.Info}>Sepetinizde ürün bulunmamaktadır</Text>
      )}
    </View>
  );
};


export default Card;
