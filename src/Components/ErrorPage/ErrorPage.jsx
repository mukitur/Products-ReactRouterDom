import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate('/');
  };
  return (
    <div className="text-center">
      <h2 className="font-2xl text-center my-10">
        Opps!!! The link is not found
      </h2>
      <button
        onClick={handleGoBack}
        className="bg-blue-500 px-3 py-2 rounded-lg text-white"
      >
        Home{' '}
      </button>
    </div>
  );
};

export default ErrorPage;
