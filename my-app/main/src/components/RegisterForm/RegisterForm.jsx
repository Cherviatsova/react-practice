import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { NavLink } from 'react-router-dom';
import { unwrapResult } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import {
  Wrapper,
  Form,
  Text,
  Label,
  Input,
  SubmitBtn,
  Flexbox,
  ErrorMessage,
} from './RegisterForm.styled';

const NAME_PATTERN = `^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$`;
const PASSWORD_PATTERN = '^(?=.*[0-9])(?=.*[A-Z]).{7,32}$';

const schema = yup
  .object({
    name: yup
      .string()
      .required('❌ The field cannot be empty!')
      .matches(
        NAME_PATTERN,
        '❌ Name may contain only alphanumerics, at least 3 characters. The dot (.), underscore (_), or hyphen (-) must not be the first or last character'
      )
      .min(2),
    email: yup
      .string()
      .email('❌Email must be a valid email')
      .required('❌ The field cannot be empty!'),
    password: yup
      .string()
      .required('❌ The field cannot be empty!')
      .matches(
        PASSWORD_PATTERN,
        '❌ The password must be at least 7 characters long with one digital and one uppercase'
      ),
  })
  .required();

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onTouched',
  });

  const onSubmit = data => {
    dispatch(authOperations.register(data))
      .then(unwrapResult)
      .catch(() => {
        toast.error('Registration failed. Try with another email !');
      });
    reset();
  };

  const NameInput = () => {
    return (
      <>
        <Label>
          Name
          <Input type="text" placeholder="Name" {...register('name')} />
        </Label>
        <ErrorMessage>{errors.name?.message}</ErrorMessage>
      </>
    );
  };

  const EmailInput = () => {
    return (
      <>
        <Label>
          Email
          <Input
            type="email"
            name="email"
            placeholder="Email"
            {...register('email')}
          />
        </Label>
        <ErrorMessage>{errors.email?.message}</ErrorMessage>
      </>
    );
  };

  const PasswordInput = () => {
    return (
      <>
        <Label>
          Password
          <Input
            type="password"
            name="password"
            placeholder="Enter password"
            {...register('password')}
          />
        </Label>
        <ErrorMessage>{errors.password?.message}</ErrorMessage>
      </>
    );
  };

  return (
    <Wrapper>
      <Text>Don't have an account? Register one!</Text>
      <Form name="register-form" onSubmit={handleSubmit(onSubmit)}>
        <NameInput />
        <EmailInput />
        <PasswordInput />
        <SubmitBtn type="submit">Register</SubmitBtn>
      </Form>
      <Flexbox>
        Already have an account?
        <NavLink to="/login">Sign In</NavLink>
      </Flexbox>
    </Wrapper>
  );
};
