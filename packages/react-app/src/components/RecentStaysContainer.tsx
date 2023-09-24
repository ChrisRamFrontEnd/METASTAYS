import { FunctionComponent } from "react";
import "./RecentStaysContainer.css";

const RecentStaysContainer: FunctionComponent = () => {
  return (
    <div className="rectangle-group">
      <div className="frame-inner" />
      <div className="oct-18th-parent">
        <div className="oct-18th">Oct 18th</div>
        <img className="image-18-icon2" alt="" src="/image-18@2x.png" />
      </div>
      <div className="nov-7th-parent">
        <div className="nov-7th">Nov 7th</div>
        <img className="image-17-icon" alt="" src="/image-191@2x.png" />
      </div>
      <div className="murder-housenever-checked-out-parent">
        <div className="murder-housenever-checked">
          Murder House/Never checked out
        </div>
        <img className="image-17-icon" alt="" src="/image-17@2x.png" />
      </div>
      <div className="aug-18th-parent">
        <div className="oct-18th">Aug 18th</div>
        <img className="image-17-icon" alt="" src="/image-16@2x.png" />
      </div>
    </div>
  );
};

export default RecentStaysContainer;
