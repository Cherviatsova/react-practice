import { LogInForm } from 'components/LogInForm';
import { Toaster } from 'react-hot-toast';

export const LoginPage = () => {
  return (
    <>
      <LogInForm />
      <div>
        <Toaster />
      </div>
    </>
  );
};
