import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="view">
        <div className="content" style={{display:"none"}}>
          <div className="content--inner">
            
          </div>
        </div>
          {/* <h2 style={{fontFamily: '"Syncopate", sans-serif', fontWeight: 10,fontSize:38}}></h2>
          <hr style={{width: '50%', backgroundColor: '#E83951', borderColor: '#E83951'}} /> */}
          {/*<p>Something big </p>*/}
          {/* <embed src="https://docs.google.com/document/d/e/2PACX-1vTVfZ9bsMEDQ-sV6r4475SGacZ7MizBGcjxn29bGN5IvLgJkydiHs4HYqiy5kgscLfl1_lxPh-kUBmd/pub" width="800px" height="100%" /> */}
          <div id="iframeDiv" align='center' style={{marginLeft:"15%"}}>
          <iframe src="https://docs.google.com/document/d/e/2PACX-1vQxpeNU6S5E5ToxClpEiZDopQh-1CKi5P9cOLPzyFC4-JqNnIN3srtjiqGMCnI2zCrSPdgWT3Jgpqhw/pub?embedded=true" style={{"width": "100%","height": "7000px","border": "none"}} scrolling="no"></iframe>
          </div>


          {/* https://docs.google.com/document/d/e/2PACX-1vQxpeNU6S5E5ToxClpEiZDopQh-1CKi5P9cOLPzyFC4-JqNnIN3srtjiqGMCnI2zCrSPdgWT3Jgpqhw/pub */}
        </div>
    );
  }
}

export default About
