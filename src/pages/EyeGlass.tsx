/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from "react";
import { useGetEyeGlassQuery } from "../redux/features/eyeglass/eyeglassApi";
import Card from "../components/Card";
import { IEyeGlass } from "../types/globalTypes";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import {
  setBrand,
  setColor,
  setFrameMaterial,
  setFrameShape,
  setGender,
  setLensType,
  setPriceRange,
} from "../redux/features/eyeglass/eyeglassSlice";

const EyeGlass = () => {
  const priceRef = useRef<HTMLInputElement>(null);
  const frameMaterialRef = useRef<HTMLInputElement>(null);
  const frameShapeRef = useRef<HTMLInputElement>(null);
  const lensTypeRef = useRef<HTMLInputElement>(null);
  const brandRef = useRef<HTMLInputElement>(null);
  const genderRef = useRef<HTMLInputElement>(null);
  const colorRef = useRef<HTMLInputElement>(null);
  const { data } = useGetEyeGlassQuery(undefined);
  //console.log(data);
  //console.log(isLoading);
  //console.log(error);
  const { frameMaterial, frameShape, lensType, brand, price, gender, color } =
    useAppSelector((state) => state.eyeglassesFilter);
  console.log(frameMaterial, frameShape, lensType, brand, price, gender, color);
  const dispatch = useAppDispatch();
  let productsData;

  const handlePrice = () => {
    const priceRange = priceRef?.current?.value;
    console.log(priceRange);
    dispatch(setPriceRange(priceRange));
  };

  const handleFrameMaterial = () => {
    const frameMaterial = frameMaterialRef?.current?.value;
    console.log(frameMaterial);
    dispatch(setFrameMaterial(frameMaterial));
  };
  const handleFrameShape = () => {
    const frameShape = frameShapeRef?.current?.value;
    console.log(frameShapeRef?.current?.value);
    dispatch(setFrameShape(frameShape));
  };
  const handleLensType = () => {
    const lensType = lensTypeRef?.current?.value;
    console.log(lensTypeRef?.current?.value);
    dispatch(setLensType(lensType));
  };
  const handleBrand = () => {
    const brand = brandRef?.current?.value;
    console.log(brand);
    dispatch(setBrand(brand));
  };
  const handleGender = () => {
    const gender = genderRef?.current?.value;
    console.log(gender);
    dispatch(setGender(gender));
  };
  const handleColor = () => {
    const color = colorRef?.current?.value;
    console.log(color);
    dispatch(setColor(color));
  };
  if (price) {
    const Data = data?.data;
    console.log(Data);
    productsData = Data; // Copy original data
    productsData = Data?.filter((item: { price: string }) => {
      return item.price.includes(price);
    });
    console.log("f", productsData);
  }
  if (frameMaterial) {
    const Data = data?.data;
    console.log(Data);
    productsData = Data;
    productsData = Data?.filter((item: { frameMaterial: string }) => {
      return item.frameMaterial.includes(frameMaterial);
    });
    console.log("f", productsData);
  }
  if (frameShape) {
    const Data = data?.data;
    console.log(Data);
    productsData = Data;
    productsData = Data?.filter((item: { frameShape: string }) => {
      console.log(frameShape);
      return item.frameShape.includes(frameShape);
    });
    console.log("f", productsData);
  }
  if (lensType) {
    const Data = data?.data;
    console.log(Data);
    productsData = Data;
    productsData = Data?.filter((item: { lensType: string }) => {
      console.log(lensType);
      return item.lensType.includes(lensType);
    });
    console.log("f", productsData);
  }
  if (brand) {
    const Data = data?.data;
    console.log(Data);
    productsData = Data;
    productsData = Data?.filter((item: { brand: string }) => {
      console.log(brand);
      return item.brand.includes(brand);
    });
    console.log("f", productsData);
  }
  if (gender) {
    const Data = data?.data;
    console.log(Data);
    productsData = Data;
    productsData = Data?.filter((item: { gender: string }) => {
      console.log(gender);
      return item.gender.includes(brand);
    });
    console.log("f", productsData);
  }
  if (color) {
    const Data = data?.data;
    console.log(Data);
    productsData = Data;
    productsData = Data?.filter((item: { color: string }) => {
      console.log(color);
      return item.color.includes(color);
    });
    console.log("f", productsData);
  }
  if (
    !frameMaterial &&
    !frameShape &&
    !lensType &&
    !brand &&
    !price &&
    !gender &&
    !color
  ) {
    productsData = data?.data;
  }

  return (
    <div className="grid grid-cols-12 max-w-7xl mx-auto relative ">
      <div className="col-span-3 z mr-10 space-y-5 border rounded-2xl border-gray-200/80 p-5 self-start sticky top-16 ">
        <h1 className="text-2xl uppercase">Availability</h1>
        <div className="flex flex-shrink">
          <input
            className="input input-bordered w-36"
            id="price"
            placeholder="price"
            type="text"
            ref={priceRef}
          />
          <button
            type="submit"
            className="rounded-full h-15 w-15 p-2 m-2 text-slate-600 font-bold bg-amber-300"
            onClick={handlePrice}
          >
            Find
          </button>
        </div>
        <div className="flex flex-shrink">
          <input
            className="input input-bordered w-36"
            id="frameMaterial"
            placeholder="frameMaterial"
            type="text"
            ref={frameMaterialRef}
            defaultValue={productsData?.frameMaterial}
          />
          <button
            onClick={handleFrameMaterial}
            type="submit"
            className="rounded-full h-15 w-15 p-2 m-2 text-slate-600 font-bold bg-amber-300"
          >
            Find
          </button>
        </div>
        <div className="flex flex-shrink">
          <input
            className="input input-bordered w-36"
            id="frameShape"
            placeholder="frameShape"
            type="text"
            ref={frameShapeRef}
            defaultValue={productsData?.frameShape}
          />
          <button
            type="submit"
            className="rounded-full h-15 w-15 p-2 m-2 text-slate-600 font-bold bg-amber-300"
            onClick={handleFrameShape}
          >
            Find
          </button>
        </div>
        <div className="flex flex-shrink">
          <input
            className="input input-bordered w-36"
            id="lensType"
            placeholder="lensType"
            type="text"
            ref={lensTypeRef}
            defaultValue={productsData?.lensType}
          />
          <button
            type="submit"
            className="rounded-full h-15 w-15 p-2 m-2 text-slate-600 font-bold bg-amber-300"
            onClick={handleLensType}
          >
            Find
          </button>
        </div>

        <div className="flex flex-shrink">
          <input
            className="input input-bordered w-36"
            id="brand"
            placeholder="brand"
            type="text"
            ref={brandRef}
            defaultValue={productsData?.brand}
          />
          <button
            type="submit"
            className="rounded-full h-15 w-15 p-2 m-2 text-slate-600 font-bold bg-amber-300"
            onClick={handleBrand}
          >
            Find
          </button>
        </div>

        <div className="flex flex-shrink">
          <input
            className="input input-bordered w-36"
            id="gender"
            placeholder="gender"
            type="text"
            ref={genderRef}
            defaultValue={productsData?.gender}
          />
          <button
            type="submit"
            className="rounded-full h-15 w-15 p-2 m-2 text-slate-600 font-bold bg-amber-300"
            onClick={handleGender}
          >
            Find
          </button>
        </div>

        <div className="flex flex-shrink">
          <input
            className="input input-bordered w-36"
            id="color"
            placeholder="Color"
            type="text"
            ref={colorRef}
            defaultValue={productsData?.color}
          />
          <button
            type="submit"
            className="rounded-full h-15 w-15 p-2 m-2 text-slate-600 font-bold bg-amber-300"
            onClick={handleColor}
          >
            Find
          </button>
        </div>
      </div>

      <div className="col-span-9 grid grid-cols-3 gap-10 pb-20">
        {productsData?.map((EyeGlass: IEyeGlass) => (
          <Card EyeGlass={EyeGlass} />
        ))}
      </div>
    </div>
  );
};

export default EyeGlass;
