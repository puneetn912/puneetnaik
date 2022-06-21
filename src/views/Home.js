import React, { Component } from 'react';
import Footer from "./Footer";

class Home extends Component {
  render() {

    return( 
		<div className="view">
		    <div className="content" style={{background:'none',height:10}}>
		        <div className="content--inner">

		        </div>
		    </div>
		    <div id="particles">
		        <div id="intro" style={{marginTop: -99.5}}>
		            <h2 style={{fontFamily: '"Syncopate", sans-serif', fontWeight: 10}}>JS Developer&nbsp;<a target="_blank" href="https://docs.google.com/document/d/e/2PACX-1vQxpeNU6S5E5ToxClpEiZDopQh-1CKi5P9cOLPzyFC4-JqNnIN3srtjiqGMCnI2zCrSPdgWT3Jgpqhw/pub" style={{color: 'white'}}><img src="/assets/cv_PNG30.png" height={35} width={35} /></a></h2>
		            <hr style={{width: '50%', backgroundColor: '#E83951', borderColor: '#E83951'}} />
		            <a href="https://www.linkedin.com/in/puneet-naik-5a53ab122" style={{color: 'white'}}><i className="fab fa-linkedin" style={{fontSize: '2em'}} /></a>
		            &nbsp;
		            <a href="https://github.com/puneetn912/puneetnaik" style={{color: 'white'}}><i className="fab fa-github" style={{fontSize: '2em'}} /></a>
		            &nbsp;
		            {/* <Footer /> */}
		        </div>
		    </div>
			

		</div>
    );
  }
}

export default Home
