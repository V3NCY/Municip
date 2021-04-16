import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const PriceB = (props) => {
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
      <div className="row mt-2">
        <div className="col-xs-2">
          <Button color="primary" onClick={toggle}>
            Цена на аквапарк - Копривщица
          </Button>
          <Modal isOpen={modal} toggle={toggle} className={className}>
            <ModalHeader toggle={toggle}>
              Цена на аквапарк - Копривщица
            </ModalHeader>
            <ModalBody>
              <img src="https://i.ibb.co/jRZ1C6X/image.jpg" width="100%" />
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

export default PriceB;
