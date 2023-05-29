import * as Yup from 'yup';

export const validationSchema = Yup.object({
  email: Yup.string().required('All fields are required'),
  currentPassword: Yup.string().min(6).max(30).required('All fields are required'),
  updatePassword: Yup.string().min(6).max(30).required('All fields are required')
});
