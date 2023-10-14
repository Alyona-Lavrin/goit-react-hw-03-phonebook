import styled from 'styled-components';
import { Form, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  width: 400px;
  border: 3px solid #000;
  padding: 20px;
  box-sizing: border-box;
`;

export const ErrMessage = styled(ErrorMessage)`
  font-size: 14px;
`;

export const FormGroup = styled.div`
  font-size: 32px;
  margin-bottom: 20px;
`;

export const FormButton = styled.button`
  width: 100px;
  height: 30px;
  background: white;
  border-radius: 6px;
`;