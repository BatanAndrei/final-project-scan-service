export const selectStatus = (state) => state.authExtraReducer.status;
export const selectAccessToken = (state) => state.authExtraReducer.accessToken;
export const selectIsActivated = (state) => state.authExtraReducer.isActivated;
export const selectLoginError = (state) => state.authExtraReducer.loginError;
export const selectPasswordError = (state) => state.authExtraReducer.passwordError;
export const selectLoginField = (state) => state.authExtraReducer.loginField;
export const selectPasswordField = (state) => state.authExtraReducer.passwordField;
export const selectValidForm = (state) => state.authExtraReducer.validForm;
export const selectLoginData = (state) => state.authExtraReducer.loginUser;
export const selectRequestError = (state) => state.authExtraReducer.error;

export const selectAccountInfo = (state) => state.accountInfoExtraReducer.accountInfo;