import { ChangeEvent, FormEvent, useState } from "react";
import AdminSideBar from "../../components/AdminSideBar";

const img =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804";

const ProductManagement = () => {
  const [name, setName] = useState<string>("Puma Shoes");
  const [price, setPrice] = useState<number>(200);
  const [stock, setStock] = useState<number>(10);
  const [photo, setPhoto] = useState<string>(img);

  const [nameUpdate, setNameUpdate] = useState<string>(name);
  const [priceUpdate, setPriceUpdate] = useState<number>(price);
  const [stockUpdate, setStockUpdate] = useState<number>(stock);
  const [photoUpdate, setPhotoUpdate] = useState<string>(photo);

  const changeImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0];

    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (typeof reader.result === "string") setPhotoUpdate(reader.result);
      };
    }
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    setName(nameUpdate);
    setPhoto(photoUpdate);
    setPrice(priceUpdate);
    setStock(stockUpdate);
  };
  return (
    <div className="adminConatiner">
      {/* Side Bar */}
      <AdminSideBar />
      {/* Main */}
      <main className="productManagement">
        <section>
          <strong>ID - kjscbkasbcabfutvu</strong>
          <img src={photo} alt="Product" />
          <p>{name}</p>
          {stock > 0 ? (
            <span className="green"> {stock} Avaliable</span>
          ) : (
            <span className="red"> Not Avaliable</span>
          )}
          <h3>{price}</h3>
        </section>
        <article>
          <form onSubmit={handleFormSubmit}>
            <h2>Manage</h2>
            <div>
              <label htmlFor="name">Name</label>
              <input
                required
                type="text"
                id="name"
                value={nameUpdate}
                onChange={(e) => setNameUpdate(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="price">Price</label>
              <input
                required
                type="number"
                id="price"
                value={priceUpdate}
                onChange={(e) => setPriceUpdate(Number(e.target.value))}
              />
            </div>
            <div>
              <label htmlFor="stock">Stock</label>
              <input
                required
                type="number"
                id="stock"
                value={stockUpdate}
                onChange={(e) => setStockUpdate(Number(e.target.value))}
              />
            </div>
            <div>
              <label htmlFor="photo">Photo</label>
              <input
                required
                type="file"
                id="photo"
                onChange={changeImageHandler}
              />
            </div>

            {photoUpdate && <img src={photoUpdate} alt="New Image" />}

            <button type="submit">Update</button>
          </form>
        </article>
      </main>
    </div>
  );
};

export default ProductManagement;
