import { Container, Grid, Button, Typography } from "@mui/material";
import HowStep from "./HowStep.jsx";
import styles from "./How.module.scss";
import classNames from "classnames";

export default function How({ description, title, items = [], link }) {
    return (
        <div className={classNames(styles.divWrapper)}>
            <Container disableGutters maxWidth="lg">
                <Grid container sx={{ width: "100%", height: "360px", marginY: "30px" }}>
                    <Grid item
                        xs={6}
                        sx={{ paddingTop: "60px" }}>
                        <Container disableGutters sx={{width: "75%", margin: 0}}>
                            <Typography sx={{ fontSize: "2.5rem", fontWeight: "bold" }}>{title}</Typography>
                            <Typography sx={{ marginY: "15px", fontSize: "0.9em" }}>{description}</Typography>
                            <Button href={link} variant="contained" sx={{ backgroundColor: "white", color: "rgb(78,36, 242)" }}>Learn more</Button>
                        </Container>
                    </Grid>
                    <Grid item xs={6}
                        sx={{ marginBottom: "-20px", marginTop: "-50px", alignItems: "flex-end", display: "grid", justifyItems: "flex-end" }}>
                        {items.map((el, i) => {
                            return <HowStep key={i} number={i + 1} title={el.title} description={el.description} />
                        })}
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}