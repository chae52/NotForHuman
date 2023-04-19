import styled from "styled-components";
import Bell from "./Bell.png"
import Comment from "./comment.png";
import Alarm from "./MagnifyingGlass.png";

const Wrapper = styled.div`
    width: 100vw;
    height: 6.6666vh;
    border-bottom: 1px solid #C3C3C3;
    display: flex;
    position: relative;
    background: #FFFFFF;
    line-height: 6.66666vh;
    
`;

const Title = styled.div`
    margin-left: 12.5vw;
    width: 13.0208vw;
    height: 2.22222vh;
    max-width: 13.0208vw;
    font-weight: 600;
    font-size: 1.25vw;
`;

const Icons = styled.div`
    img {
        max-width: 100vw;
        max-height: 100vh;
    }

    right : 0;
    margin-right : 16.6vw;
    display: flex;
    position : absolute;
    top: 50%;
    transform: translate(0, -50%);

  .bell,
  .alarm,
  .comment {
      width : 28px;
      height : 28px;
    margin-right: 1.4vw;
  }

  .bell:hover,
  .alarm:hover,
  .comment:hover{
    cursor: grab;
  }

`;

const Header = () => {
    return <Wrapper>
        <Title>Not For Human</Title>
        <Icons>
            <img className="bell" src={Bell}/>
            <img className="alarm" src={Alarm}/>
            <img className="comment" src={Comment}/>
        </Icons>
    </Wrapper>
}

export default Header;