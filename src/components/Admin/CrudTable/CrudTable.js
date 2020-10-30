import React, { useState } from 'react';
import { Table, Button, Row, Col, Container } from 'react-bootstrap';
import './CrudTable.scss';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteById } from '../Api'
import { ModalDelete, ModalEdit, ModalAdd } from './ModalTable';

export const CrudTable = ({ body, header, title, url, nameId, inputs }) => {

    const [showModalEdit, setShowModalEdit] = useState(false);
    const [showModalDelete, setShowModalDelete] = useState(false);
    const [showModalAdd, setShowModalAdd] = useState(false);
    const [item, setItem] = useState({});
    const [items, setItems] = useState([]);

    const handleShowModalEdit = () => setShowModalEdit(true);
    const handleShowModalDelete = () => setShowModalDelete(true);
    const handleShowModalAdd = () => setShowModalAdd(true);

    const selectItem =  async (item) => {
        setItem(item);
    }

    const deleteItem =  async (item) => {
        const valid = await deleteById(url, item[nameId]);
        if(valid){
            console.log('El item fue eliminado exitosamente');
        } else {
            console.log('Ocurrió un error');
        }
    }

    const PrintHeaderByKey = () => {
        const keys = Object.keys(body[0]);
        return keys.map((key, idx) => (
            <th key={idx}>{key}</th>
        ));
    }

    const PrintHeader = () => (
        header.map((element, idx) => (
            <th key={idx}>{element}</th>
        ))
    );

    const PrintBody = () => {
        const keys = Object.keys(body[0]);
        return body.map((item, idx) => ( 
            <tr key={idx}>
                {
                    keys.map((key, idx) => {
                        const valor = item[key];
                        if( typeof valor === 'object'){
                            const keysChildren = Object.keys(valor);
                            return (
                                <td key={idx}>{valor[keysChildren[1]]}</td>
                            )
                        }

                        return (
                            <td key={idx}>{valor}</td>
                        )

                    })
                }
                <td>
                    <EditIcon 
                        style={{color: '#FFC107', cursor: 'pointer'}}
                        onClick={() => handleShowModalEdit()}
                    /> 
                    <DeleteIcon 
                        style={{color: 'red', cursor: 'pointer'}}
                        onClick={() => { 
                            handleShowModalDelete() 
                            selectItem(item)}}
                    />
                </td>
            </tr>
        ))
        
        };
    

    return (
        <Container>
            <div className="table-responsive">
                <div className="table-wrapper">
                    <div className="table-title">
                        <Row className="align-content-around">
                            <Col xs={6}>
                                <h2 className="title"> Administrar <b>{title}</b></h2>
                            </Col>
                            <Col xs={6}>
                                <Button className="button" variant="success" onClick={() => handleShowModalAdd()}>Agregar</Button>
                                <Button className="button" variant="danger" onClick={() => handleShowModalDelete()}>Eliminar</Button>
                            </Col>
                        </Row>
                    </div>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                { header ? <PrintHeader /> : <PrintHeaderByKey />}
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            { body ? <PrintBody /> : null }
                        </tbody>
                    </Table>
                </div>
            </div>
            <ModalEdit show={showModalEdit} setShow={setShowModalEdit} title={title} inputs={inputs} />
            <ModalAdd show={showModalAdd} setShow={setShowModalAdd} title={title} inputs={inputs} />
            <ModalDelete show={showModalDelete} setShow={setShowModalDelete} title={title} deleteItem={deleteItem} item={item} />
        </Container>
    )
}

export default CrudTable;