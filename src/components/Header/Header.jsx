import reactImg from "../../assets/react-core-concepts.png";
import './Header.css'

function gerRandomNumber () {
    return Math.floor(Math.random() * 3)
}

export default function Header() {

    return (
        <header>
            <img src={reactImg} alt="Stylized atom" />
            <h1>React Essentials- header seperated</h1>
            <p>
                Fundamental React concepts you will need for almost any app you are
                going to build! {gerRandomNumber()}
            </p>
        </header>
    )
}
