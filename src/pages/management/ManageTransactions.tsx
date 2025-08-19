import { useState } from "react";
import AdminSideBar from "../../components/AdminSideBar";
import { OrderItemType, OrderType } from "../../types";
import { Link } from "react-router-dom";

const img =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804";

const orderItems: OrderItemType[] = [
  {
    name: "Puma Shoes",
    photo: img,
    _id: "jkadgasd",
    qunatity: 4,
    price: 2000,
  },
];

const ManageTransactions = () => {
  const [order, setOrder] = useState<OrderType>({
    name: "Abdullah",
    address: "Ali pur Road",
    city: "Hafizabad",
    state: "Punjab",
    country: "Pakistan",
    pinCode: 11000,
    status: "Processing",
    subTotal: 4000,
    discount: 1200,
    shippingCharges: 0,
    tax: 120,
    total: 4000 + 120 + 0 - 1200,
    orderItems,
    _id: "sjldbaskf",
  });

  const {
    name,
    address,
    city,
    country,
    state,
    pinCode,
    subTotal,
    shippingCharges,
    tax,
    discount,
    total,
    status,
  } = order;

  const updateHandler = () => {
    setOrder((prev) => ({
      ...prev,
      status: prev.status === "Processing" ? "Shipped" : "Delievred",
    }));
    console.log("hello");
  };

  return (
    <div className="adminConatiner">
      {/* Side Bar */}
      <AdminSideBar />
      {/* Main */}
      <main className="productManagement">
        <section style={{ padding: "2rem" }}>
          <h2>Order Items</h2>
          {order.orderItems.map((i) => (
            <ProductCard
              key={i._id}
              name={i.name}
              photo={i.photo}
              price={i.price}
              _id={i._id}
              qunatity={i.qunatity}
            />
          ))}
        </section>

        <article className="shippingInfoCard">
          <h1>Order Info</h1>
          <h5>User Info</h5>
          <p>Name: {name}</p>
          <p>
            Address: `${address}, ${city}, ${state}, ${country}, ${pinCode}`
          </p>
          <h5>Amount Info</h5>
          <p>Subtotal: {subTotal}</p>
          <p>Shipping Charges: {shippingCharges}</p>
          <p>Tax: {tax}</p>
          <p>Discount: {discount}</p>
          <p>Total: {total}</p>

          <h5>Status Info</h5>
          <p>
            Status:{" "}
            <span
              className={
                status === "Delievred"
                  ? "purple"
                  : status === "Shipped"
                  ? "green"
                  : "red"
              }
            >
              {status}
            </span>
          </p>
          <button onClick={updateHandler}>Process Status</button>
        </article>
      </main>
    </div>
  );
};

const ProductCard = ({ name, photo, price, qunatity, _id }: OrderItemType) => {
  return (
    <div className="transactionProductCard">
      <img src={photo} alt={name} />
      <Link to={`/product/${_id}`}>{name}</Link>
      <span>
        ${price} X {qunatity} = ${price * qunatity}
      </span>
    </div>
  );
};

export default ManageTransactions;
