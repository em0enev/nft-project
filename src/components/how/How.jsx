import { Container, Grid, Button, Typography } from "@mui/material";
import Step from "../step/Step";

export default function How({ description, title, items, link }) {
    return (
        <Container disableGutters>
            <Grid container sx={{ backgroundColor: "rgb(78,36, 242)", width: "100%", height: "360px", marginY: "30px" }}>
                <Grid item
                    xs={6}
                    sx={{ paddingLeft: "40px", paddingTop: "60px" }}
                >
                    <Typography sx={{ fontSize: "2.5rem", fontWeight: "bold" }}>{title}</Typography>
                    <Typography sx={{ marginY: "15px", fontSize: "0.8rem" }}>{description}</Typography>
                    <Button href={link} variant="contained" sx={{ backgroundColor: "white", color: "rgb(78,36, 242)" }}>Learn more</Button>
                </Grid>
                <Grid item xs={6}
                    sx={{ marginBottom: "-20px", marginTop: "-50px", paddingRight: "75px", alignItems: "flex-end", display: "grid", justifyContent: "flex-end" }}
                >
                    {items.map((el, i) => {
                        return <Step number={i + 1} title={el.title} description={el.description} />
                    })}
                </Grid>
            </Grid>
        </Container>
    );
}