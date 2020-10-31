import React, { useState, useEffect } from 'react';
import { Table, Button, Row, Col, Container, Form } from 'react-bootstrap';
import './CrudTable.scss';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteById, editById } from '../Api'
import { ModalDelete, ModalEdit, ModalAdd } from './ModalTable';

export const CrudTable = ({ body, header, title, url, nameId, inputs }) => {

    const [showModalEdit, setShowModalEdit] = useState(false);
    const [showModalDelete, setShowModalDelete] = useState(false);
    const [showModalAdd, setShowModalAdd] = useState(false);
    const [item, setItem] = useState({});
    const [items, setItems] = useState([]);
    const [itemsLoading, setItemsLoading] = useState(true);
    let itemsSeleccionados = []
    const handleShowModalEdit = () => setShowModalEdit(true);
    const handleShowModalDelete = () => setShowModalDelete(true);
    const handleShowModalAdd = () => setShowModalAdd(true);

     const handleLoadItems = (item) => {
        item["selected"] = false;
        const itemModificado = item;
        itemsSeleccionados.push(itemModificado);
     }

    const selectItem =  async (item) => {
        setItem(item);
    }

    const handleCheckItem = (idx) => {
        if (itemsLoading === false){
            itemsSeleccionados[idx].selected = !itemsSeleccionados[idx].selected;
            console.log(itemsSeleccionados);

        } else {
            console.log('cargando');
        }
    }

    const deleteItem =  async (item) => {
        const valid = await deleteById(url, item[nameId]);
        if(valid){
            console.log('El item fue eliminado exitosamente');
        } else {
            console.log('Ocurrió un error');
        }
    }

    const getResultsInputs = (inputs, nameId, item) => {
        let countEdit = 0;
        let objeto = {};
        objeto[nameId] = item[nameId];
        inputs.map((input) => {
            if (input.value !== undefined) countEdit += 1;
            if(input.subcolumn === undefined) {
                objeto[input.column] = input.value ? input.value:item[input.column]; 
            }else {
                let objectSubColumn = {}
                objectSubColumn[input.subcolumn] = input.value ? input.value:item[input.column][input.subcolumn];
                objeto[input.column] = objectSubColumn
            }
        })
        if (countEdit > 0){
            return objeto;
        } else {
            return undefined;
        }
    }

    const editObject = async (inputs, nameId, item) => {
        let objeto = getResultsInputs(inputs, nameId, item);
        let valid = false;
        if(objeto !== undefined && objeto !== {}) {
             valid = await editById(url, objeto[nameId], objeto)
        } else {
            alert('Para editar es necesario modificar al menos un parametro');
            return;
        }
        if(valid){
            console.log('Editado correctamente');
        } else {
            console.log('Ha ocurrido un error')
        }
    }



    const resetStatesInputs = () => {
        inputs.map((input) => {
            input.setValue(undefined);
        })
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
        const bodyResult = body.map((item, idx) =>  {
            handleLoadItems(item);
            return (
                <tr key={idx}>
                <td><Form.Check onChange={() => handleCheckItem(idx)} /></td>
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
                        onClick={() => {
                                handleShowModalEdit();
                                resetStatesInputs();
                                selectItem(item);
                            }
                        }
                    /> 
                    <DeleteIcon 
                        style={{color: 'red', cursor: 'pointer'}}
                        onClick={() => { 
                                handleShowModalDelete(); 
                                selectItem(item);
                            }
                        }
                    />
                </td>
            </tr>
            )
        })
        
        return bodyResult;
    };




    
//Return padre
    return (
        <>
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
                                    <th></th>
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
            </Container>
            <ModalEdit show={showModalEdit} setShow={setShowModalEdit} title={title} inputs={inputs} item={item} nameId={nameId} editObject={editObject}  />
            <ModalAdd show={showModalAdd} setShow={setShowModalAdd} title={title} inputs={inputs} />
            <ModalDelete show={showModalDelete} setShow={setShowModalDelete} title={title} deleteItem={deleteItem} item={item} />
        </>
    )
}

export default CrudTable;