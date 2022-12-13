import React, { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(!showModal);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button primary onClick={handleClose}>
        I accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept.</p>
    </Modal>
  );

  return (
    <div>
      <Button onClick={handleClick} primary>
        {showModal ? "Close Modal" : "Open Modal"}
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt ad
        odio voluptatum perspiciatis expedita consequuntur inventore doloremque,
        accusamus minus sequi impedit ipsam distinctio! Itaque provident soluta
        atque commodi, dolorum ullam! Ipsa doloribus sequi minus consequuntur
        natus possimus odio repudiandae a aperiam repellendus quaerat vel vero,
        excepturi tempore dolorum voluptatibus eos magnam provident voluptatem,
        rerum, voluptate qui vitae quo cupiditate. Enim.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt ad
        odio voluptatum perspiciatis expedita consequuntur inventore doloremque,
        accusamus minus sequi impedit ipsam distinctio! Itaque provident soluta
        atque commodi, dolorum ullam! Ipsa doloribus sequi minus consequuntur
        natus possimus odio repudiandae a aperiam repellendus quaerat vel vero,
        excepturi tempore dolorum voluptatibus eos magnam provident voluptatem,
        rerum, voluptate qui vitae quo cupiditate. Enim.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt ad
        odio voluptatum perspiciatis expedita consequuntur inventore doloremque,
        accusamus minus sequi impedit ipsam distinctio! Itaque provident soluta
        atque commodi, dolorum ullam! Ipsa doloribus sequi minus consequuntur
        natus possimus odio repudiandae a aperiam repellendus quaerat vel vero,
        excepturi tempore dolorum voluptatibus eos magnam provident voluptatem,
        rerum, voluptate qui vitae quo cupiditate. Enim.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt ad
        odio voluptatum perspiciatis expedita consequuntur inventore doloremque,
        accusamus minus sequi impedit ipsam distinctio! Itaque provident soluta
        atque commodi, dolorum ullam! Ipsa doloribus sequi minus consequuntur
        natus possimus odio repudiandae a aperiam repellendus quaerat vel vero,
        excepturi tempore dolorum voluptatibus eos magnam provident voluptatem,
        rerum, voluptate qui vitae quo cupiditate. Enim.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt ad
        odio voluptatum perspiciatis expedita consequuntur inventore doloremque,
        accusamus minus sequi impedit ipsam distinctio! Itaque provident soluta
        atque commodi, dolorum ullam! Ipsa doloribus sequi minus consequuntur
        natus possimus odio repudiandae a aperiam repellendus quaerat vel vero,
        excepturi tempore dolorum voluptatibus eos magnam provident voluptatem,
        rerum, voluptate qui vitae quo cupiditate. Enim.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt ad
        odio voluptatum perspiciatis expedita consequuntur inventore doloremque,
        accusamus minus sequi impedit ipsam distinctio! Itaque provident soluta
        atque commodi, dolorum ullam! Ipsa doloribus sequi minus consequuntur
        natus possimus odio repudiandae a aperiam repellendus quaerat vel vero,
        excepturi tempore dolorum voluptatibus eos magnam provident voluptatem,
        rerum, voluptate qui vitae quo cupiditate. Enim.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt ad
        odio voluptatum perspiciatis expedita consequuntur inventore doloremque,
        accusamus minus sequi impedit ipsam distinctio! Itaque provident soluta
        atque commodi, dolorum ullam! Ipsa doloribus sequi minus consequuntur
        natus possimus odio repudiandae a aperiam repellendus quaerat vel vero,
        excepturi tempore dolorum voluptatibus eos magnam provident voluptatem,
        rerum, voluptate qui vitae quo cupiditate. Enim.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt ad
        odio voluptatum perspiciatis expedita consequuntur inventore doloremque,
        accusamus minus sequi impedit ipsam distinctio! Itaque provident soluta
        atque commodi, dolorum ullam! Ipsa doloribus sequi minus consequuntur
        natus possimus odio repudiandae a aperiam repellendus quaerat vel vero,
        excepturi tempore dolorum voluptatibus eos magnam provident voluptatem,
        rerum, voluptate qui vitae quo cupiditate. Enim.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt ad
        odio voluptatum perspiciatis expedita consequuntur inventore doloremque,
        accusamus minus sequi impedit ipsam distinctio! Itaque provident soluta
        atque commodi, dolorum ullam! Ipsa doloribus sequi minus consequuntur
        natus possimus odio repudiandae a aperiam repellendus quaerat vel vero,
        excepturi tempore dolorum voluptatibus eos magnam provident voluptatem,
        rerum, voluptate qui vitae quo cupiditate. Enim.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt ad
        odio voluptatum perspiciatis expedita consequuntur inventore doloremque,
        accusamus minus sequi impedit ipsam distinctio! Itaque provident soluta
        atque commodi, dolorum ullam! Ipsa doloribus sequi minus consequuntur
        natus possimus odio repudiandae a aperiam repellendus quaerat vel vero,
        excepturi tempore dolorum voluptatibus eos magnam provident voluptatem,
        rerum, voluptate qui vitae quo cupiditate. Enim.
      </p>
    </div>
  );
}

export default ModalPage;
