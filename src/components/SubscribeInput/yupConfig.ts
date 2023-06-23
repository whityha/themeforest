import * as Yup from 'yup';

const BasicFormSchema = Yup.object().shape({
    email: Yup.string()
        // Проверяем, корректный ли адрес.
        // Если нет, то выводится сообщение в скобках
        .email('Invalid email address'),
});
export default BasicFormSchema;
