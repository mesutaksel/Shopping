import React, { useEffect, useState } from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';
import axios from 'axios';
import jwt_decode from 'jwt-decode';  // jwt-decode kütüphanesini import edin
import styles from './style';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../Redux/Selector';
import { API_URL_REGISTER } from '../../../config';

const Profil = ({ navigation }) => {
    const [loading, setLoading] = useState(true);
    const [userDetails, setUserDetails] = useState(null);
    const user = useSelector(selectUser);

    useEffect(() => {
        const fetchUserDetails = async () => {
            const token = user.token || '';
            if (token) {
                try {
                    const decodedToken = jwt_decode(token);
                    const userId = decodedToken.sub;

                    if (userId) {
                        const response = await axios.get(`${API_URL_REGISTER}/${userId}`);
                        setUserDetails(response.data);
                    } else {
                        throw new Error('Geçersiz token: Kullanıcı ID bulunamadı');
                    }
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
    }, [user.token]); // sadece token değiştiğinde çalışmasını sağlar

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
            <Text style={styles.label}>Ad: {userDetails.name?.firstname }</Text>
            <Text style={styles.label}>Soyad: {userDetails.name?.lastname }</Text>
            <Text style={styles.label}>Kullanıcı Adı: {userDetails.username }</Text>
            <Text style={styles.label}>Email: {userDetails.email }</Text>
            <Text style={styles.label}>Telefon: {userDetails.phone }</Text>
        </View>
    );
};

export default Profil;
