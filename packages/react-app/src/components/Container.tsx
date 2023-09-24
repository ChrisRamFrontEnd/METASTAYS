import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Container.css";

const Container: FunctionComponent = () => {
  const navigate = useNavigate();

  const onNoPropertiesOwnedClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onButtonContainerClick = useCallback(() => {
    navigate("/user-profile");
  }, [navigate]);

  const onWantToUploadClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFrameContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="no-properties-owned-parent">
      <div
        className="no-properties-owned-container"
        onClick={onNoPropertiesOwnedClick}
      >
        <span className="no-properties-owned-container1">
          <p className="no-properties-owned">No properties owned.</p>
        </span>
      </div>
      <div className="button2" onClick={onButtonContainerClick}>
        <div className="button-item" data-scroll-to="rectangle" />
        <div className="add-property">ADD PROPERTY</div>
      </div>
      <i className="want-to-upload" onClick={onWantToUploadClick}>
        Want to upload your property for rent?
      </i>
      <div className="unlock-1-parent" onClick={onFrameContainerClick}>
        <img className="unlock-1-icon" alt="" src="/unlock-1@2x.png" />
        <div className="create-a-property">Create a Property Lock with</div>
      </div>
    </div>
  );
};

export default Container;
