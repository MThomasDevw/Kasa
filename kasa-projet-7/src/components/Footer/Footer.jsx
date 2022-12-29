import style from "./Footer.module.css";
import LOGO from "../assets/LOGO.png";

function Footer() {
  return (
    <div className={style.footer}>
      <img src={LOGO} alt="" />
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
}
export default Footer;
