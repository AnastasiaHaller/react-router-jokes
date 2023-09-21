import { Link } from "react-router-dom";

const About = () => {
    return (
        <section>
            <h1>About Page</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quas nulla quod in! Id dignissimos exercitationem, quod eaque maxime praesentium quas nobis dolore facere rerum dolorum, dolor, sunt nesciunt nostrum.</p>
            <Link to="/contact-us">Contact Us</Link>
        </section>
    );
};

export default About;