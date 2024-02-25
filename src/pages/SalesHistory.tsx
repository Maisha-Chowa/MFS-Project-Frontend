import { useRef } from "react";
import { useGetAllSalesQuery } from "../redux/features/sales/salesApi";
import {
  ISalesInfo,
  setDateOfTheSale,
} from "../redux/features/sales/salesSlice";
import { useAppDispatch, useAppSelector } from "../redux/hook";

const SalesHistory = () => {
  const { data } = useGetAllSalesQuery(undefined);
  const salesData = data?.data;
  let i = 0;

  //Sales History Filter
  const salesHistoryRef = useRef<HTMLOptionElement>(null);

  const { DateOfTheSale } = useAppSelector((state) => state.sales);
  console.log(DateOfTheSale);
  const dispatch = useAppDispatch();

  const handleSalesDate = () => {
    const date = salesHistoryRef?.current?.value;
    console.log(date);
    dispatch(setDateOfTheSale(date));
  };
  // if (DateOfTheSale) {

  //   console.log(salesData);
  //   let Data = salesData; // Copy original data
  //   productsData = Data?.filter((item: { price: string }) => {
  //     return item.price.includes(price);
  //   });
  //   console.log("f", productsData);
  // }

  return (
    <div className=" max-w-7xl mx-auto items-center border-b border-gray-300 ">
      <div className="flex mx-auto my-4">
        <h1 className="text-3xl flex-none font-semibold text-amber-300 mx-4 ">
          {" "}
          Sales History
        </h1>

        <select
          className="input input-bordered flex-grow w-80"
          id="frameMaterial"
        >
          <option ref={salesHistoryRef} value="monthy">
            monthly
          </option>
          <option ref={salesHistoryRef} value="weekly">
            weekly
          </option>
          <option ref={salesHistoryRef} value="daily">
            daily
          </option>
        </select>
        <button
          type="submit"
          className="rounded-full h-15 w-15 p-2 m-2 text-slate-600 font-bold bg-amber-300"
          onClick={handleSalesDate}
        >
          Filter
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>NameOfTheBuyer</th>
              <th>QuantityOfTheProduct</th>
              <th>DateOfTheSale</th>
            </tr>
          </thead>

          {salesData?.map((sale: ISalesInfo) => (
            <tbody>
              <tr>
                <th>{++i}</th>
                <td>{sale?.NameOfTheBuyer}</td>
                <td>{sale?.QuantityOfTheProduct}</td>
                <td>{sale?.DateOfTheSale}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default SalesHistory;
