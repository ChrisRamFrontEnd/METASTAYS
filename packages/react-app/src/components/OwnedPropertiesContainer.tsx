import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./OwnedPropertiesContainer.css";

const OwnedPropertiesContainer: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/user-profile");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="owned-properties">
      <div className="owned-properties-child" />
      <div className="owned-properties-item" />
      <div className="owned-properties1">
        <div className="owned-properties-inner" />
        <div className="owned-properties2">Owned Properties</div>
      </div>
      <div className="no-properties-owned-container2">
        <p className="no-properties-owned1">No properties owned.</p>
      </div>
      <img className="head-house-icon3" alt="" src="/headhouse.svg" />
      <div className="frame-div" />
      <div className="button3" onClick={onButtonContainerClick}>
        <div className="button-inner" data-scroll-to="rectangle" />
        <div className="add-property1">ADD PROPERTY</div>
      </div>
      <div className="unlock-1-group" onClick={onFrameContainerClick}>
        <img className="unlock-1-icon1" alt="" src="/unlock-1@2x.png" />
        <div className="create-a-property1">Create a Property Lock with</div>
      </div>
    </div>
  );
};

export default OwnedPropertiesContainer;
