import React, { useEffect, useState } from "react";

const ViewCart = () => {
  const [cart, setCart] = useState([]);
  const [phone, setPhone] = useState("");

  const img_url =
    "https://ryanoryx.alwaysdata.net/static/images/";

  // get cart products
  useEffect(() => {
    const cartProducts =
      JSON.parse(localStorage.getItem("cart")) || [];

    setCart(cartProducts);
  }, []);

  // remove item
  const removeItem = (id) => {
    const updatedCart = cart.filter(
      (item) => item.product_id !== id
    );

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // total
  const total = cart.reduce(
    (sum, item) => sum + Number(item.product_cost),
    0
  );

  // purchase function
  const handlePurchase = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    if (phone.trim() === "") {
      alert("Please enter your phone number!");
      return;
    }

    // simulate purchase
    alert(
      `Purchase successful!\nTotal: Ksh ${total}\nPhone: ${phone}`
    );

    // clear cart
    setCart([]);
    localStorage.removeItem("cart");
    setPhone("");
  };

  return (
    <div className="container mt-4">

      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <h4>No products in cart</h4>
      ) : (
        <>
          <div className="row">
            {cart.map((item) => (
              <div
                className="col-md-3 mb-4"
                key={item.product_id}
              >
                <div className="card shadow p-3">

                  <img
                    src={img_url + item.product_photo}
                    alt=""
                    className="product_img"
                  />

                  <h5 className="mt-2">
                    {item.product_name}
                  </h5>

                  <p>{item.product_description}</p>

                  <b className="text-warning">
                    Ksh {item.product_cost}
                  </b>

                  <button
                    className="btn btn-danger mt-2"
                    onClick={() =>
                      removeItem(item.product_id)
                    }
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* TOTAL */}
          <h3 className="mt-3">Total: Ksh {total}</h3>

          {/* PHONE INPUT */}
          <div className="mt-3">
            <label className="form-label">
              Phone Number (for payment/delivery)
            </label>

            <input
              type="tel"
              className="form-control"
              placeholder="e.g. 0712345678"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={{ maxWidth: "300px" }}
            />
          </div>

          {/* PURCHASE BUTTON */}
          <button
            className="btn btn-success mt-3 px-4"
            onClick={handlePurchase}
          >
             Purchase
          </button>
        </>
      )}
    </div>
  );
};

export default ViewCart;