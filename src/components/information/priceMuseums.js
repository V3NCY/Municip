import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const PriceA = (props) => {
  const { className } = props;

  const [modal, setModal] = useState(false);
  const [nestedModal, setNestedModal] = useState(false);
  const [closeAll, setCloseAll] = useState(false);

  const toggle = () => setModal(!modal);
  const toggleNested = () => {
    setNestedModal(!nestedModal);
    setCloseAll(false);
  };
  const toggleAll = () => {
    setNestedModal(!nestedModal);
    setCloseAll(true);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-2">
          <Button color="primary" onClick={toggle}>
            Цени на билетите на музеите
          </Button>
          <Modal
            isOpen={modal}
            toggle={toggle}
            className={className}
            data-dismiss="modal"
            data-toggle="modal"
          >
            <ModalHeader toggle={toggle}>
              Цени на билетите на музеите
            </ModalHeader>
            <ModalBody>
              <img src="https://i.ibb.co/N1Vrj7J/price.jpg" width="100%" />
              <br />
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default PriceA;
