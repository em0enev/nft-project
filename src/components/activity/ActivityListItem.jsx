import classNames from "classnames";
import styles from "./ActivityListItem.module.scss";
import { formatDistance, parseISO } from "date-fns";
import { Card } from "@mui/material";
import Avatar from "../avatar/Avatar.jsx";
import Link from "../link/Link.jsx";

export default function ActivityListItem({ user, created_at, nft, type }) {
    return (
        <Card className={classNames(styles["card"])}>
            <div className={classNames(styles["avatar"])}>
                <Avatar
                    url={user.avatar.url}
                    verified={user.verified}
                    size={57}
                />
            </div>
            <div className={classNames(styles["info"])}>
                <p className={classNames(styles["action-info"])}>
                    <strong>{user.username}</strong>{" "}
                    {type === "like" ? "liked" : "bought"}{" "}
                    <Link className={classNames(styles["link"])} href="">
                        "{nft.name}"
                    </Link>{" "}
                    by{" "}
                    <Link className={classNames(styles["link"])} href="">
                        "{nft.owner.username}"
                    </Link>
                </p>
                <p className={classNames(styles["time"])}>
                    {formatDistance(parseISO(created_at), Date.now())} ago
                </p>
            </div>
        </Card>
    );
}
