import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const UpdateProducts = () => {
  const [data, setData] = useState({
    name: "",
    price: "",
    type: "",
    company: "",
  });
  const navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    getProductInfo();
  }, []);
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const getProductInfo = async () => {
    try {
      let result = await fetch(`http://localhost:3000/product/${params.id}`, {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
      });
      let dts = result.ok
        ? await result.json()
        : console.error("There is nothing in server");
      setData(dts);
    } catch (error) {
      console.log("There is a problem in server");
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    let result = await fetch(`http://localhost:3000/product/${params.id}`, {
      method: "put",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const dt = await result.json();
    if (dt) {
      alert("Updated successfully");
      navigate("/products");
    } else {
      alert("Update failed");
    }
  };
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <h1 className="text-white text-2xl font-bold">Update Product</h1>
      <form className="w-[50%]" onSubmit={handleSubmit}>
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-white dark:text-white"
          >
            Product Name
          </label>
          <input
            onChange={handleChange}
            type="text"
            name="name"
            value={data.name}
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="price"
            className="block mb-2 text-sm font-medium text-white dark:text-white"
          >
            Product price
          </label>
          <input
            onChange={handleChange}
            type="text"
            name="price"
            value={data.price}
            id="price"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="type"
            className="block mb-2 text-sm font-medium text-white dark:text-white"
          >
            Product Type
          </label>
          <select
            id="type"
            onChange={handleChange}
            name="type"
            value={data.type}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="" disabled>
              Select One
            </option>
            <option value="phone">Phone</option>
            <option value="laptop">Laptop</option>
            <option value="pc">PC Item</option>
            <option value="others">Other Components</option>
          </select>
        </div>
        <div className="mb-6">
          <label
            htmlFor="company"
            className="block mb-2 text-sm font-medium text-white dark:text-white"
          >
            Company
          </label>
          <input
            onChange={handleChange}
            type="text"
            value={data.company}
            name="company"
            id="company"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateProducts;
