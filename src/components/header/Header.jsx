import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Logo from "../logo/Logo.jsx";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import classNames from "classnames";
import styles from "./Header.module.scss";

export default function Header() {
    return (
        <div className={classNames(styles["header-container"])}>
            <Grid
                container
                maxWidth="xl"
                className={classNames(styles["grid-container"])}>
                <Grid item md={2} display={{ xs: "none", md: "flex" }}>
                    <Logo></Logo>
                </Grid>
                <Grid item xs={12} md={5} paddingX={{ xs: "10px", md: "0" }}>
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
                    justifyContent={{ xs: "center", md: "flex-end" }}>
                    <Button
                        className={classNames(styles["button"])}
                        variant="text">
                        Home
                    </Button>
                    <Button
                        className={classNames(styles["button"])}
                        variant="text">
                        Activity
                    </Button>
                    <Button variant="contained">Explore</Button>
                </Grid>
            </Grid>
        </div>
    );
}
