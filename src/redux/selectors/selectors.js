export const selectStatus = (state) => state.authExtraReducer.status;
export const selectToken = (state) => state.authExtraReducer.token;

export const selectLogin = (state) => state.loginReducer.login;
export const selectTelDirty = (state) => state.authExtraReducer.telDirty;
export const selectPasswordDirty = (state) => state.authExtraReducer.passDirty;
export const selectTelError = (state) => state.authExtraReducer.telError;
export const selectPassError = (state) => state.authExtraReducer.passError;
export const selectTel = (state) => state.authExtraReducer.tel;
export const selectPassword = (state) => state.authExtraReducer.password;
export const selectValidForm = (state) => state.authExtraReducer.validForm;
