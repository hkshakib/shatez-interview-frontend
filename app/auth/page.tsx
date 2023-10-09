import Login from "../components/Login";

const index = () => {
  return (
    <div className="flex border border-black h-[100%] justify-center item-center p-20">
      <div className="flex flex-col items-center border h-[500px] w-[500px] border-black p-10 bg-[#1F2937] rounded-lg">
        <span className="text-[27px] font-bold text-white">Welcome Back</span>
        <Login />
      </div>
    </div>
  );
};

export default index;
