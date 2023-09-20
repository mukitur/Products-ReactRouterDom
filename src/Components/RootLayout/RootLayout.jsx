import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';

const RootLayout = () => {
  const navigation = useNavigation();
  return (
    <div>
      <NavBar />
      {navigation.state === 'loading' ? (
        <span className="loading loading-spinner text-error mt-4 mx-5"></span>
      ) : (
        <Outlet />
      )}
      <Footer />
    </div>
  );
};

export default RootLayout;
