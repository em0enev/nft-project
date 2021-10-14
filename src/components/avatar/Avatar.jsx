import classNames from "classnames";
import styles from "./Avatar.module.scss"

export default function Avatar({ size = 90, url, verified = false, }) {
    const imgSrc = url !== undefined ? url : "./images/avatar.png";

    return (
        <div className={classNames(styles.avatar)}>
            <img  style={{ width:size, height:size }} className={classNames(styles.image)} src={imgSrc}></img>
            {verified && <img className={classNames(styles.badge)} src="./images/verified.svg" alt="" />}
        </div>
    );

}