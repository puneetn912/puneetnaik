import React from 'react';
import { NavLink } from 'react-router-dom';

const routes = [
  { to: '/', label: 'Puneet Naik' },
  { to: '/about', label: 'About' },
  { to: '/author', label: 'Projects' },
  { to: '/puneet', label: 'More' }
];

const Nav = () => {
  const links = routes.map(({ to, label }) => {
    return <NavLink strict exact to={to} key={to}>{label}</NavLink>}
  )

  return <nav className="ml24">{ links }</nav>;
}

export default Nav
