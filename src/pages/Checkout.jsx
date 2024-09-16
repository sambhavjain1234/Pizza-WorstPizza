import "../styles/checkout.css";
import { AiFillCheckCircle } from "react-icons/ai";

const Checkout = () => {
  return (
    <>
      <div className="checkoutMessage">
        <div className="checkoutTitleContainer">
          <AiFillCheckCircle className="checkoutIcon" />
          <h3>Thank you for your order !</h3>
        </div>
        <span>
          Your order is being processed and will be delivered as late as
          possible.
          Be ready for the <span className="text-red-500">WORST PIZZA EVER OF YOUR LIFE</span>
        </span>
      </div>
    </>
  );
};

export default Checkout;
