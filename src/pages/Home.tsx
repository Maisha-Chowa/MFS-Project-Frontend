import { useNavigate } from "react-router-dom";
import { useGetEyeGlassQuery } from "../redux/features/eyeglass/eyeglassApi";
import { IEyeGlass } from "../types/globalTypes";
import Card from "../components/Card";

const Home = () => {
  const { data, isLoading, error } = useGetEyeGlassQuery(undefined);
  console.log(data);
  console.log(isLoading);
  console.log(error);
  const productsData = data?.data;
  console.log(productsData);
  const navigate = useNavigate();
  return (
    <>
      <div className="grid grid-cols-12 m-10 ">
        <div className="col-span-10 grid grid-cols-3 gap-10 pb-20">
          {productsData?.slice(0, 9)?.map((EyeGlass: IEyeGlass) => (
            <Card EyeGlass={EyeGlass} />
          ))}
        </div>
      </div>
      <div className="container py-10 px-10 mx-0 min-w-full flex flex-col items-center">
        <button
          className="bg-amber-300 p-4 rounded-xl text-slate-600 font-bold text-2xl font-se rounded-xl"
          onClick={() => navigate(`/eyeglass`)}
        >
          Show All EyeGlass
        </button>
      </div>
    </>
  );
};

export default Home;
