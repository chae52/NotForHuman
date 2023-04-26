import Header from "../components/Header";
import { useParams } from 'react-router-dom';
import dummyData from './data.jsx'
import "./detail.css"

const Detail = () => {


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
                            <a>제목 { dummyData[id].title }</a>
                        </p>
                    </span>
    
                    <span className="Writer">
                        <p>
                            <a>작성자 {dummyData[id].writer}</a>
                        </p>
                    </span>
                </div>
                <div className="main">
                    <span className="image">
                        <img src={dummyData[id].image} />
                    </span>

                    <span className="Contents">
                        <p>
                            <a>내용 { dummyData[id].content }</a>
                        </p>
                    </span>
                </div>
            </body>
        </html>

    );
}

export default Detail