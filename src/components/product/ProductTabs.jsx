import classNames from "classnames";
import styles from "./ProductTabs.module.scss";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
    Tab,
    Table,
    TableBody,
    TableCell,
    TableRow,
    Typography,
} from "@mui/material";
import { useState } from "react";
import User from "../user/User";
import { parseISO, formatDistance } from "date-fns";
import { Box } from "@mui/system";

export default function ProductTabs({ text, bids }) {
    const [tabValue, setTabValue] = useState("1");

    const handleChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <div className={classNames(styles["product-tabs"])}>
            <TabContext value={tabValue}>
                <Box className={classNames(styles["tab-list-wrapper"])}>
                    <TabList textColor="inherit" onChange={handleChange}>
                        <Tab
                            className={classNames(styles["tab-title"])}
                            label="DETAILS"
                            value="1"
                        />
                        <Tab
                            className={classNames(styles["tab-title"])}
                            label="BIDS"
                            value="2"
                        />
                    </TabList>
                </Box>
                <TabPanel
                    className={classNames(styles["tab-details"])}
                    value="1">
                    <Typography
                        color="textSecondary"
                        className={classNames(styles["details-text"])}>
                        {text}
                    </Typography>
                </TabPanel>
                <TabPanel value="2" className={classNames(styles["tab-bids"])}>
                    <Table className={classNames(styles["table"])}>
                        <TableBody>
                            {bids.map((el, i) => {
                                return (
                                    <TableRow
                                        className={classNames([
                                            `table-row-${i}`,
                                        ])}
                                        key={i}>
                                        <TableCell>
                                            <User
                                                name={el.user.name}
                                                verified={el.user.verified}
                                                avatar={el.user.avatar}
                                                size={34}
                                            />
                                        </TableCell>
                                        <TableCell
                                            className={classNames(
                                                styles["price"]
                                            )}>
                                            {el.amount}
                                        </TableCell>
                                        <TableCell
                                            className={classNames(
                                                styles["date"]
                                            )}>
                                            {formatDistance(
                                                parseISO(el.date),
                                                Date.now()
                                            )}
                                            ago
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TabPanel>
            </TabContext>
        </div>
    );
}
