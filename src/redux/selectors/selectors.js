export const selectAccessToken = (state) => state.authExtraReducer.accessToken;
export const selectIsActivated = (state) => state.authExtraReducer.isActivated;
export const selectLoginError = (state) => state.authExtraReducer.loginError;
export const selectPasswordError = (state) => state.authExtraReducer.passwordError;
export const selectLoginField = (state) => state.authExtraReducer.loginField;
export const selectPasswordField = (state) => state.authExtraReducer.passwordField;
export const selectValidForm = (state) => state.authExtraReducer.validForm;
export const selectLoginData = (state) => state.authExtraReducer.loginUser;
export const selectRequestError = (state) => state.authExtraReducer.error;
export const selectIsActivatedBurgerMenu = (state) => state.authExtraReducer.isActivatedBurgerMenu;

export const selectAccountInfo = (state) => state.accountInfoExtraReducer.accountInfo;
export const selectStatusAccountInfo = (state) => state.accountInfoExtraReducer.status;
export const selectTariffBeginner = (state) => state.accountInfoExtraReducer.tariffBeginner;
export const selectTariffPro = (state) => state.accountInfoExtraReducer.tariffPro;
export const selectTariffBusiness = (state) => state.accountInfoExtraReducer.tariffBusiness;

export const selectStatusHistograms = (state) => state.histogramsExtraReducers.status
export const selectIsActivatedResultPage = (state) => state.histogramsExtraReducers.isActivatedResulPage;
export const selectInnField = (state) => state.histogramsExtraReducers.paramsPostHistograms.innField;
export const selectInnError = (state) => state.histogramsExtraReducers.innError;
export const selectDeliveryDocField = (state) => state.histogramsExtraReducers.paramsPostHistograms.deliveryDocField;
export const selectDeliveryDocError = (state) => state.histogramsExtraReducers.deliveryDocError;
export const selectDateBegin = (state) => state.histogramsExtraReducers.paramsPostHistograms.dateBegin;
export const selectDateEnd = (state) => state.histogramsExtraReducers.paramsPostHistograms.dateEnd;
export const selectDateError = (state) => state.histogramsExtraReducers.dateError;
export const selectValidFormSearch = (state) => state.histogramsExtraReducers.validFormSearch;
export const selectCheckedBox0= (state) => state.histogramsExtraReducers.paramsPostHistograms.checkedBox0;
export const selectCheckedBox1= (state) => state.histogramsExtraReducers.paramsPostHistograms.checkedBox1;
export const selectCheckedBox2= (state) => state.histogramsExtraReducers.paramsPostHistograms.checkedBox2;
export const selectCheckedBox3= (state) => state.histogramsExtraReducers.paramsPostHistograms.checkedBox3;
export const selectCheckedBox4= (state) => state.histogramsExtraReducers.paramsPostHistograms.checkedBox4;
export const selectCheckedBox5= (state) => state.histogramsExtraReducers.paramsPostHistograms.checkedBox5;
export const selectCheckedBox6= (state) => state.histogramsExtraReducers.paramsPostHistograms.checkedBox6;
export const selectDataHistograms = (state) => state.histogramsExtraReducers.dataHistograms;
export const selectParamsPostHistograms = (state) => state.histogramsExtraReducers.paramsPostHistograms;

export const selectDataObjectsearch = (state) => state.objectsearchExtraReducers.dataObjectsearch;

export const selectStatusDocuments = (state) => state.documentsExtraReducers.status;
export const selectDataDocuments = (state) => state.documentsExtraReducers.dataDocuments;
export const selectParamsDocuments = (state) => state.documentsExtraReducers.paramsPostDocuments;
export const selectListEncodedID = (state) => state.documentsExtraReducers.paramsPostDocuments.listEncodedId;
export const selectMakeDocumentsParts = (state) => state.documentsExtraReducers.makeDocumentsParts;



