import classNames from "classnames";
import styles from "./ProductTabs.module.scss"
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Tab, Table, TableBody, TableCell, TableRow, Typography } from "@mui/material";
import { useState } from "react";
import User from "../user/User";
import { parseISO, formatDistance } from "date-fns"
import { Box } from "@mui/system";
export default function ProductTabs({ text, bids }) {
    const [value, setValue] = useState('1');


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classNames(styles["product-tabs"])}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 5, borderColor: "rgb(25,17, 64)", marginTop: "5px" }}>
                    <TabList onChange={handleChange} sx={{ marginBottom: "-3px" }}>
                        <Tab className={classNames(styles["tab-details"])} label="DETAILS" value="1" />
                        <Tab className={classNames(styles["tab-bids"])} label="BIDS" value="2" />
                    </TabList>
                </Box>
                <TabPanel sx={{ paddingX: 0 }} value="1">
                    <Typography color="textSecondary" className={classNames(styles["details-text"])}>{text}</Typography>
                </TabPanel>
                <TabPanel value="2" sx={{ paddingX: 0 }}>
                    <Table>
                        <TableBody>
                            {bids.map((el, i) => {
                                console.log(el.user)
                                return <TableRow sx={{ "td": { border: 0, padding: "0 24px", height: "65px", backgroundColor: i % 2 === 0 ? "rgb(78, 36, 242,0.05)" : "rgb(78, 36, 242,0.15)" } }} onCopyCapture className={classNames([`table-row-${i}`])} key={i} >
                                    <TableCell><User name={el.user.name} verified={el.user.verified} avatar={el.user.avatar} size={34} /></TableCell>
                                    <TableCell align="right" sx={{ color: "rgb(36,244,95)", fontWeight: "bold" }}>{el.amount}</TableCell>
                                    <TableCell align="right" sx={{ fontWeight: "bold" }}>{formatDistance(parseISO(bids[0].date), Date.now())} ago</TableCell>
                                </TableRow>
                            })}
                        </TableBody>
                    </Table>
                </TabPanel>
            </TabContext>
        </div>
    )
}