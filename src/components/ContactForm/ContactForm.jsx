import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { ErrMessage, StyledForm, FormGroup, FormButton } from './ContactForm.styled';

const contactSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Too short!').required('This field is required!'),
    number: Yup.number()
    .positive()
    .required('This field is required!'),
  });

const ContactForm = ({onAddContact}) => {

  return (
    <>
      <Formik 
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={contactSchema}
        onSubmit={(values, actions) => {
            onAddContact(values);
            actions.resetForm();
          }}
      >
        <StyledForm>
          <FormGroup>
            <label htmlFor="name" style={{display: 'block'}}>Name</label>
            <Field className='input' name="name" id="name" />
            <ErrMessage name="name" component="div" />
          </FormGroup>
          <FormGroup>
            <label htmlFor="number" style={{display: 'block'}}>Number</label>
            <Field className='input' name="number" id="number" />
            <ErrMessage name="number" component="div" />
          </FormGroup>
          <FormButton type="submit">Add contact</FormButton>
        </StyledForm>
      </Formik>
    </>
  )
}

export default ContactForm