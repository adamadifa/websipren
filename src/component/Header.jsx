const Header = ({ children }) => {
    return (
        <header className="bg-[#0b3a34] bg-[url('/assets/images/bg.png')] bg-blend-overlay lg:bg-blend-multiply bg-center bg-cover text-white">
            {children}
        </header>
    );
};

export default Header;