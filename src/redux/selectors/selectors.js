export const selectStatus = (state) => state.authExtraReducer.status;
export const selectAccessToken = (state) => state.authExtraReducer.accessToken;

export const selectIsActivated = (state) => state.authExtraReducer.isActivated;
export const selectTelError = (state) => state.authExtraReducer.telError;
export const selectPassError = (state) => state.authExtraReducer.passError;
export const selectTel = (state) => state.authExtraReducer.tel;
export const selectPassword = (state) => state.authExtraReducer.password;
export const selectValidForm = (state) => state.authExtraReducer.validForm;
