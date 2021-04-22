import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,

} from 'reactstrap';
import { FormControl } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../mountain.svg';
import { useMutation } from '@apollo/client';
import UserMenu from "../user/menu";
import { gql } from '@apollo/client';


const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;


const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="dark" dark expand="md" className="shadow p-1 bg-light">
      <NavbarBrand tag={Link} to="/" className="ml-2">
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
        <UserMenu />
        <Form inline>
          <FormControl type="text" placeholder="Търси..." className="mr-sm-2" />
          <Button variant="primary" className="mr-2" color="primary">Търси</Button>
        </Form>
      </Collapse>
    </Navbar>
  );
}

export default Example;
