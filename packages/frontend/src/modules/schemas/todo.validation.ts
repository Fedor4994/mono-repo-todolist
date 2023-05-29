import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  title: yup
    .string()
    .min(2, 'At least 2 characters')
    .max(30, 'At most 30 characters')
    .required('Title is required'),
  description: yup.string().max(500, 'At most 500 characters')
});
