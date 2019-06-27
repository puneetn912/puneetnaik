import React, { Component } from 'react';

class Home extends Component {
  render() {
    return( 
      <div className="view">
        <div className="content" style={{background:'none'}}>
          <div className="content--inner">
          </div>
        </div>
      
        <div id="particles">
          <div id="intro">
            <h2 style={{fontFamily: '"Syncopate", sans-serif', fontWeight: 10}}>JS Developer&nbsp;<a target="_blank" href="deedy.pdf" style={{color: 'white'}}><img src="https://png.icons8.com/office/40/000000/open-resume.png" height={35} width={35} /></a></h2>
            <hr style={{width: '50%', backgroundColor: '#E83951', borderColor: '#E83951'}} />
            <a href="https://www.linkedin.com/in/puneet-naik-5a53ab122" style={{color: 'white'}}><i className="fab fa-linkedin" style={{fontSize: '2em'}} /></a>
            &nbsp;
            <a href="https://twitter.com/Puneet_Naik" style={{color: 'white'}}><i className="fab fa-twitter" style={{fontSize: '2em'}} /></a>
            &nbsp;
            <a href="https://github.com/puneetn912/puneetnaik" style={{color: 'white'}}><i className="fab fa-github" style={{fontSize: '2em'}} /></a>
            &nbsp;
            <a href="https://medium.com/@#/" style={{color: 'white'}}><i className="fab fa-medium" style={{fontSize: '2em'}} /></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Home
