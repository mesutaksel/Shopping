import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, Button,ScrollView,TouchableOpacity} from 'react-native';
import styles from './style'
import {addToCard} from '../../../Redux/Actions';
import { useDispatch } from 'react-redux';


const ProductDetail = ({route,navigation}) => {
  const {product} = route.params;
  const dispatch =useDispatch();
  const [inCard, setInCard] = useState(product.inCard || false);

  const handleAddToCard = productId => {
    dispatch(addToCard(productId));
    setInCard(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.backButton}>
        <Button
          title="GERİ"
          onPress={() => navigation.goBack()}
          color={'#333333'}
        />
      </View>
      <Image source={{uri: product.image}} style={styles.image} />
      <ScrollView style={styles.scrollContainer}>
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>Price: {product.price} $</Text>
      <TouchableOpacity
        style={[styles.cardButton, inCard && styles.cardButtonDisabled]}
        onPress={() => handleAddToCard(product.id)}
        disabled={inCard}        
      >
        <Text style={styles.cardButtonText}>
            {inCard ? 'Sepete Eklendi' : 'Sepete Ekle'}
          </Text>
      </TouchableOpacity>
      </ScrollView>
    </View>
  );
};


export default ProductDetail;
