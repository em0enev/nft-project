import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Logo from "../logo/Logo.jsx";
import Link from "../link/Link.jsx";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import { Menu, MenuItem, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import classNames from "classnames";
import styles from "./Header.module.scss";
import { useState } from "react";

export default function Header() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classNames(styles["header-container"])}>
            <Grid
                container
                maxWidth="xl"
                className={classNames(styles["grid-container"])}>
                <Grid item md={2} display={{ xs: "none", md: "flex" }}>
                    <Link href="/">
                        <Logo />
                    </Link>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={5}
                    paddingX={{ xs: "10px", md: "0" }}
                    display={{ xs: "none", md: "block" }}>
                    <TextField
                        className={classNames(styles["search-bar"])}
                        fullWidth
                        placeholder="Find items, users and activities"
                        variant="outlined"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment
                                    position="start"
                                    color="secondary">
                                    <SearchIcon
                                        className={classNames(
                                            styles["search-icon"]
                                        )}
                                    />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
                <Grid
                    item
                    container
                    className={classNames(styles["button-container"])}
                    xs={12}
                    md={5}
                    justifyContent={{ xs: "center", md: "flex-end" }}
                    display={{ xs: "none", md: "flex" }}>
                    <Link href="/">
                        <Button
                            className={classNames(styles["button"])}
                            variant="text">
                            Home
                        </Button>
                    </Link>
                    <Link href="/activity">
                        <Button
                            className={classNames(styles["button"])}
                            variant="text">
                            Activity
                        </Button>
                    </Link>
                    <Link href="/explore">
                        <Button variant="contained" size="large">
                            Explore
                        </Button>
                    </Link>
                </Grid>
                <Grid item container display={{ xs: "flex", md: "none" }}>
                    <Grid
                        item
                        xs={10}
                        md={5}
                        paddingX={{ xs: "10px", md: "0" }}>
                        <TextField
                            className={classNames(styles["search-bar"])}
                            fullWidth
                            placeholder="Find items, users and activities"
                            variant="outlined"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment
                                        position="start"
                                        color="secondary">
                                        <SearchIcon
                                            className={classNames(
                                                styles["search-icon"]
                                            )}
                                        />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={2}
                        display="flex"
                        justifyContent="flex-end"
                        paddingRight="10px">
                        <IconButton
                            id="basic-button"
                            aria-controls={open ? "basic-menu" : undefined}
                            aria-expanded={open ? "true" : undefined}
                            aria-haspopup="true"
                            onClick={handleClick}
                            color="primary">
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                "aria-labelledby": "basic-button",
                            }}>
                            <MenuItem onClick={handleClose}>
                                <Link href="/">
                                    <Button
                                        className={classNames(styles["button"])}
                                        variant="text">
                                        Home
                                    </Button>
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <Link href="/activity">
                                    <Button
                                        className={classNames(styles["button"])}
                                        variant="text">
                                        Activity
                                    </Button>
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <Link href="/explore">
                                    <Button variant="contained" size="large">
                                        Explore
                                    </Button>
                                </Link>
                            </MenuItem>
                        </Menu>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}
