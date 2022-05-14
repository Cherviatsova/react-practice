import { RegisterForm } from 'components/RegisterForm';
import { Toaster } from 'react-hot-toast';

export const RegisterPage = () => {
  return (
    <>
      <div>
        <Toaster />
      </div>
      <RegisterForm />
    </>
  );
};
