import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { apiGetElements } from '../Api'
export const ModalDelete = ({ show, setShow, title, deleteItem, deleteItems, item, setItem, items }) => {
    const handleClose = _ => {
        setShow(false);
        setItem({});
    }
    const handleDelete = _ => {
        if (JSON.stringify(item) === "{}") {
            deleteItems(items)
            handleClose();
        } else {
            deleteItem(item);
            handleClose();
        }
    }
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
                <Button variant="danger" onClick={() => handleDelete()}>Borrar</Button>
            </Modal.Footer>
        </Modal>
    );
}



// const getResultsInputs = (inputs, nameId, item) => {
//     let objeto = {}
//     objeto[nameId] = item[nameId];
//     inputs.map((input) => {
//         if(input.subcolumn === undefined) {
//             objeto[input.column] = input.value
//         }else {
//             let objectSubColumn = {}
//             objectSubColumn[input.subcolumn] = input.value
//             objeto[input.column] = objectSubColumn
//         }
//     })
//     console.log(objeto);
// }



export const ModalEdit = ({ show, setShow, title, inputs, item, nameId, editObject, handleReset }) => {
    const handleClose = () => {
        setShow(false);
        handleReset();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(item);
        editObject(inputs, nameId, item);
    }

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
                <Form id="form-edit" onSubmit={handleSubmit}>
                    <PrintInputsEdit inputs={inputs} item={item} />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancelar
                </Button>
                <Button form="form-edit" variant="success" type="submit">Editar</Button>
            </Modal.Footer>
        </Modal>
    );
}

export const ModalAdd = ({ show, setShow, title, inputs, handleReset, addObject, item, nameId }) => {


    const handleClose = () => {
        setShow(false);
        handleReset();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addObject(inputs, nameId, item);
    }



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
                <Form id="form-add" onSubmit={handleSubmit}>
                    <PrintInputsAdd inputs={inputs} />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancelar
            </Button>
                <Button form="form-add" variant="success" type="submit">Agregar</Button>
            </Modal.Footer>
        </Modal>
    );
}



const PrintInputsAdd = ({ inputs }) => {

    return inputs.map((input, idx) => {
        if (input.type === 'select') {
            return (
                <Form.Group key={idx}>
                    <Form.Label>{input.label}</Form.Label>
                    <Form.Control as="select" value={input.value} onChange={(e) => input.setValue(e.target.value)}>
                        {input.options.map((option, idx) => (<option key={idx} value={option.value}>{option.nombre}</option>))}
                    </Form.Control>
                </Form.Group>
            )
        } else if (input.type === 'select-bd') {

            return (
                <Form.Group key={idx}>
                    <Form.Label>{input.label}</Form.Label>
                    <Form.Control as="select" value={input.value} onChange={(e) => input.setValue(e.target.value)}>
                        {input.apiResult.map((option, idx) => (<option key={idx} value={option[input.idSelect]}>{option[input.nameSelect]}</option>))}
                    </Form.Control>
                </Form.Group>
            )

        } else {
            return (
                <Form.Group key={idx}>
                    <Form.Label>{input.label}</Form.Label>
                    <Form.Control type={input.type} placeholder={input.placeholder} min={input.min} value={input.value} onChange={(e) => { input.setValue(e.target.value) }} />
                </Form.Group>
            )
        }
    });
}

const PrintInputsEdit = ({ inputs, item }) => {
    return inputs.map((input, idx) => {
        if (input.type === 'select') {
            return (
                <Form.Group key={idx}>
                    <Form.Label>{input.label}</Form.Label>
                    <Form.Control as="select" value={input.value === undefined ? item[input.column][input.subcolumn] !== undefined ? item[input.column][input.subcolumn] : item[input.column] : input.value} onChange={(e) => input.setValue(e.target.value)}>
                        {input.options.map((option, idx) => (<option key={idx} value={option.value}>{option.nombre}</option>))}
                    </Form.Control>
                </Form.Group>
            )
        } else if (input.type === 'select-bd') {
            return (
                <Form.Group key={idx}>
                    <Form.Label>{input.label}</Form.Label>
                    <Form.Control as="select" value={input.value === undefined ? item[input.column][input.subcolumn] !== undefined ? item[input.column][input.subcolumn] : item[input.column] : input.value} onChange={(e) => input.setValue(e.target.value)}>
                        {input.apiResult.map((option, idx) => (<option key={idx} value={option[input.idSelect]}>{option[input.nameSelect]}</option>))}
                    </Form.Control>
                </Form.Group>
            )
        } else {
            return (
                <Form.Group key={idx}>
                    <Form.Label>{input.label}</Form.Label>
                    <Form.Control type={input.type} placeholder={input.placeholder} min={input.min} value={input.value === undefined ? item[input.column] : input.value} onChange={(e) => input.setValue(e.target.value)} />
                </Form.Group>
            )
        }
    });
}


