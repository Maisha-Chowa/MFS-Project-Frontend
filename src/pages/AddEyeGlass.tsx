import { FormEvent, useRef } from "react";
import { usePostEyeGlassMutation } from "../redux/features/eyeglass/eyeglassApi";

const AddEyeGlass = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const quantityRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const frameMaterialRef = useRef<HTMLOptionElement>(null);
  const frameShapeRef = useRef<HTMLOptionElement>(null);
  const lensTypeRef = useRef<HTMLOptionElement>(null);
  const brandRef = useRef<HTMLInputElement>(null);
  const genderRef = useRef<HTMLOptionElement>(null);
  const colorRef = useRef<HTMLInputElement>(null);

  const [postEyeGlass, { isLoading, isError, isSuccess }] =
    usePostEyeGlassMutation();
  console.log(isLoading);
  console.log("error-tosolve-conflict", isError);
  console.log(isSuccess);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const name = nameRef?.current?.value;
    const price = priceRef?.current?.value;
    const quantity = quantityRef?.current?.value;
    const image = imageRef?.current?.value;
    const frameMaterial = frameMaterialRef?.current?.value;
    const frameShape = frameShapeRef?.current?.value;
    const lensType = lensTypeRef?.current?.value;
    const brand = brandRef?.current?.value;
    const gender = genderRef?.current?.value;
    const color = colorRef?.current?.value;

    const inputValue = {
      name,
      price,
      quantity,
      image,
      frameMaterial,
      frameShape,
      lensType,
      brand,
      gender,
      color,
    };
    console.log(inputValue);

    const options = {
      data: inputValue,
    };

    console.log(options.data);
    await postEyeGlass(options.data);

    (event.target as HTMLFormElement).reset();
  };
  return (
    <div className="max-w-5xl mx-auto mt-5">
      <h2 className="text-3xl font-semibold p-5 text-center text-amber-300">
        {" "}
        Add New Eye Glass
      </h2>
      <form onSubmit={handleSubmit} className="my-12">
        <div className="grid gap-2">
          <div className="grid gap-1">
            <input
              className="input input-bordered"
              id="name"
              placeholder="name"
              type="text"
              ref={nameRef}
            />
            <input
              className="input input-bordered"
              id="price"
              placeholder="price"
              type="text"
              ref={priceRef}
            />
            <input
              className="input input-bordered"
              id="quantity"
              placeholder="quantity"
              type="text"
              ref={quantityRef}
            />
            <input
              className="input input-bordered"
              id="image"
              placeholder="image"
              type="text"
              ref={imageRef}
            />
            <label className="font-bold  text-amber-300">Frame Material</label>
            <select className="input input-bordered" id="frameMaterial">
              <option ref={frameMaterialRef} value="plastic">
                Plastic
              </option>
              <option ref={frameMaterialRef} value="acetate">
                Acetate
              </option>
              <option ref={frameMaterialRef} value="metal">
                Metal
              </option>
            </select>
            <label className="font-bold  text-amber-300">Frame Shape</label>
            <select className="input input-bordered" id="frameShape">
              <option ref={frameShapeRef} value="rectangular">
                Rectangular
              </option>
              <option ref={frameShapeRef} value="round">
                Round
              </option>
              <option ref={frameShapeRef} value="cat-eye">
                Cat-Eye
              </option>
            </select>
            <label className="font-bold  text-amber-300">Lens Type</label>
            <select className="input input-bordered" id="lensType">
              <option ref={lensTypeRef} value="single-vision">
                single-vision
              </option>
              <option ref={lensTypeRef} value="bifocal">
                bifocal
              </option>
              <option ref={lensTypeRef} value="progressive">
                progressive
              </option>
            </select>
            <input
              className="input input-bordered"
              id="brand"
              placeholder="brand"
              type="text"
              ref={brandRef}
            />
            <label className="font-bold  text-amber-300">Gender</label>
            <select className="input input-bordered" id="gender">
              <option ref={genderRef} value="men">
                Men
              </option>
              <option ref={genderRef} value="women">
                Women
              </option>
              <option ref={genderRef} value="unisex">
                unisex
              </option>
            </select>
            <input
              className="input input-bordered"
              id="color"
              placeholder="Color"
              type="text"
              ref={colorRef}
            />
          </div>
          <button
            type="submit"
            className="rounded-full h-15 w-15 p-2 text-1xl  bg-amber-300 text-slate-600 font-bold font-bold"
          >
            Add Eye Glass
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEyeGlass;
