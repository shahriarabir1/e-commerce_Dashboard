import { useState } from "react";

const AddProducts = () => {
  const [data, setData] = useState({
    name: "",
    price: "",
    type: "",
    company: "",
  });

  const [error, setError] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!data.name || !data.price || !data.type || !data.company) {
      setError(true);
      return false;
    }
    const data2: any = localStorage.getItem("user");
    const dataParse = JSON.parse(data2);
    const final = {
      ...data,
      userId: dataParse.id,
    };

    const result = await fetch("http://localhost:3000/product", {
      method: "post",
      body: JSON.stringify(final),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const dt = await result.json();

    if (dt.userId) {
      alert("Product added Succesfully");
      location.reload();
    } else {
      alert("Product not added");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <h1 className="text-white text-2xl font-bold">Add Product</h1>
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
            required
          />
          {error && !data.name && (
            <span className="text-red-400">Enter a valid name</span>
          )}
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
            required
          />
          {error && !data.price && (
            <span className="text-red-400">Enter a valid Price</span>
          )}
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
          {error && !data.type && (
            <span className="text-red-400">Enter a valid type</span>
          )}
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
            name="company"
            id="company"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
          {error && !data.company && (
            <span className="text-red-400">Enter a valid name</span>
          )}
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

export default AddProducts;
