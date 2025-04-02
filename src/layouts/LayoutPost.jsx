import Footer from "../component/Footer";
import Header from "../component/Header";
import Navbar from "../component/Navbar";

const LayoutPost = ({ children }) => {
    return (
        <>
            <Header>
                <Navbar />
            </Header>
            {children}
            <Footer />
        </>
    );
};

export default LayoutPost