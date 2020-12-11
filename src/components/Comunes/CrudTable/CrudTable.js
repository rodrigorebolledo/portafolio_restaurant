import React, { useState, useEffect } from 'react';
import { Table, Button, Row, Col, Container, Form } from 'react-bootstrap';
import './CrudTable.scss';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { addElment, deleteById, editById, apiGetElements } from '../../Comunes/Api';
import { ModalDelete, ModalEdit, ModalAdd } from './ModalTable';

export const CrudTable = ({ items, setItems, header, title, url, nameId, inputs, apiSetStateFromUrl, handleReset, editar, eliminar, agregar, excepciones }) => {

    const [showModalEdit, setShowModalEdit] = useState(false);
    const [showModalDelete, setShowModalDelete] = useState(false);
    const [showModalAdd, setShowModalAdd] = useState(false);
    const [item, setItem] = useState({});
    const [itemsLoading, setItemsLoading] = useState(true);
    const handleShowModalEdit = () => setShowModalEdit(true);
    const handleShowModalDelete = () => setShowModalDelete(true);
    const handleShowModalAdd = () => setShowModalAdd(true);

    const handleLoadItems = () => {
        items.map((item) => {
            item.selected = false;
        })

        setItemsLoading(false);
    }


    useEffect(() => {
        if (items.length) {
            handleLoadItems();
        }
        return;


    }, [])

    const selectItem = async (item) => {
        setItem(item);
    }

    const handleCheckItem = (idx) => {
        if (itemsLoading === false) {
            items[idx].selected = !items[idx].selected;

        } else {
            console.log('cargando');
        }
    }

    const deleteItem = async (item) => {
        const valid = await deleteById(url, item[nameId]);
        if (valid) {
            console.log('El item fue eliminado exitosamente');
            const itemFiltrado = items.filter(i => i[nameId] !== item[nameId])
            setItems(itemFiltrado);
            setItem({});
        } else {
            console.log('Ocurrió un error');
            setItem({});
        }
    }

    const deleteItems = (items) => {
        let idsEliminados = []
        let countDeletes = 0;
        Promise.all(items.map(async (item) => {
            if (item.selected === true) {
                const valid = await deleteById(url, item[nameId]);
                if (valid) {
                    console.log('El item fue eliminado exitosamente.');
                    countDeletes += 1;
                    idsEliminados.push(item[nameId])
                } else {
                    console.log('Ocurrió un error');
                }
            }

        })).then(() => {
            const itemsFiltrados = items.filter(i => !idsEliminados.includes(i[nameId]))
            setItems(itemsFiltrados);
            if (countDeletes === 0) {
                alert('Debes seleccionar al menos un item para eliminar.')
            }
        })
    }


    const getResultsInputs = (inputs, nameId, item, notRequired = 0) => {
        let countEdit = 0;
        let countInputsWithValue = 0;
        let objeto = {};
        if (item !== undefined && nameId !== undefined) {
            objeto[nameId] = item[nameId];
            inputs.map((input) => {
                if (input.value !== undefined) countEdit += 1;
                if (input.subcolumn === undefined) {
                    objeto[input.column] = input.value ? input.value : item[input.column];
                } else {
                    let objectSubColumn = {}
                    objectSubColumn[input.subcolumn] = input.value ? input.value : item[input.column][input.subcolumn];
                    objeto[input.column] = objectSubColumn
                }
            })
            if (countEdit > 0) {
                return objeto;
            } else {
                return undefined;
            }
        } else {
            inputs.map((input) => {
                if (input.value !== undefined) countInputsWithValue += 1;
                if (input.subcolumn === undefined) {
                    objeto[input.column] = input.value ? input.value : '';
                } else {
                    let objectSubColumn = {}
                    objectSubColumn[input.subcolumn] = input.value ? input.value : ''
                    objeto[input.column] = objectSubColumn
                }

            })

            if (countInputsWithValue === (inputs.length - notRequired)) {
                return objeto;
            } else {
                console.log('no es = al input.length - notRequired')
                console.log(countInputsWithValue);
                console.log(inputs.length - notRequired)
                return undefined;

            }
        }

    }

    const editObject = async (inputs, nameId, item) => {
        let objeto = getResultsInputs(inputs, nameId, item);
        let valid = false;
        if (objeto !== undefined && objeto !== {}) {
            valid = await editById(url, objeto[nameId], objeto)
        } else {
            alert('Para editar es necesario modificar al menos un parametro');
            return;
        }
        if (valid) {
            console.log('Editado correctamente');
            handleReset();
            setShowModalEdit(false);
            // window.location.reload(false);
            apiSetStateFromUrl(url, setItems);
        } else {
            console.log('Ha ocurrido un error')
        }
    }

    const addObject = async (inputs) => {
        let objeto = getResultsInputs(inputs);
        console.log(objeto);
        let valid = false;
        if (objeto !== undefined && objeto !== {}) {
            valid = await addElment(url, objeto)
        } else {
            alert('Para agregar es necesario modificar al menos un parametro');
            return;
        }
        if (valid !== false) {
            console.log('Agregado correctamente');
            handleReset();
            setShowModalAdd(false);
            // window.location.reload(false);
            apiSetStateFromUrl(url, setItems);
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
        const keys = Object.keys(items[0]);
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
        const keys = Object.keys(items[0]);
        return items.map((item, idx) => {
            return (
                <tr key={idx}>
                    {eliminar !== false ? (
                        <td><Form.Check onChange={() => handleCheckItem(idx)} /></td>
                    ) : null}
                    {
                        keys.map((key, idx) => {
                            const valor = item[key];
                            if (typeof valor === 'object') {
                                const keysChildren = Object.keys(valor);
                                if (key !== 'usuario') {
                                    if (key === 'orden') {
                                        return (
                                            <td key={idx}>{valor[keysChildren[0]]}</td>
                                        )
                                    } else {
                                        return (
                                            <td key={idx}>{valor[keysChildren[1]]}</td>
                                        )
                                    }
                                } else {
                                    return null
                                }

                            }

                            if (typeof valor !== "boolean" && valor !== undefined) {
                                if (excepciones != undefined) {

                                    return excepciones.map((excepcion) => {
                                        if (excepcion === 'SP') {
                                            if (typeof valor === 'string') {
                                                if (valor.includes('*')) {
                                                    let listaValores = valor.split('*');
                                                    return <td key={idx}>{<ul style={{ overflow: 'hidden', overflowY: 'scroll', overflowX: 'scroll', minHeight: '75px', minWidth: '200px', maxHeight: '75px', maxWidth: '200px' }}>{listaValores.map((valorL) => {
                                                        return (

                                                            <li>{valorL}</li>

                                                        )
                                                    })}</ul>}</td>
                                                } {
                                                    return <td key={idx}>{valor}</td>
                                                }
                                            } else {
                                                return <td key={idx}>{valor}</td>
                                            }
                                        }
                                    })
                                }
                                if (key === "passUsuario") {
                                    return <td key={idx}>********</td>
                                } else {
                                    //SOLUCIÓN TEMPORAL
                                    if (valor === 't') {
                                        return <td key={idx}>Habilitado</td>
                                    } else if (valor === 'f') {
                                        return <td key={idx}>Deshabilitado</td>
                                    } else {
                                        return <td key={idx}>{valor}</td>
                                    }
                                }

                            } else {
                                return null;
                            }


                        })
                    }
                    <td>
                    {editar !== false ? (<EditIcon
                            style={{ color: '#FFC107', cursor: 'pointer' }}
                            onClick={() => {
                                handleShowModalEdit();
                                resetStatesInputs();
                                selectItem(item);
                            }
                            }
                        />) : null}
                        {eliminar !== false ? (<DeleteIcon
                            style={{ color: 'red', cursor: 'pointer' }}
                            onClick={() => {
                                handleShowModalDelete();
                                selectItem(item);
                            }
                            }
                        />) : null}
                    </td>
                </tr>
            )
        })
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
                                    <h2 className="title">  <b>{title}</b></h2>
                                </Col>
                                <Col xs={6}>
                                    {agregar !== false ? (
                                        <Button className="button" variant="success" onClick={() => handleShowModalAdd()}>Agregar</Button>
                                    ) : null}
                                    {eliminar !== false ? (
                                        <Button className="button" variant="danger" onClick={() => handleShowModalDelete()}>Eliminar</Button>
                                    ) : null}
                                </Col>
                            </Row>
                        </div>
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    {eliminar !== false ? (
                                        <th></th>
                                    ) : null}
                                    {header ? <PrintHeader /> : <PrintHeaderByKey />}
                                    {eliminar === false && editar === false ? null: <th>Acciones</th>}
                                </tr>
                            </thead>
                            <tbody>
                                {items.length ? <PrintBody /> : null}
                            </tbody>
                        </Table>
                    </div>
                </div>
                <ModalEdit show={showModalEdit} setShow={setShowModalEdit} title={title} inputs={inputs} item={item} nameId={nameId} editObject={editObject} handleReset={handleReset} />
                <ModalAdd show={showModalAdd} setShow={setShowModalAdd} title={title} inputs={inputs} handleReset={handleReset} addObject={addObject} nameId={nameId} item={item} handleReset={handleReset} />
                <ModalDelete show={showModalDelete} setShow={setShowModalDelete} title={title} deleteItem={deleteItem} deleteItems={deleteItems} item={item} setItem={setItem} items={items} handleReset={handleReset} />
            </Container>

        </>
    )
}

export default CrudTable;