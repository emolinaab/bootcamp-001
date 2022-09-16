import React, { Component } from 'react'

class Navbar extends Component {
  render() {
    return (
      <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo right">Las delicias</a>
        <ul id="nav-mobile" class="left hide-on-med-and-down">
          <li><a href="sass.html">Hamburguesa</a></li>
          <li><a href="badges.html">Salchipapa</a></li>
          <li><a href="collapsible.html">Perro Caliente</a></li>
        </ul>
      </div>
    </nav>
    )
  }
}

export default Navbar