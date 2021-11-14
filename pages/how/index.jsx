import Header from './../../src/components/header/Header.jsx'
import Footer from './../../src/components/footer/Footer.jsx'
import Hero from './../../src/components/hero/Hero.jsx'
import Description from './../../src/components/description/Description.jsx'
import classNames from "classnames";
import styles from "./index.module.scss"

export default function Index() {
    return (
        <div>
            <Header />
            <div className={classNames(styles.how)}>
                <Hero text={"HOW IT WORKS"} />
                <Description text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."} image={"https://nft-auction.herokuapp.com/uploads/0xa6dbe6b4f8e2905c26e123ec6fd08a8f7200dbc1_64120a76f4.jpg"} />
            </div>
            <Footer />
        </div>
    )
}