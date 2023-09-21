import { Route } from "react-router-dom/cjs/react-router-dom.min";

const Home = () => {
    return (
        <section>
            <h1>Home Page</h1>
            <Route path='/home/new-user'>
                <h2>Welcome!</h2>
            </Route>
        </section>
    );
};

export default Home;