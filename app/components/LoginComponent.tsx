interface LoginComponentProps {
  handleGoogleLogin: () => void;
  loading: boolean;
}

const LoginComponent = ({
  handleGoogleLogin,
  loading,
}: LoginComponentProps) => {
  return (
    <button
      className="flex justify-center items-center border"
      onClick={handleGoogleLogin}
      disabled={loading}
    >
      Sign In using Google
    </button>
  );
};

export default LoginComponent;
