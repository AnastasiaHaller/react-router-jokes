import { useParams, Route } from "react-router-dom";
import Comments from "../components/comments/Comments";

const JokeDetails = () => {
    const params = useParams();
    return(
        <>
            <h1>Joke Details Page {params.jokeId}</h1>
            <Route path='/jokes/:jokeId/comments'>
                <Comments />
            </Route>
        </>
    );
};

export default JokeDetails;