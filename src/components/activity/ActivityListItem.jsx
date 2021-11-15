import classNames from "classnames";
import styles from "./ActivityListItem.module.scss"
import { formatDistance, parseISO } from 'date-fns'
import { Card } from "@mui/material";
import Avatar from '../avatar/Avatar.jsx'
import Link from '../link/Link.jsx'

export default function ActivityListItem({ user, created_at, nft, type = "like" }) {
    return (
        <Card className={classNames(styles.card)}>
            <div className={classNames(styles.avatar)}>
                <Avatar url={user.avatar.url} size={57} />
            </div>
            <div className={classNames(styles.info)}>
                <p className={classNames(styles["action-info"])}><strong>{user.name}</strong> {type === "like" ? "liked" : "bought"} <a href="" component={Link} className={classNames(styles.link)}>"{nft.name}"</a> by <a href="" component={Link} className={classNames(styles.link)}>"{nft.owner.username}"</a> </p>
                <p className={classNames(styles.time)}>{formatDistance(parseISO(created_at), Date.now())} ago</p>
            </div>
        </Card>
    )
}