import * as Yup from 'yup';

const BasicFormSchema = Yup.object().shape({
    email: Yup.string().required().email('Invalid email address'),
    name: Yup.string().required(),
    theme: Yup.string().required(),
    message: Yup.string(),
});
export default BasicFormSchema;
