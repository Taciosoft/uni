import React, { Component } from 'react';

class Navbar extends Component{
    render(){
        return(
            <div>
           <nav className="navbar is-light is-fixed-top" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                    <img src="https://www.evolutionofwork.net/images/logo2.png"/>
                    </a>

                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    </a>
                </div>

  <div class="navbar-end">
      <div class="navbar-item">
       
          <p class="control">
          <a class="button is-link is-outlined">TH</a>
          </p>
          <a>|</a>
          <p class="control">
          <a class="button is-link is-outlined">EN</a>
          </p>
        
      </div>
    </div>

                </nav>
            </div>
        )
    }
}
export default Navbar



