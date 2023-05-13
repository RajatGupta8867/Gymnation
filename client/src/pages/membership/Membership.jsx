import React from "react";
import "./Membership.css";
export default function Membership() {
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };
  const handleClick = async (e) => {
    e.preventDefault();

    // create api integration
    let orderId =
      "Order" +
      Math.floor(Math.random() * Math.floor(Math.random() * Date.now()));

    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }
    let paymentOptions = {
      order_id: orderId,
      amount: "100" * 100,
      currency: "INR",
      payment_capture: 1,
    };

    let response = await fetch(
      "http://localhost:3001/api/payment/createMembership",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(paymentOptions),
      }
    );
    const { data } = await response.json();
    if (!data) {
      alert("Server Error,Are you online??");
    } else {
      let options = {
        key: process.env.RAZORPAY_KEY_ID,
        currency: data.currency,
        amount: data.amount,
        order_id: data.id,
        name: "Gymnation Membership ",
        description: "Membership Transaction",
        image: "assets/profileM.png",
        handler: async function (response) {
          let res = await fetch(
            "http://localhost:3001/api/payment/cardDetail",
            {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify({ id: response.razorpay_payment_id }),
            }
          );
          const resData = await res.json();
          let finalList;
          if (resData.status === "success") {
            finalList = {
              orderId: orderId,
              payment: resData.data.method,
              // addressId: newCart.addressId,
              // shippingPrice: newCart.shippingPrice,
              // cart: newCart.cart,
              total: resData.data.amount / 100,
              status: resData.data.status,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
            };
            console.log(finalList);
          } else {
            console.log("Something went very wronge");
          }
        },
        prefill: {
          email: "hash@gmail.com",
          contact: 7970716565,
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "rgb(255, 99, 71)",
        },
      };
      let paymentObject = new window.Razorpay(options);
      paymentObject.open();
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
}
