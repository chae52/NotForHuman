import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
   #moveButton{
    position:absolute;
    z-index:30;
    background-image: url('https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FQv7N2%2FbtscCBBQNeW%2F8BjRfYT0BmxHkNdXmpwgaK%2Fimg.png');
    width:200px;
    height:100px;
    margin-left:1000px;
    margin-top:50px;
   }
   body{
     margin : 0;
     font-family: 'Pretendard';
   };
   h1{
    font-size:90px;
    display: inline;
    position:absolute;
    z-index:5;
    margin-left:540px;
    margin-top:130px;
   }
   #background{
      height: 250px;
      width: 100%;
      background-color: #FFDC98;
      display:inline-block;
      position:absolute;
      z-index:1;
   }
   .profile_container{
      overflow: hidden;
      width:300px;
      height:300px;
      border-radius:70%;
      position: absolute;
      margin-left:100px;      
      margin-top: 50px;
      z-index:2;
   }

   #profile{
      background-image: url('https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg');
      background-size: 100% || contain || cover;
      width:300px;
      height:300px;
      background-position: center center;
      position: absolute;
   }
   #b{
    position:absolute;
    z-index:11;
   }

   #newbackground{
      height: 250px;
      width: 100%;
      background-color: #B3FF98;
      display:inline-block;
      position:absolute;
      z-index:1;
   }

  #newprofile{
        background-image: url('https://newsimg.sedaily.com/2019/04/06/1VHREQ5SU7_1.jpg');
        background-size: 100% || contain || cover;
        width:300px;
        height:300px;
        background-position: center center;
        position: absolute;
     }

  #newmoveButton{
    position:absolute;
    z-index:30;
    background-image: url('https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FGxEoL%2FbtscGItzMZZ%2FJjlJGmvCPY8bdjge7NMQDK%2Fimg.png');
    width:200px;
    height:100px;
    margin-left:1000px;
    margin-top:50px;
   }


 }
`;

