const Navbar = () =>
{
    return (
        <div className="navbar d-flex align-items-center">
            <h1>My projects website</h1>
            <div className="links ml-auto">
                <a href="/">Home</a>
                <a href="/" style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px"
                }}>About me</a>
            </div>
        </div>
    );
}

export default Navbar;