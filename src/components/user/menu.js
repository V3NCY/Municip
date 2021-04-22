import React, { useState, useEffect } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Input,
    Form,
    FormGroup,
    Label,
} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import { gql, useMutation, useLazyQuery } from '@apollo/client';

const LOGIN = gql`
mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password)
}
`;

const LOGOUT = gql`
mutation Logout {
  logout {
    _id
  }
}
`;

const GET_CURRENT_USER = gql`
query getCurrentUser {
  currentUser {
    _id
    email
  }
}
`;

const UserMenu = (props) => {

    useEffect(() => {
        getCurrentUser();
    }, []);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [login, { input }] = useMutation(LOGIN);
    const [logout] = useMutation(LOGOUT);

    const [getCurrentUser, queryInput] = useLazyQuery(GET_CURRENT_USER);

    const onLogin = () => {
        const loginInput = {
            variables: {
                email,
                password,
            }
        }

        login(loginInput).then(response => {

            localStorage.setItem('token', response.input.login);
            getCurrentUser();
            setModal(false);
        });
    }

    const [modal, setModal] = useState(false);

    const toggleModal = () => setModal(!modal);

    const onLogout = () => {
        logout();
        localStorage.setItem('token', "");
        getCurrentUser();
    }
    const getUserMenu = () => {
        if (queryInput.loading || !queryInput.called) {
            return null;
        }
        if (queryInput.input && queryInput.input.currentUser) {
            return <div className="d-flex align-items-center">
                <FontAwesomeIcon icon={faUser} />
                <div className="mx-2">{queryInput.input.currentUser.email}</div>
                <Button size="sm" onClick={() => {
                    onLogout();
                }} color="danger">Logout</Button>
            </div>


        }

        return <Button onClick={() => {
            setModal(true)
        }} className="mr-2" size="md" color="primary">Login</Button>
    }


    return (
        <>
            { getUserMenu()}
            <Modal isOpen={modal} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>Вписване</ModalHeader>
                <ModalBody>
                    <Form onSubmit={e => {
                        e.preventDefault();
                        onLogin()
                    }}>
                        <FormGroup>
                            <Label for="email">И-мейл:</Label>
                            <Input
                                type="email"
                                name="email"
                                id="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                placeholder="Your e-mail..." />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Парола:</Label>
                            <Input
                                type="password"
                                name="password"
                                id="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                placeholder="Your password..." />
                        </FormGroup>
                        <Button type="submit" color="primary">Login</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </>
    );
}

export default UserMenu;