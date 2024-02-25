import { FormEvent, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import {
  useGetSingleEyeGlassQuery,
  useUpdateEyeGlassMutation,
} from "../redux/features/eyeglass/eyeglassApi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { usePostSalesMutation } from "../redux/features/sales/salesApi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IEyeGlass } from "../types/globalTypes";

const SaleEyeGlass = () => {
  const { id } = useParams();

  const { data } = useGetSingleEyeGlassQuery(id);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [postSales] = usePostSalesMutation();
  const productsData = data?.data;
  console.log(productsData);
  const [updateEyeGlass] = useUpdateEyeGlassMutation();
  const quantityRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const NameOfTheBuyer = nameRef?.current?.value;
    const DateOfTheSale = startDate?.toDateString();
    const QuantityOfTheProduct = quantityRef?.current?.value;
    if (QuantityOfTheProduct! > productsData.quantity) {
      toast.error(
        "Erorr !!!!!! QuantityOfTheProduct is greater than inventory Quantity ",
        {
          position: "top-center",
        }
      );
    } else {
      const inputValue = {
        QuantityOfTheProduct,
        NameOfTheBuyer,
        DateOfTheSale,
      };

      console.log(
        "quantity",
        Number(productsData.quantity) - Number(inputValue.QuantityOfTheProduct)
      );
      const options = {
        data: inputValue,
      };
      //console.log(options.data);
      await postSales(options.data);

      const updateQuantity =
        Number(productsData.quantity) - Number(inputValue.QuantityOfTheProduct);
      const updatedInfo: Partial<IEyeGlass> = {
        id: productsData?._id,
        quantity: updateQuantity.toString(),
      };
      // console.log(updatedInfo);

      await updateEyeGlass(updatedInfo);
      (event.target as HTMLFormElement).reset();
    }
  };

  return (
    <>
      <div className="max-w-5xl mx-auto mt-5 my-24">
        <h2 className="text-3xl font-semibold p-5 text-center text-amber-300">
          Sale Eye Glass {productsData?.name}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-2">
            <div className="grid gap-1">
              <input
                className="input input-bordered"
                id="name"
                placeholder="Buyer Name"
                type="text"
                ref={nameRef}
              />

              <div className="border-solid border-2 border-amber-300 rounded">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>

              <input
                className="input input-bordered"
                id="quantity"
                defaultValue={productsData.quantity}
                type="text"
                ref={quantityRef}
              />
            </div>
            <button
              type="submit"
              className="rounded-full h-15 w-15 p-2 text-slate-600 font-bold bg-amber-300"
            >
              Sale Eye Glass
            </button>
            <ToastContainer />
          </div>
        </form>
      </div>
    </>
  );
};

export default SaleEyeGlass;
