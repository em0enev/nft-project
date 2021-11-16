import { Stack } from "@mui/material";
import classNames from "classnames";
import styles from "./ActivityList.module.scss"
import ActivityListItem from "./ActivityListItem";

export default function ActivityList({ items }) {

    return (
        <div className={classNames(styles['activity-list'])}>
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={1}>
                {items.map((el, i) => {
                    return <ActivityListItem key={i} created_at={el.created_at} nft={el.nft} user={el.user} type={el.type} />
                })}
            </Stack>
        </div>
    )
}