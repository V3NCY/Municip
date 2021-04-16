import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Modal,
  ModalHeader,
  ModalBody,
  Input,
  Label,
  FormGroup
} from 'reactstrap';
import {
  Form,
  FormControl,
  Button
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../mountain.svg';

import { gql, useMutation } from '@apollo/client';

const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const toggle = () => setIsOpen(!isOpen);

  const [login, { data }] = useMutation(LOGIN);

  const onLogin = () => {
    const loginData = {
      variables: {
        email,
        password,
      }
    }

    login(loginData).then(response => {
      localStorage.setItem('token', response.data.login)
    });

  }

  const [modal, setModal] = useState(false);

  const toggleModal = () => setModal(!modal);

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
        <Button onClick={() => {
          setModal(true)
        }} className="mr-2">Вписване</Button>
        <Form inline>
          <FormControl type="text" placeholder="Търси..." className="mr-sm-2" />
          <Button variant="primary">Търси</Button>
        </Form>
      </Collapse>
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Вписване</ModalHeader>
        <ModalBody>
          <Form onSubmit={e => {
            e.preventDefault();
            onLogin()
          }}>
            <FormGroup>
              <Label for="email">E-mail:</Label>
              <Input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Вашият и-мейл..." />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password:</Label>
              <Input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Вашата парола..." />
            </FormGroup>
            <Button type="submit">Влез</Button>
          </Form>
        </ModalBody>
      </Modal>
    </Navbar>
  );
}

export default Example;