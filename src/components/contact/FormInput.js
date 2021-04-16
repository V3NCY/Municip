import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Card,
  CardBody,
} from "reactstrap";
import React from "react";

const FormInput = (props) => {
  return (
    <div>
      <Card bg="secondary">
        <CardBody>
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Имейл:</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Въведете вашият имейл..."
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Съобщение:</Label>
              <Input
                type="textarea"
                name="text"
                id="exampleText"
                placeholder="Напишете съобщението си тук..."
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleFile">Файл:</Label>
              <Input type="file" name="file" id="exampleFile" />
              <FormText color="muted">Качете снимка...</FormText>
            </FormGroup>
            <FormGroup className="d-flex justify-content-end">
              <Button color="primary">Изпрати</Button>
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default FormInput;
