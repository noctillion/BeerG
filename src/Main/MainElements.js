import styled from "styled-components"

export const Wrapper = styled.div`
width: 100%;
min-height: 100vh;
background-color:brown;
border: 4px solid white;
border-radius: 10px;
`

export const Welcome = styled.div`
    justify-content:center;

`


export const DrinkS = styled.img`

 line-height: 100px;
 vertical-align: middle;
 border:none;
 width:50px;
 height: 60px;


 -webkit-animation-name: spin;
  -webkit-animation-duration: 2000ms;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
  -moz-animation-name: spin;
  -moz-animation-duration: 2000ms;
  -moz-animation-iteration-count: infinite;
  -moz-animation-timing-function: linear;
  -ms-animation-name: spin;
  -ms-animation-duration: 2000ms;
  -ms-animation-iteration-count: infinite;
  -ms-animation-timing-function: linear;
  animation-name: spin;
  animation-duration: 2000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@-ms-keyframes spin {
  from {
    -ms-transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
  }
}

@-moz-keyframes spin {
  from {
    -moz-transform: rotate(0deg);
  }
  to {
    -moz-transform: rotate(360deg);
  }
}

@-webkit-keyframes spin {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  } `


export const Drink = styled.img`
 border:none;
 width:150px;
 height: 250px;


-webkit-animation: breathing 5s ease-out infinite normal;
    animation: breathing 5s ease-out infinite normal;
 


@-webkit-keyframes breathing {
  0% {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }

  25% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  60% {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }

  100% {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
}

@keyframes breathing {
  0% {
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
  }

  25% {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }

  60% {
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
  }

  100% {
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
  }}
`
export const Container = styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;

`

export const Parrag = styled.div`
max-width:80vh;
min-height:fit-content ;
margin-left:20px;
text-align:center;
align-items: center;
justify-content: center;
line-height: 1.5;


`

export const IntDiv= styled.div`
margin-top:50px;
margin-bottom:50px;

`
export const InpCont = styled.div`
display:flex;
padding-top:50px;
`
export const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content:center;
  border-radius: 3px;
  width: 70px;
  height:40px;
  background: gray;
  color: white;
  border: 2px solid white;
  &:hover{
    background-color:yellowgreen;
    color:black;
    cursor: pointer;
  }

;


`
export const InpTxt = styled.input`
width: 300px;
height: 40px;
margin-right:2px;
border-radius: 3px;
`
export const ParragCont =styled.div`
background-color:goldenrod;
padding-left:30px;
padding-right:30px;
padding-top:5px;
padding-bottom:5px;
max-width: 78vh;
text-align:center;
`

export const Footer = styled.div`
display:flex;
justify-content:space-between;
height:50px ;
position: fixed;
left: 0;
bottom: 0;
width: 100%;
color: white;
font-size:0.6rem;
text-align: center;
background-color:brown;
border-bottom: 4px solid white;
border-left: 4px solid white;
border-right:4px solid white;
border-bottom-left-radius:10px;
border-bottom-right-radius:10px;

`

export const FootDiv = styled.div`

width:auto;
margin-top:10px;
margin-left:5px;
margin-right:5px;

`
