import { useNavigate, useParams } from "react-router-dom";
import {
  useDeleteEyeGlassMutation,
  useGetSingleEyeGlassQuery,
} from "../redux/features/eyeglass/eyeglassApi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EyeGlassDetails = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useGetSingleEyeGlassQuery(id);

  console.log(data);
  console.log(isLoading);
  console.log(error);
  const productsData = data?.data;
  console.log(productsData);

  const [deleteEyeGlass] = useDeleteEyeGlassMutation();
  const navigate = useNavigate();

  const handleupdate = () => {
    navigate(`/eyeglass/update/${id}`);
  };
  const handleDelete = () => {
    deleteEyeGlass(id);
    toast.success("Eye Glass Deleted!", {
      position: "top-center",
    });
    setTimeout(() => {
      navigate("/eyeglass");
    }, 3000);
  };

  const handleSale = () => {
    navigate(`/eyeglass/sale/${id}`);
  };

  return (
    <>
      <div className="flex max-w-7xl mx-auto items-center border-b border-gray-300">
        <div className="w-[40%] p-10">
          <img src={productsData?.image} className="w-full" alt="book" />
        </div>

        <div className="w-[50%] space-y-3">
          <div className="flex flex-row">
            <h1 className="text-3xl font-semibold"> {productsData?.name}</h1>
            <button
              onClick={handleSale}
              className="bg-amber-300 p-4 rounded-xl text-slate-600 font-bold m-4"
            >
              Sell
            </button>
          </div>

          <h1 className="text-xl font-semibold">
            Price: {productsData?.price}
          </h1>
          <p className="text-xl">
            <span className="font-semibold"> Quantity:</span>{" "}
            {productsData?.quantity}
          </p>
          <p className="text-xl">
            {" "}
            <span className="font-semibold"> Frame Material::</span>{" "}
            {productsData?.frameMaterial}
          </p>
          <p className="text-xl">
            {" "}
            <span className="font-semibold">Short Frame Shape: </span>
            {productsData?.frameShape}
          </p>
          <p className="text-xl">
            <span className="font-semibold"> Long Lens Type: </span>
            {productsData?.lensType}
          </p>
          <p className="text-xl">
            <span className="font-semibold"> Brand: </span>
            {productsData?.brand}
          </p>
          <p className="text-xl">
            <span className="font-semibold"> Gender: </span>
            {productsData?.gender}
          </p>
          <p className="text-xl">
            <span className="font-semibold"> Color: </span>
            {productsData?.color}
          </p>
          <div className="flex flex-row ">
            <button
              onClick={handleupdate}
              className="bg-amber-300 p-4 rounded-xl text-slate-600 font-bold mx-4 "
            >
              Update EyeGlass
            </button>
            <>
              <button
                onClick={handleDelete}
                className="bg-amber-300 p-4 rounded-xl text-slate-600 font-bold"
              >
                Delete EyeGlass
              </button>
              <ToastContainer />
            </>
          </div>
        </div>
      </div>
    </>
  );
};

export default EyeGlassDetails;
