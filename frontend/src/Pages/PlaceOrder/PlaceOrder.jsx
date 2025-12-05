import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {

  const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Informasi Pengiriman</p>
        <div className="multi-fields">
          <input type="text" placeholder="Nama Pertama" />
          <input type="text" placeholder="Nama Terakhir" />
        </div>
        <input type="text" placeholder="Alamat Email" />
        <input type="text" placeholder="Jalan" />
        <div className="multi-fields">
          <input type="text" placeholder="Kota" />
          <input type="text" placeholder="Wilayah" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Zip code" />
          <input type="text" placeholder="Negara" />
        </div>
        <input type="text" placeholder="Nomor Telepon" />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>Rp.{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>Rp.{getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>Rp.{getTotalCartAmount()===0?0:getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button>PROSES PEMBAYARAN</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
