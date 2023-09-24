import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./CardWithRating.css";

type CardWithRatingType = {
  imageId?: string;
  carVersionCarRating?: string;
  locationName?: string;
  staySize?: string;
  distance?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
  propCursor?: CSSProperties["cursor"];
  propWidth?: CSSProperties["width"];
  propHeight?: CSSProperties["height"];

  /** Action props */
  onCard3ContainerClick?: () => void;
};

const CardWithRating: FunctionComponent<CardWithRatingType> = ({
  imageId,
  carVersionCarRating,
  locationName,
  staySize,
  distance,
  propLeft,
  propCursor,
  propWidth,
  propHeight,
  onCard3ContainerClick,
}) => {
  const card3Style: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
      cursor: propCursor,
    };
  }, [propLeft, propCursor]);

  const pier60Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  return (
    <div className="card-3" onClick={onCard3ContainerClick} style={card3Style}>
      <img className="image-18-icon1" alt="" src={imageId} />
      <div className="parent">
        <div className="div">{carVersionCarRating}</div>
        <img className="vector-icon1" alt="" src="/vector1.svg" />
      </div>
      <i className="pier-60" style={pier60Style}>
        {locationName}
      </i>
      <i className="stays">{staySize}</i>
      <i className="mi">{distance}</i>
    </div>
  );
};

export default CardWithRating;
