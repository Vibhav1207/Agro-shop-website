import { useSession, signIn } from "next-auth/react";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Admin = () => {
  const { data: session } = useSession();
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: "", price: 0 });

  useEffect(() => {
    if (session) {
      fetch("/api/products/get")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }
  }, [session]);

  const handleAddProduct = () => {
    fetch("/api/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    }).then(() => {
      setProducts([...products, newProduct]);
      setNewProduct({ name: "", price: 0 });
    });
  };

  if (!session) {
    return (
      <>
        <Navbar />
        <div style={{ textAlign: "center", padding: "2rem" }}>
          <h1 className="gradient-text">Admin Panel</h1>
          <p>You must be logged in to access this page.</p>
          <button onClick={() => signIn("google")}>Sign in with Google</button>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div style={{ padding: "2rem" }}>
        <h1 className="gradient-text">Admin Panel</h1>
        <div>
          <h2>Add New Product</h2>
          <input
            type="text"
            placeholder="Product Name"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          />
          <input
            type="number"
            placeholder="Price"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          />
          <button onClick={handleAddProduct}>Add Product</button>
        </div>
        <div>
          <h2>Product List</h2>
          {products.map((product) => (
            <div key={product._id}>
              <p>{product.name}</p>
              <button>Delete</button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Admin;
