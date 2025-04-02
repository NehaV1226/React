import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
    return (
        <div>
            <Navbar />
            <h1>About Us</h1>
            <table border="1">
                <tr><th>Name</th><th>Role</th></tr>
                <tr><td>John Doe</td><td>Developer</td></tr>
            </table>
            <Footer />
        </div>
    );
};

export default About;
