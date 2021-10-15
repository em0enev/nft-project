import classNames from "classnames";
import styles from "./Avatar.module.scss"

export default function Avatar({ size = 90, url, verified = false, }) {
    const defaultImageSrc = "./images/avatar.png";
    const badgeIconSrc = "./images/verified.svg";
    const imgSrc = url !== undefined ? url : defaultImageSrc;

    return (
        <div className={classNames(styles.avatar)}>
            <img style={{ width: size, height: size }} className={classNames(styles.image)} src={imgSrc}></img>
            {verified && <img className={classNames(styles.badge)} src={badgeIconSrc} />}
        </div>
    );
}