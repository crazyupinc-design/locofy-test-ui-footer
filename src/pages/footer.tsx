import { FunctionComponent } from "react";
import styles from "./footer-modified.module.css";
const FooterModified: FunctionComponent = () => {
  return (
    <div className={styles.footerModified}>
      <div className={styles.columns}>
        <div className={styles.columnParent}>
          <div className={styles.column}>
            <div className={styles.logoWrapper}>
              <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.content}>
              <b className={styles.company}>COMPANY</b>
              <div className={styles.footerLinks}>
                <div className={styles.link}>How it works</div>
                <div className={styles.link}>Pricing</div>
                <div className={styles.link}>Demo</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.columnParent}>
          <div className={styles.column}>
            <div className={styles.content1}>
              <b className={styles.company}>RESOURCES</b>
              <div className={styles.footerLinks}>
                <div className={styles.link}>Blog post name goes here</div>
                <div className={styles.link}>Blog post name goes here</div>
                <div className={styles.link}>Blog post name goes here</div>
                <div className={styles.link}>See all resources</div>
              </div>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.content}>
              <b className={styles.company}>ABOUT</b>
              <div className={styles.footerLinks}>
                <div className={styles.link7}>{`Terms & Conditions`}</div>
                <div className={styles.link8}>Privacy Policy</div>
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

export default FooterModified;
