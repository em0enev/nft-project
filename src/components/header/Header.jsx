import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Logo from "../logo/Logo.jsx";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import classNames from "classnames";
import styles from "./Header.module.scss";
import { Container } from "@mui/material";

export default function Header() {
    return (
        <div className={classNames(styles["header-container"])}>
            <Grid
                container
                maxWidth="xl"
                className={classNames(styles["grid-container"])}
                alignItems="center"
                direction="row"
                justifyContent="space-between">
                <Grid item item md={2} display={{ xs: "none", md: "flex" }}>
                    <Logo></Logo>
                </Grid>
                <Grid item xs={12} md={5} paddingX={{ xs: "10px", md: "0" }}>
                    <TextField
                        fullWidth
                        placeholder="Find items, users and activities"
                        sx={{
                            div: {
                                backgroundColor: "rgba(12, 12, 20, 1)",
                                maxHeight: "51px",
                            },
                            maxWidth: "580px",
                        }}
                        variant="outlined"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment
                                    position="start"
                                    color="secondary">
                                    <SearchIcon sx={{ color: "white" }} />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
                <Grid
                    item
                    container
                    xs={12}
                    md={5}
                    direction="row"
                    justifyContent={{ xs: "center", md: "flex-end" }}
                    alignItems="center">
                    <Button
                        variant="text"
                        sx={{ color: "white", textTransform: "none" }}>
                        Home
                    </Button>
                    <Button
                        variant="text"
                        sx={{ color: "white", textTransform: "none" }}>
                        Activity
                    </Button>
                    <Button variant="contained">Explore</Button>
                </Grid>
            </Grid>
        </div>
    );
}
