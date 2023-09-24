import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./Footer.css";

type FooterType = {
  /** Style props */
  propTop?: CSSProperties["top"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propCursor?: CSSProperties["cursor"];
  propCursor1?: CSSProperties["cursor"];

  /** Action props */
  onLogoContainerClick?: () => void;
  onMETASTAYSText1Click?: () => void;
};

const Footer: FunctionComponent<FooterType> = ({
  propTop,
  propBackgroundColor,
  propCursor,
  propCursor1,
  onLogoContainerClick,
  onMETASTAYSText1Click,
}) => {
  const footerStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      backgroundColor: propBackgroundColor,
    };
  }, [propTop, propBackgroundColor]);

  const logoStyle: CSSProperties = useMemo(() => {
    return {
      cursor: propCursor,
    };
  }, [propCursor]);

  const mETASTAYSStyle: CSSProperties = useMemo(() => {
    return {
      cursor: propCursor1,
    };
  }, [propCursor1]);

  return (
    <footer className="footer" style={footerStyle}>
      <div className="fickleflight-bio">
        <div className="logo" onClick={onLogoContainerClick} style={logoStyle}>
          <div
            className="metastays1"
            style={mETASTAYSStyle}
            onClick={onMETASTAYSText1Click}
          >
            METASTAYS
          </div>
        </div>
        <div className="where-real-estate">
          Where Real Estate Meets the Metaverse
        </div>
      </div>
      <div className="footer-links">
        <div className="company">
          <div className="about-us">About Us</div>
          <b className="company1">Company</b>
          <div className="news">News</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
