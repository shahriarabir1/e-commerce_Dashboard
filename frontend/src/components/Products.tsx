import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Products = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    getProduct();
  }, []);
  const [key, setKey] = useState("");
  const getProduct = async () => {
    const user: any = localStorage.getItem("user")
      ? localStorage.getItem("user")
      : null;

    let result: any = await fetch("http://localhost:3000/product", {
      method: "get",
      headers: {
        Authorization: `bearer${JSON.parse(user).token}`,
      },
    });
    result = await result.json();
    setProduct(result);
  };
  const handleDeleteAll = async () => {
    const result = await fetch("http://localhost:3000/product", {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (result.status === 200) {
      alert("Deleted Successfully");
      location.reload();
    } else {
      alert("There is a problem");
    }
  };
  const handleDelete = async (id: string) => {
    let result = await fetch(`http://localhost:3000/product/${id}`, {
      method: "delete",
    });
    result = await result.json();
    if (result) {
      alert("Deleted");
      getProduct();
    } else {
      alert("There is a problem");
    }
  };
  const keyChange = (e: any) => {
    setKey(e.target.value);
  };

  const handleSearch = async () => {
    const result = await fetch(`http://localhost:3000/search/${key}`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await result.json();
    setProduct(data);
  };
  return (
    <div className="text-white flex flex-col  items-center">
      <h1 className="text-2xl font-bold my-5">Product List</h1>
      <div className="flex mb-5">
        <input
          placeholder="search"
          className="p-4 text-black  rounded-lg"
          value={key}
          onChange={(e) => keyChange(e)}
          onKeyDown={handleSearch}
        />
        <button
          className="ml-4 bg-green-500 px-4 rounded-lg hover:bg-green-900"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <td className="border border-solid  p-5 font-bold">Serial No.</td>
            <td className="border border-solid p-5 font-bold">Product Name</td>
            <td className="border border-solid p-5 font-bold">Category</td>
            <td className="border border-solid p-5 font-bold">Company</td>
            <td className="border border-solid p-5 font-bold">Price</td>
            <td className="border border-solid p-5 font-bold">
              <button onClick={handleDeleteAll} className="text-red-500">
                X
              </button>
            </td>
            <td className="border border-solid p-5 font-bold">
              Do you want to update?
            </td>
          </tr>
        </thead>
        <tbody>
          {product.length > 0 ? (
            product.map((item: any, index) => {
              return (
                <tr key={index}>
                  <td className="border border-solid p-5 font-bold">
                    {index + 1}
                  </td>
                  <td className="border border-solid p-5 ">{item.name}</td>
                  <td className="border border-solid p-5 ">{item.type}</td>
                  <td className="border border-solid p-5 ">{item.company}</td>
                  <td className="border border-solid p-5">{item.price}</td>
                  <td className="border border-solid p-5 ">
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="text-red-500"
                    >
                      X
                    </button>
                  </td>
                  <td className="border border-solid p-5 text-center">
                    <Link
                      to={"/updateproducts/" + item._id}
                      className="bg-green-500 p-3 rounded-lg transition duration-500 ease-in-out hover:bg-green-900"
                    >
                      Update
                    </Link>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td className="text-2xl font-bold relative left-[400px] mt-10">
                No Result Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
