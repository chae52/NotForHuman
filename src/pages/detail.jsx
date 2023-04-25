import Header from "../components/Header";
import { useParams } from 'react-router-dom';
import "./detail.css"

const Detail = () => {

    let post = [
        {
            id: 1,
            title: "Hello",
            writer: "Arthur",
            image : "a.jpg",
            description: "Lorem"
        },
        {
            id: 2,
            title: "world!",
            writer: "Dent",
            image: "b.jfif",
            description: "Ipsum"
        }
    ];

    let { id } = useParams();

    return (
        <html>
            <head>
                <meta charset="UTF-8" />
            </head>
            <body>
                <Header />
                <div className="cover">

                    <span className="Title">
                        <p>
                            <a>제목 : { post[id].title }</a>
                        </p>
                    </span>
    
                    <span className="Writer">
                        <p>
                            <a>작성자 : { post[id].writer }</a>
                        </p>
                    </span>
                </div>
                <div className="main">
                    <span className="Image">
                        <img src={ require("./img/" + post[id].image) } />
                    </span>

                    <span className="Description">
                        <p>
                            <a>{ post[id].description }</a>
                        </p>
                    </span>
                </div>
            </body>
        </html>

    );
}

export default Detail