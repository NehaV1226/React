import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div>
            <Navbar />
            <h1>Home Page</h1>
            <form>
                <label>Name: <input type="text" /></label>
                <label>Email: <input type="text" /></label>
                <label>Contact: <input type="number" /></label>
                <button type="submit">Submit</button>
            </form>
            <Footer />
        </div>
    );
};

export default Home;
