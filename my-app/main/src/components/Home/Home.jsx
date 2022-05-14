import { Flexbox, Text, Button } from './Home.styled';

export const Home = () => {
  return (
    <>
      <Text>
        Phonebook is an application that will help you to add or remove a
        contact and to quickly find the desired one. <br /> Make a managing of
        your phone book comfortable and easy ! Try it now !
      </Text>
      <Flexbox>
        <li>
          <Button to={'/register'}>Register</Button>
        </li>
        <li>
          <Button to={'/login'}>Sign In</Button>
        </li>
      </Flexbox>
    </>
  );
};
