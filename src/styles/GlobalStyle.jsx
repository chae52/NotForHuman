import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
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
   .background{
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

   .profile{
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
 }
`;

