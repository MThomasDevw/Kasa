import styles from "./BannerAbout.module.css";
import CollapseFiabilite from "../Collapse/CollapseFiabilite";
import CollapseRespect from "../Collapse/CollapseRespect";
import CollapseService from "../Collapse/CollapseService";
import CollapseSecurite from "../Collapse/CollapseSecurite";
import bannerabout from "../assets/banneraboutimg.png";

function BannerAbout() {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerBackground}>
        <img className={styles.bannerPicture} src={bannerabout} alt=""></img>
      </div>
      <CollapseFiabilite />
      <CollapseRespect />
      <CollapseService />
      <CollapseSecurite />
    </div>
  );
}

export default BannerAbout;
