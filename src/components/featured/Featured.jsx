import { Container, ImageList, ImageListItem } from "@mui/material";
import styles from "./Featured.module.scss";
import classNames from "classnames";
import { useRouter } from "next/router";

export default function Featured({ items = [] }) {
    const router = useRouter();

    return (
        <Container disableGutters sx={{paddingY: "50px"}}>
            <ImageList
                sx={{ width: "100%" }}
                variant="quilted"
                cols={6}
                rowHeight={150}
                gap={20}>
                {items.map((item) => (
                    <ImageListItem key={item.image} cols={item.cols} rows={item.rows} onClick={() => {
                        router.push(item.image)
                    }}>
                        <img src={item.image} className={classNames(styles.image)}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Container>
    );
}