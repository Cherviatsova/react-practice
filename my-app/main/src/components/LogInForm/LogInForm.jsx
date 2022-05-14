import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { NavLink } from 'react-router-dom';
import {
  Wrapper,
  Form,
  Text,
  Label,
  Input,
  SubmitBtn,
  Flexbox,
  ErrorMessage,
} from './LogInForm.styled';
import { unwrapResult } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const schema = yup
  .object({
    email: yup
      .string()
      .email('❌Email must be a valid email')
      .required('❌ The field cannot be empty!'),
    password: yup.string().required('❌ The field cannot be empty!'),
  })
  .required();

export const LogInForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onTouched',
  });

  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(authOperations.logIn(data))
      .then(unwrapResult)
      .catch(() => {
        toast.error('Try again with correct credentials !');
      });
    reset();
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
            required
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
            required
            {...register('password')}
          />
        </Label>
        <ErrorMessage>{errors.password?.message}</ErrorMessage>
      </>
    );
  };

  return (
    <Wrapper>
      <Text>
        Accessing this application requires a login, please enter your
        credentials below!
      </Text>
      <Form name="login-form" onSubmit={handleSubmit(onSubmit)}>
        <EmailInput />
        <PasswordInput />
        <SubmitBtn type="submit">Sign In</SubmitBtn>
      </Form>
      <Flexbox>
        No account?
        <NavLink to="/register">Create one!</NavLink>
      </Flexbox>
    </Wrapper>
  );
};
