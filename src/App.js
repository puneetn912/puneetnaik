import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Transition, TransitionGroup } from 'react-transition-group';
import { play, exit } from './timelines'
import Nav from './Nav'
import Home from './views/Home'
import About from './views/About'
import Author from './views/Author'
import Puneet from './views/Puneet'

class App extends Component {
  componentDidMount(){

      window.particleground(document.getElementById('body'), {
        dotColor: '#5cbdaa',
        lineColor: '#5cbdaa',
        minHeight:'1336px'
      });
      // var intro = document.getElementById('intro');
      // intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
    
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Nav/>
          <Route render={({ location }) => {
            const { pathname, key } = location;

            return (
              <TransitionGroup component={null}>
                <Transition
                  key={key}
                  appear={true}
                  onEnter={(node, appears) => play(pathname, node, appears)}
                  onExit={(node, appears) => exit(node, appears)}
                  timeout={{enter: 750, exit: 150}}
                >
                  <Switch location={location}>
                    <Route exact path="/" component={Home}/>
                    <Route path="/author" component={Author} />
                    <Route path="/about" component={About} />
                    <Route path="/puneet" component={Puneet} />
                  </Switch>
                </Transition>
              </TransitionGroup>
            )
          }}/>
        </div>
      </BrowserRouter>
    )
  }
}
  
  export default App;
