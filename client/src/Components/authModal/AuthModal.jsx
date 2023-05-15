import React from "react";
import "./AuthModal.css";
import { RingLoader } from "react-spinners";
import { useSelector } from "react-redux";
import Message from "../message/Message";
export default function AuthModal({ message, setMessage }) {
  const loading = useSelector((state) => state.checkUser.loading);
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  return (
    <div className="modal" onClick={() => setMessage("")}>
      <div className="modal-wrapper">
        {message.message ? (
          <>
            <Message status={message.status} message={message.message} />
            <RingLoader
              color={"#89551d"}
              loading={loading}
              cssOverride={override}
              size={120}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </>
        ) : null}
      </div>
    </div>
  );
}
