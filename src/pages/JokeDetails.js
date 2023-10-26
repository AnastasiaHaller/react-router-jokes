import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedJoke from "../components/jokes/HighlightedJoke";

const DUMMY_JOKES = [
    {
        id: 'j1',
        topic: 'Programming',
        text: `How many programmers does it take to change a light bulb? None - It's a hardware problem.`,
    },
    {
        id: 'j2',
        topic: 'General',
        text: 'How many bones are in the human hand? A handful of them.',
    },
];

const JokeDetails = () => {

    const routeMatch = useRouteMatch();
    const params = useParams();
    const joke = DUMMY_JOKES.find((joke) => joke.id === params.jokeId);

    if (!joke) {
        return <h1 className='centered'>No Jokes</h1>
    }

    return(
        <>
            <HighlightedJoke text={joke.text} topic={joke.topic}/>
            <Route path={`${routeMatch.path}`} exact>
                <div className="centered">
                    <Link className='btn--empty' to={`${routeMatch.url}/comments`}>Show Comments</Link>
                </div>
            </Route>
            <Route path={`${routeMatch.path}/comments`}>
                <Comments />
            </Route>
        </>
    );
};

export default JokeDetails;