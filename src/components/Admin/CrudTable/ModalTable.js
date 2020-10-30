import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

export const ModalDelete = ({ show, setShow, title, deleteItem, item }) => {
    const handleClose = () => setShow(false);
  
    return (
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
    >
        <Modal.Header closeButton>
    <Modal.Title>Eliminar {title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            ¿Estás seguro?
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancelar
            </Button>
            <Button variant="danger" onClick={() => deleteItem(item)}>Borrar</Button>
        </Modal.Footer>
        </Modal>
    );
}


export const ModalEdit = ({ show, setShow, title, inputs }) => {
    const handleClose = () => setShow(false);
  
    return (
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Agregar {title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <PrintInputs inputs={inputs} />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Cancelar
                </Button>
                <Button variant="success">Editar</Button>
            </Modal.Footer>
            </Modal>
        );
}

export const ModalAdd = ({ show, setShow, title, inputs}) => {


    const handleClose = () => setShow(false);

  
    return (
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
    >
        <Modal.Header closeButton>
            <Modal.Title>Agregar {title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <PrintInputs inputs={inputs} />
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancelar
            </Button>
            <Button variant="success">Agregar</Button>
        </Modal.Footer>
        </Modal>
    );
}



const PrintInputs = ({ inputs }) => {
        return inputs.map((input, idx) => {
            if(input.type === 'select'){
                return (
                    <Form.Group key={idx}>
                        <Form.Label>{input.label}</Form.Label>
                        <Form.Control as="select" value={input.value}  onChange={((e) => input.setValue(e.target.value))}>
                            {input.options.map((option, idx) => (<option key={idx} value={option.value}>{option.nombre}</option>))}
                        </Form.Control>
                    </Form.Group>                    
                )
            } else {
                return(
                    <Form.Group key={idx}>
                        <Form.Label>{input.label}</Form.Label>
                        <Form.Control type={input.type} placeholder={input.placeholder} value={input.value} onChange={(e) => { input.setValue(e.target.value) }} />
                    </Form.Group>               
                )
            }
        })
    //     <Form.Group controlId="exampleForm.ControlInput1">
    //     <Form.Label>Email address</Form.Label>
    //     <Form.Control type="email" placeholder="name@example.com" />
    // </Form.Group>
    // <Form.Group controlId="exampleForm.ControlSelect1">
    //     <Form.Label>Example select</Form.Label>
    //     <Form.Control as="select">
    //     <option>1</option>
    //     <option>2</option>
    //     <option>3</option>
    //     <option>4</option>
    //     <option>5</option>
    //     </Form.Control>
    // </Form.Group>
    // <Form.Group controlId="exampleForm.ControlSelect2">
    //     <Form.Label>Example multiple select</Form.Label>
    //     <Form.Control as="select" multiple>
    //     <option>1</option>
    //     <option>2</option>
    //     <option>3</option>
    //     <option>4</option>
    //     <option>5</option>
    //     </Form.Control>
    // </Form.Group>
    // <Form.Group controlId="exampleForm.ControlTextarea1">
    //     <Form.Label>Example textarea</Form.Label>
    //     <Form.Control as="textarea" rows={3} />
    // </Form.Group>
}