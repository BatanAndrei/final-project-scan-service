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
export const selectStatusAccountInfo = (state) => state.accountInfoExtraReducer.status;
export const selectTariffBeginner = (state) => state.accountInfoExtraReducer.tariffBeginner;
export const selectTariffPro = (state) => state.accountInfoExtraReducer.tariffPro;
export const selectTariffBusiness = (state) => state.accountInfoExtraReducer.tariffBusiness;

export const selectInnField = (state) => state.histogramsExtraReducers.innField;
export const selectInnError = (state) => state.histogramsExtraReducers.innError;
export const selectDeliveryDocField = (state) => state.histogramsExtraReducers.deliveryDocField;
export const selectDeliveryDocError = (state) => state.histogramsExtraReducers.deliveryDocError;
export const selectDateBegin = (state) => state.histogramsExtraReducers.dateBegin;
export const selectDateEnd = (state) => state.histogramsExtraReducers.dateEnd;
export const selectDateError = (state) => state.histogramsExtraReducers.dateError;
export const selectValidFormSearch = (state) => state.histogramsExtraReducers.validFormSearch;


