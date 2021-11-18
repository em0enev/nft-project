import { Container, ImageList, ImageListItem } from "@mui/material";
import styles from "./Featured.module.scss";
import classNames from "classnames";
import { useRouter } from "next/router";


export default function Featured({ items = [] }) {
    const router = useRouter();

    return (
        <Container disableGutters sx={{ paddingY: "75px" }} maxWidth="xl">
            <ImageList
                sx={{ width: "100%" }}
                variant="quilted"
                cols={6}
                rowHeight={225}
                gap={20}>
                {items.map((item, i) => (
                    <ImageListItem key={item.id} cols={i === 0 ? 3 : 1} rows={i === 0 ? 2 : 1} onClick={() => { router.push(`/product/${item.id}`) }}>
                        <img src={item.image} className={classNames(styles.image)} />
                    </ImageListItem>
                ))}
            </ImageList>
        </Container>
    );
}