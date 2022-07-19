import Header from "../../components/Header/Header"
import image from "../../assets/msg.gif"
import Form from "../Contatos/Form/Form"
import Footer from "../../components/Footer/Footer"


function Contatos() {
    return (
        <>
            <Header
                image={image}
                description="ilustração de uma pessoa correndo com uma carta na mão"
            >
                Contatos:
            </Header>
            <Form />
            <Footer />
        </>
    )
}
export default Contatos