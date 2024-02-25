import { useNavigate } from "react-router-dom";
import { IEyeGlass } from "../types/globalTypes";

interface IProps {
  EyeGlass: IEyeGlass;
}
const Card = ({ EyeGlass }: IProps) => {
  const navigate = useNavigate(); // Move this line outside the function

  const handleNavigation = (EyeGlass: IEyeGlass) => {
    const id = EyeGlass.id;
    console.log(id);
    navigate(`/eyeglass/${id}`);
  };
  return (
    <div>
      <div className="rounded-2xl h-[580px]  flex flex-col items-start justify-between p-5 overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all gap-2">
        <img src={EyeGlass?.image} className="w-full" alt="book" />
        <h1 className="text-xl font-semibold"> {EyeGlass?.name}</h1>

        <p className="text-xl">Price: {EyeGlass?.price} Tk</p>
        <p className="text-xl">Quantity: {EyeGlass?.quantity}</p>
        <p className="text-xl">Frame Material: {EyeGlass?.frameMaterial}</p>
        <button
          className="bg-amber-300 p-4 rounded-xl text-slate-600 font-bold"
          onClick={() => handleNavigation(EyeGlass)}
        >
          EyeGLass Details
        </button>
      </div>
    </div>
  );
};

export default Card;
