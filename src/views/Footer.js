import React, { Component } from 'react';

class Footer extends Component {
  	render() {
  	  	//Adding Bounce effect
		    var heading = document.getElementById('icon-bounce'),
		    icon = document.getElementById('icon-bounce1'),
		    icon1 = document.getElementById('icon-bounce2'),
		    icon2 = document.getElementById('icon-bounce3'),
		    icon3 = document.getElementById('icon-bounce4'),
		    icon4 = document.getElementById('icon-bounce5'),
		    icon5 = document.getElementById('icon-bounce6'),
		    icon6 = document.getElementById('icon-bounce7');

		//Functions to the bounce effect..
		    function bounce() {
		        heading.classList.add('animated','bounce');
		    }
		    function bounce2() {
		        icon.classList.add('animated','bounce');
		    }
		    function bounce3() {
		        icon1.classList.add('animated','bounce');
		    }
		    function bounce4() {
		        icon2.classList.add('animated','bounce');
		    }
		    function bounce5() {
		        icon3.classList.add('animated','bounce');
		    }
		    function bounce6() {
		        icon4.classList.add('animated','bounce');
		    }
		    function bounce7() {
		        icon5.classList.add('animated','bounce');
		    }
		    function bounce8() {
		        icon6.classList.add('animated','bounce');
		    }

		// Removing bouncing class/animation
			function removeBounce1() {
			    heading.classList.remove('animated','bounce');
			}
			function removeBounce2() {
			    icon.classList.remove('animated','bounce');
			}
			function removeBounce3() {
			    icon1.classList.remove('animated','bounce');
			}
			function removeBounce4() {
			    icon2.classList.remove('animated','bounce');
			}
			function removeBounce5() {
			    icon3.classList.remove('animated','bounce');
			}
			function removeBounce6() {
			    icon4.classList.remove('animated','bounce');
			}
			function removeBounce7() {
			    icon5.classList.remove('animated','bounce');
			}
			function removeBounce8() {
			    icon6.classList.remove('animated','bounce');
			}
		return (
			<footer className="animated bounceInUp">
			    <div className="tooltip">
			        <span style={{color: 'royalblue'}}>
			        <i className="fas fa-folder icon-settings" onclick="bounce(); setTimeout(removeBounce1, 1200)" id="icon-bounce" />
			        <span className="tooltiptext">Files</span>
			        </span>
			    </div>
			    <div className="tooltip">
			        <span style={{color: 'royalblue'}}>
			        <i className="fab fa-safari icon-settings" onclick="bounce2(); setTimeout(removeBounce2, 1200)" id="icon-bounce1" />
			        <span className="tooltiptext">Safari</span>
			        </span>
			    </div>
			    <div className="tooltip">
			        <span style={{color: 'hsl(229, 10%, 32%)'}}>
			        <i className="fas fa-cog icon-settings" onclick="bounce3(); setTimeout(removeBounce3, 1200)" id="icon-bounce2" />
			        <span className="tooltiptext">Settings</span>
			        </span>
			    </div>
			    <div className="tooltip">
			        <span style={{color: 'palevioletred'}}>
			        <i className="fab fa-itunes icon-settings" onclick="bounce4(); setTimeout(removeBounce4, 1200)" id="icon-bounce3" />
			        <span className="tooltiptext">Itunes</span>
			        </span>
			    </div>
			    <div className="tooltip">
			        <span style={{color: '#000000'}}>
			        <i className="fas fa-camera icon-settings" onclick="bounce5(); setTimeout(removeBounce5, 1200)" id="icon-bounce4" />
			        <span className="tooltiptext">Camera</span>
			        </span>
			    </div>
			    <div className="tooltip">
			        <span style={{color: '#35ec5d'}}>
			        <i className="fas fa-comment icon-settings" onclick="bounce6(); setTimeout(removeBounce6, 1200)" id="icon-bounce5" />
			        <span className="tooltiptext">Message</span>
			        </span>
			    </div>
			    <div className="tooltip">
			        <span style={{color: '#a0a571'}}>
			        <i className="fas fa-address-book icon-settings" onclick="bounce7(); setTimeout(removeBounce7, 1200)" id="icon-bounce6" />
			        <span className="tooltiptext">Contacts</span>
			        </span>
			    </div>
			    <div className="tooltip">
			        <span style={{color: 'royalblue'}}>
			        <i className="fas fa-envelope icon-settings" onclick="bounce8(); setTimeout(removeBounce8, 1200)" id="icon-bounce7" />
			        <span className="tooltiptext">Mail</span>
			        </span>
			    </div>
			</footer>
	    );
	}
}

export default Footer
