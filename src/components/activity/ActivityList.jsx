import { Stack } from "@mui/material";
import classNames from "classnames";
import styles from "./ActivityList.module.scss";
import ActivityListItem from "./ActivityListItem";

export default function ActivityList({ items }) {
    return (
        <div className={classNames(styles["activity-list"])}>
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                gap="20px">
                {items.map((el) => (
                    <ActivityListItem key={el.id} {...el} />
                ))}
            </Stack>
        </div>
    );
}
