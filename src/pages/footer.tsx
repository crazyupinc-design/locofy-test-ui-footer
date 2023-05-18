import { FunctionComponent } from "react";
import styles from "./footer.module.css";
const Footer: FunctionComponent = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.columns}>
        <div className={styles.column}>
          <div className={styles.logoWrapper}>
            <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
          </div>
        </div>
        <div className={styles.smallColumns}>
          <div className={styles.column1}>
            <div className={styles.content}>
              <b className={styles.company}>COMPANY</b>
              <div className={styles.footerLinks}>
                <div className={styles.company}>How it works</div>
                <div className={styles.company}>Pricing</div>
                <div className={styles.company}>Demo</div>
              </div>
            </div>
          </div>
          <div className={styles.column1}>
            <div className={styles.content}>
              <b className={styles.company}>RESOURCES</b>
              <div className={styles.footerLinks}>
                <div className={styles.company}>Blog post name goes here</div>
                <div className={styles.company}>Blog post name goes here</div>
                <div className={styles.company}>Blog post name goes here</div>
                <div className={styles.company}>See all resources</div>
              </div>
            </div>
          </div>
          <div className={styles.column1}>
            <div className={styles.content}>
              <b className={styles.company}>ABOUT</b>
              <div className={styles.footerLinks}>
                <div className={styles.link7}>{`Terms & Conditions`}</div>
                <div className={styles.link7}>Privacy Policy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <div className={styles.text}>Copyright © 2022 Company name</div>
      </div>
    </div>
  );
};

export default Footer;
