import { useParams } from "react-router-dom";

const ArticleDetails = () => {

    const params = useParams();
    return (
        <section>
            <h1>Article Details</h1>
            <p>{params.articleId}</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente ex facilis reprehenderit cumque, ab autem distinctio voluptatum veritatis iure nemo ducimus cum inventore fugiat itaque perferendis tenetur officia tempore dolore.</p>
        </section>
    );
};

export default ArticleDetails;