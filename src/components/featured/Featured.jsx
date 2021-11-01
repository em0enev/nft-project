import { Container, ImageList, ImageListItem } from "@mui/material";
import styles from "./Features.module.scss";
import classNames from "classnames";
import { useRouter } from "next/router";

export default function Featured({ items = {} }) {
    const router = useRouter();

    return (
        <Container>
            <ImageList
                sx={{ width: "100%", height: "50%" }}
                variant="quilted"
                cols={6}
                gap={20}
            // rowHeight={121}
            >
                {items.map((item) => (
                    <ImageListItem key={item.image} cols={item.cols || 1} rows={item.rows || 1} onClick={() => {
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