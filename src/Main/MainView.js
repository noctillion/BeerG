import React, { Fragment, useRef, useEffect, useState} from 'react'
import Beer from '../img/95.svg'
import Star from '../img/azu.svg'

import {Wrapper, Container, Welcome, Drink, ParragCont, Parrag, InpCont, InpTxt, Button, IntDiv, DrinkS, FootDiv, Footer} from './MainElements'

function MainView() {
  const titleRef = useRef();
  const cursRef = useRef();
  const [loaded, setLoaded] = useState(false);
  const [search, setSearch] = useState('');
  const [resultsF, setResultsF]=useState(null)
  const [win, setWin]=useState(null)
  

  const uptext = ` Welcome to the npm drinking game
  The rules are simple. Write an english word in the input 
  and if it exists in npm you must drink... Good luck!`

  const temText = ` |`


 const retrieve = async (frmdetails)=>{
  let response = await fetch(`https://api.npms.io/v2/search?q=${frmdetails}`);
  let data = await response.json()
  if(data.results[0] !== undefined){
    setResultsF(data.results[0].package)
    setWin(null)
  }else{
    setResultsF(null)
    setWin('win')
        }
 }


  const submitValue = () => {
    const frmdetails = {
        'Search' : search
    }
    if(frmdetails.Search.length === 0){
      alert('Please fill the field!!')
    }else{
      retrieve(frmdetails.Search)
      setSearch('')
    }
    
    
}

    const stril = (str, strT)=>{
    const lest = str.length;
    const mest = strT.length;

    let newArray = str.split('');
    const temp = []
    
if(mest > 0){
  
setInterval(function timer() {
  cursRef.current.textContent = ' ';
  setTimeout(function timer(){
    cursRef.current.textContent = '|';
  }, 100)
}, 1* 1000);
}


    for (let i = 0; i < lest; i++) {

      setTimeout(function timer() {
        const lett = newArray[i]
        temp.push(lett)
        titleRef.current.textContent = temp.join('');
 
        // for searching button
        if(temp.length === lest){
          setLoaded(true)
        }
      }, i * 40);
    }

    setLoaded(false)
  }


  useEffect(function () {
    stril(uptext, temText )
    
  }, [uptext, temText]);


  return (
    <Fragment>
      <Wrapper> 
      <Container>
        <Welcome>
        <Drink src={Beer} alt=''/>
        </Welcome>
        <ParragCont style={{position:'relative'}}>
        <Parrag className="title" ref={titleRef} style={{display:'inline'}}></Parrag>
        <Parrag className="title" ref={cursRef} style={{display:'inline', minWidth:'5px', position:'absolute', textAlign:'left'}}></Parrag>
        </ParragCont>
        
        {loaded ? (
          <InpCont>
              <InpTxt value={search} onChange={e => setSearch(e.target.value)} />
              <Button onClick={submitValue}> GO!</Button> 
          </InpCont>): null}

{resultsF ? (
  <Parrag>
    <IntDiv>Oh no! It Exists</IntDiv>
    <a style={{width:"100vh"}} rel="noopener noreferrer" target="_blank" href={resultsF.links.npm} >{resultsF.description}</a>
    <IntDiv>Drink up<DrinkS src={Beer} alt=''/></IntDiv>
  </Parrag>) :''}

{win ? (
  <Parrag>
      <Drink style={{ width:"200px", height: "200px"}} src={Star} alt=''/>
      <FootDiv>Well done!!!</FootDiv>
  </Parrag>) :'' }
      </Container>

      <Footer>
          <FootDiv>Not affiliated with NPM</FootDiv>
          <FootDiv>2021/MIT Licence/</FootDiv>
          <FootDiv>Made by Julian Martinez-H</FootDiv>
      </Footer>
      
      </Wrapper>
      
      
    </Fragment>
  )
}

export default MainView
