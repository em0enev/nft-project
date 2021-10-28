import { Card, Typography, Container } from '@mui/material/';
import styles from "./Step.module.scss";
import classNames from "classnames";

export default function Step(props) {
    return (
        <Card className={classNames(styles.card)}>
            <Container sx={{display: "flex", backgroundColor: "rgb(29, 25, 60)", width: "30%"}} className={classNames(styles.numberContainer)}>
                <Typography sx={{fontSize: "4.5rem"}}>1</Typography>
            </Container>
            <Container className={classNames(styles.infoContainer)}>
                <Typography variant={"h5"} sx={{fontSize: "0.6rem", marginTop: "20px", marginBottom: "10px"}}>DIGITAL GURRENCY</Typography>
                <Typography sx={{fontSize: "0.5rem"}}>You can get ETH, the digital currency that fuel transactions on the Ethereum blockchain, from a digital currency exchange</Typography>
            </Container>
        </Card>
    )
}