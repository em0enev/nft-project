import classNames from "classnames";
import styles from "./ProductTabs.module.scss"
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Tab, Table, TableBody, TableCell, TableRow } from "@mui/material";
import { useState } from "react";
import User from "../user/User";
import { parseISO, formatDistance } from "date-fns"
export default function ProductTabs({ text, bids }) {
    const [value, setValue] = useState('1');


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classNames(styles["product-tabs"])}>
            <TabContext value={value}>
                <TabList onChange={handleChange}>
                    <Tab className={classNames(styles["tab-details"])} label="DETAILS" value="1" />
                    <Tab className={classNames(styles["tab-bids"])} label="BIDS" value="2" />
                </TabList>
                <TabPanel sx={{ paddingLeft: 0 }} value="1">
                    {text}
                </TabPanel>
                <TabPanel value="2" sx={{ paddingLeft: 0 }}>
                    <Table>
                        <TableBody>
                            {bids.map((el, i) => {
                                return <TableRow className={classNames([`table-row-${i}`])} key={i}>
                                    <TableCell><User name={el.user.name} verified={el.user.verified} avatar={el.user.avatar} /></TableCell>
                                    <TableCell sx={{ color: "rgb(36,244,95)" }}>{el.amount}</TableCell>
                                    <TableCell >{formatDistance(parseISO(bids[0].date), Date.now())} ago</TableCell>
                                </TableRow>
                            })}
                        </TableBody>
                    </Table>
                </TabPanel>
            </TabContext>
        </div>
    )
}