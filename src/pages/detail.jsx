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
            contents: "Lorem"
        },
        {
            id: 2,
            title: "world!",
            writer: "Dent",
            image: "b.jfif",
            contents: "Ipsum"
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
                            <a>제목 { post[id].title }</a>
                        </p>
                    </span>
    
                    <span className="Writer">
                        <p>
                            <a>작성자 {post[id].writer}</a>
                        </p>
                    </span>
                </div>
                <div className="main">
                    <span className="image">
                        <img src={require("./img/" + post[id].image)} />
                    </span>

                    <span className="Contents">
                        <p>
                            <a>내용 { post[id].contents }</a>
                        </p>
                    </span>
                </div>
            </body>
        </html>

    );
}

export default Detail