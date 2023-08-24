import * as Yup from "yup";

export const contactSchema = Yup.object().shape({
    user_name: Yup.string().required('Name is required'),
    user_email: Yup.string().email('Invalid email').required('Email is required'),
    user_subject: Yup.string().required('Subject is required'),
    user_message: Yup.string().required('Message is required'),
  });
