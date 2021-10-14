import classNames from "classnames";
import styles from "./Avatar.module.scss"

export default function Avatar({ size = "90", url, verified = false, }) {
    return (
        <div width={size} height={size} className={classNames(styles.avatar)}>
            <img className={classNames(styles.image)} src="./images/avatar.png"></img>
            <img className={classNames(styles.badge)} src="./images/verified.svg" alt="" />
        </div>
    )
}