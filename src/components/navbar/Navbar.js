import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,

} from 'reactstrap';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../mountain.svg';

import { gql, useMutation } from '@apollo/client';



const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="dark" dark expand="md" className="shadow p-1 bg-light">
      <NavbarBrand tag={Link} to="/">
        <Logo width="50" />

      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to="/">
              Начало
           </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/culture">
              Култура
           </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/tourism">
              Туризъм
           </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/news">
              Новини
           </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/museums">
              Музеи
           </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/hotels">
              Хотели
           </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/information">
              Информация
           </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/contacts">
              Контакти
           </NavLink>
          </NavItem>
          <NavLink tag={Link} to="/addhotel">
            Добави Хотел
           </NavLink>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Example;