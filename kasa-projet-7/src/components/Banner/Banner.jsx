import styles from "./Banner.module.css";

function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerBackground}>
        <p className={styles.textBanner}>Chez vous, partout et ailleurs</p>
      </div>
    </div>
  );
}

export default Banner;
