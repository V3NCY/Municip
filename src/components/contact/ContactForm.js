import React from 'react';
import {
  Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';

const ContactForm = (props) => {
  
  return (
    
      <Card bg="secondary">
        <CardBody>
          <CardTitle tag="h5">Община Копривщица</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Контакти</CardSubtitle>
          <div className="row">
            <div className="col">
                <img width="100%" src="https://koprivshtitsa-bg.com/images/articles/36/thmb/snimka_sgrada-340h.jpg" alt="Card image cap" />
            </div>
            <div className="col">
                <CardText>
                  <div>
                    Адрес:
                  </div>
                  <div>
                    гр. Копривщица,
                  </div>
                  <div>
                    ПК 2077,
                  </div>
                  <div>
                    ул. "Любен Каравелов" № 16
                  </div>
                </CardText>
                <CardText>E-mail: info@koprivshtitsa-bg.com</CardText>
                <CardText>телефон: 07185 xxxx</CardText>
            </div>
          </div>

        </CardBody>
      </Card>
  );
};

export default ContactForm;