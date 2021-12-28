import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Header from "../../../src/components/header/Header.jsx";
import Footer from "../../../src/components/footer/Footer.jsx";
import ProductContainer from "../../../src/components/product/ProductContainer.jsx";

export default function index() {
    const [product, setProduct] = useState();
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        fetchProductData();

        async function fetchProductData() {
            const res = await fetch(`${process.env.apiUrl}/nfts/${id}`);
            if (res.status === 200) {
                const data = await res.json();
                setProduct(data);
            }
        }
    }, [id]);

    return (
        <div>
            <Header></Header>
            {product && <ProductContainer {...product}></ProductContainer>}
            <Footer></Footer>
        </div>
    );
}
