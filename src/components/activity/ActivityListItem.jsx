import classNames from "classnames";
import styles from "./ActivityListItem.module.scss";
import { formatDistance, parseISO } from "date-fns";
import { Card } from "@mui/material";
import Avatar from "../avatar/Avatar.jsx";
import Link from "../link/Link.jsx";

export default function ActivityListItem({
    user,
    created_at,
    nft,
    type = "like",
}) {
    return (
        <Card className={classNames(styles.card)}>
            <div className={classNames(styles.avatar)}>
                <Avatar url={user.avatar.url} size={57} />
            </div>
            <div className={classNames(styles.info)}>
                <p className={classNames(styles["action-info"])}>
                    <strong>{user.username}</strong>{" "}
                    {type === "like" ? "liked" : "bought"}{" "}
                    <Link
                        sx={{
                            color: "#24F25E",
                            textDecorationColor: "#24F25E",
                        }}
                        href="">
                        "{nft.name}"
                    </Link>{" "}
                    by{" "}
                    <Link
                        sx={{
                            color: "#24F25E",
                            textDecorationColor: "#24F25E",
                        }}
                        href="">
                        "{nft.owner.username}"
                    </Link>
                </p>
                <p className={classNames(styles.time)}>
                    {formatDistance(parseISO(created_at), Date.now())} ago
                </p>
            </div>
        </Card>
    );
}
