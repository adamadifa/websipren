import Header from "../component/Header";
import Navbar from "../component/Navbar";
import Jumbotron from "../component/Jumbotron";
import Footer from "../component/Footer";
import Empatpilar from "../component/Empatpilar";
const LayoutHome = (props) => {
    const { children } = props;
    return (
        <>
            <Header>
                <Navbar />
                <Jumbotron />
                <Empatpilar />
            </Header>
            {children}
            <Footer />
        </>
    );
}

export default LayoutHome