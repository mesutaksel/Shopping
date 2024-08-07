// selectors.js

// Kullanıcının oturum açıp açmadığını kontrol eden selector
export const selectIsLoggedIn = (state) => !!state.user;

// Yükleniyor durumu kontrolü
export const selectLoading = (state) => state.loading;

// Hata bilgisini getiren selector
export const selectError = (state) => state.error;

// Kullanıcı bilgilerini getiren selector
export const selectUser = (state) => state.user;
