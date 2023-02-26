import * as Yup from 'yup';

export default Yup.object().shape({
  email: Yup.string()
    .email('Geçersiz eposta adresi')
    .required('Lütfen email adresini giriniz.'),
  password: Yup.string()
    .min(5, 'Daha uzun bir şifre giriniz.')
    .max(20, 'Çok uzun bir şifre girdiniz.')
    .required('Lütfen şifrenizi giriniz.'),
});