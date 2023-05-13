import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../state/dist/userSlice.dev";

export default function MemberCard({ image, Title, list, member }) {
  const user = useSelector((state) => state.checkUser.user);
  const token = useSelector((state) => state.checkUser.token);
  const dispatch = useDispatch();
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
  const initiateTransition = async (type, amount) => {
    // e.preventDefault();
    console.log(type, amount);
    // Api integration
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
      amount: amount * 100,
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

          // Add the type
          if (resData.status === "success") {
            console.log("Came to success after fetch");
            const response = await fetch(
              "http://localhost:3001/api/payment/addMembership",
              {
                method: "POST",
                body: JSON.stringify({ type: type }),
                headers: {
                  Authorization: `Bearer ${token}`,
                  "Content-type": "application/json",
                },
              }
            );
            const data = await response.json();
            if (data.status === "success") {
              dispatch(setUser(data.updatedUser));
              console.log(data);
            } else {
              console.log(data);
            }
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
          color: "#ff6347",
        },
      };
      let paymentObject = new window.Razorpay(options);
      paymentObject.open();
    }
  };

  let rupee;
  switch (Title) {
    case "Fitness Training":
      rupee = 250;
      break;
    case "Yoga Classes":
      rupee = 200;
      break;
    default:
      rupee = 300;
      break;
  }
  const handleClick = (e) => {
    e.preventDefault();
    // Fitness Training,Yoga Classes,Dance Classes
    switch (Title) {
      case "Fitness Training":
        initiateTransition("body", 250);
        break;
      case "Yoga Classes":
        initiateTransition("yoga", 200);
        break;
      default:
        initiateTransition("dance", 300);
        break;
    }
  };
  return (
    <>
      {member ? (
        <>
          <div className="mem-card-purchased mem-card-glow">
            <img src={image} alt="" className="mem-body-pic-m" />
            <div className="card-content">
              <h1 className="mem-title">{Title}</h1>
              <hr />
              <p>You have already purchased this membership.</p>
              <h2>⭐</h2>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="mem-card mem-card-unpurchased mem-card-glow">
            <div className="container">
              <img src={image} alt="" className="mem-body-pic" />
              <div class="overlay">
                <span className="price">₹{rupee}</span>/month only
              </div>
            </div>
            <div className="card-content">
              <h1 className="mem-title">{Title}</h1>
              <hr />
              <div className="mem-card-ul">
                {list.map((e, index) => {
                  return (
                    <l1 key={index} className="mem-card-li">
                      {e}
                    </l1>
                  );
                })}
              </div>
              <button className="mem-card-button" onClick={handleClick}>
                💸 Purchase
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
