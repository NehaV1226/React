import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
    return (
        <div>
            <Navbar />
            <h1>Contact Us</h1>
            <form>
                <label>Email: <input type="email" /></label>
                <label>Message: <textarea></textarea></label>
                <button type="submit">Send</button>
            </form>
            <Footer />
        </div>
    );
};

export default Contact;
