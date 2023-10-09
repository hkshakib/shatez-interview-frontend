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
      className="flex basis-[100%] justify-center items-center border font-bold outline-[1px] rounded-lg"
      onClick={handleGoogleLogin}
      disabled={loading}
    >
      Sign In using Google
    </button>
  );
};

export default LoginComponent;
