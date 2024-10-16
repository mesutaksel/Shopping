
export const selectIsLoggedIn = (state) => !!state.user;

export const selectLoading = (state) => state.loading;

export const selectError = (state) => state.error;

export const selectUser = (state) => state.user;

export const selectProducts = (state) => state.products;

export const selectCartItems = (state) => state.cartItems;