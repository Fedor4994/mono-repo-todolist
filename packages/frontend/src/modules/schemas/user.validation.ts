import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  email: yup.string().email().required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password at least 6 characters')
    .max(30, 'Password at most 30 characters')
    .required('Password is required')
});
