import { FunctionComponent } from "react";
import "./CardContainer.css";

const CardContainer: FunctionComponent = () => {
  return (
    <div className="card-1">
      <img className="image-16-icon" alt="" src="/image-161@2x.png" />
      <i className="cantu-ave">321 Cantu ave</i>
      <i className="mi1">2.1 mi</i>
      <i className="stays1">1132 stays</i>
      <div className="group">
        <div className="div1">4.7</div>
        <img className="vector-icon2" alt="" src="/vector1.svg" />
      </div>
    </div>
  );
};

export default CardContainer;
