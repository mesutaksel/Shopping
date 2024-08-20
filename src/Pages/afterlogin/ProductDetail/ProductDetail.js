import React from 'react';
import {View, Text, Image, StyleSheet, Button,ScrollView,} from 'react-native';
import styles from './style'

const ProductDetail = ({route,navigation}) => {
  const {product} = route.params;

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
      </ScrollView>
    </View>
  );
};


export default ProductDetail;
