import React, { useEffect, useState } from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';
import axios from 'axios';
import styles from './style';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../Redux/Selector';
import { API_URL_REGISTER } from '../../../config';

const base64UrlDecode = (base64Url) => { // Base64 URL decode fonksiyonu
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let binaryString = atob(base64);
    let bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    let decoded = new TextDecoder().decode(bytes);
    try {
        return JSON.parse(decoded);
    } catch (e) {
        console.error('Base64 çözümleme hatası:', e);
        return null;
    }
};

// JWT token çözümleme fonksiyonu
const decodeJwtToken = (token) => {
    if (typeof token !== 'string') {
        throw new Error('Geçersiz token türü');
    }
    const parts = token.split('.');
    if (parts.length !== 3) {
        throw new Error('Geçersiz token');
    }
    return base64UrlDecode(parts[1]);
};

const Profil = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [userDetails, setUserDetails] = useState(null);
  const user = useSelector(selectUser);

  useEffect(() => {
      const fetchUserDetails = async () => {
          const token = user.token || '';
          if (token) {
              try {
                  console.log('User token:', token);
                  const decodedToken = decodeJwtToken(token);
                  const userId = decodedToken.sub;
                  console.log('User ID:', userId);

                  const response = await axios.get(`${API_URL_REGISTER}/${userId}`);
                  setUserDetails(response.data);

              } catch (error) {
                  console.error('Kullanıcı bilgileri alınamadı:', error);
              } finally {
                  setLoading(false);
              }
          } else {
              setLoading(false);
          }
      };

      fetchUserDetails();
  }, [user]);

  if (loading) {
      return (
          <View style={styles.container}>
              <ActivityIndicator size="large" color="#0000ff" />
          </View>
      );
  }

  if (!userDetails) {
      return (
          <View style={styles.container}>
              <Text style={styles.title}>Kullanıcı bilgileri bulunamadı</Text>
          </View>
      );
  }

  return (
      <View style={styles.container}>
          <View style={styles.backButton}>
              <Button title="GERİ" onPress={() => navigation.goBack()} color={'#333333'} />
          </View>
          <Text style={styles.title}>Profilim 🪪</Text>
          <Text style={styles.label}>Ad: {userDetails.name?.firstname || 'Bilgi yok'}</Text>
          <Text style={styles.label}>Soyad: {userDetails.name?.lastname || 'Bilgi yok'}</Text>
          <Text style={styles.label}>Kullanıcı Adı: {userDetails.username || 'Bilgi yok'}</Text>
          <Text style={styles.label}>Email: {userDetails.email || 'Bilgi yok'}</Text>
          <Text style={styles.label}>Telefon: {userDetails.phone || 'Bilgi yok'}</Text>
      </View>
  );
};

export default Profil;
