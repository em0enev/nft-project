import Container from "@mui/material/Container";
import Avatar from "../avatar/Avatar";

export default function User({ name = "", info = "", avatar = "", size = 55, verified = false }) {
    return (
        <Container fixed style={{ width: 200, height: 200 }}>
            <Avatar verified="true" />
        </Container>
    );
}