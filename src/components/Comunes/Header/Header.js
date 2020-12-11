import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Badge, Button, Form } from 'react-bootstrap';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { apiGetElements, addElment } from '../../Comunes/Api';
import Logo from '../../../assets/img/logo.svg';
import './Header.scss';
import { Link } from 'react-router-dom';
import { useAuthState } from '../../Context';
import { logout, useAuthDispatch, useCarroState, useCarroDispatch, removePlate } from '../../Context';
import Modal from 'react-bootstrap/Modal';
import { PagesSharp } from '@material-ui/icons';


const PrintCarrito = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [itemCount, setItemCount] = useState(0);
    const [eliminar, setEliminar] = useState(false)
    const [mesas, setMesas] = useState([]);
    const [idMesa, setIdMesa] = useState('msg');
    const [canOrder, setCanOrder] = useState(false);
    const dispatch = useCarroDispatch();
    const plateDetails = useCarroState();
    //const propina = plateDetails.totalPago*0.1;

    const handleBuscarMesas = async () => {

        const allTables = await apiGetElements('/api/mesas');
        const filterTables = allTables.filter((t) => t.estado.idEstadoMesa === 2);
        setMesas(filterTables);


    }

    useEffect(() => {
        handleBuscarMesas();
    }, [])

    useEffect(() => {
        if (eliminar === true && itemCount > 0) {
            setItemCount(itemCount - 1);
            setEliminar(false);
        }
    }, [eliminar])

    useEffect(() => {
        if (plateDetails.platosSeleccionados !== undefined) {
            setItemCount(plateDetails.platosSeleccionados.length);
        }
    }, [plateDetails])

    useEffect(() => {
        if (idMesa !== 'msg' && itemCount > 0) {
            setCanOrder(true);
        } else {
            setCanOrder(false);
        }
    }, [idMesa, itemCount])

    const handleDeleteProduct = (plato) => {
        const listaPlatosSeleccionados = plateDetails.platosSeleccionados;
        const platosFiltrados = listaPlatosSeleccionados.filter(i => i.idRandom !== plato.idRandom);
        const diferenciaPago = plateDetails.totalPago - plato.valorPlato;
        removePlate(dispatch, { platosSeleccionados: platosFiltrados, totalPago: diferenciaPago });
        setEliminar(true);
        alert(plato.nombrePlato + " se ha retirado del carrito.")
    }

    const handleOrdenar = async () => {

        const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : undefined;
        const detalles = [];
        let sinRepetidos
        if (plateDetails.platosSeleccionados.length > 0 && currentUser !== undefined) {
            plateDetails.platosSeleccionados.map((plato => {
                let contadorPlatos = 0
                plateDetails.platosSeleccionados.map((platoChild, idx) => {
                    if (plato.idPlato === platoChild.idPlato) {
                        contadorPlatos += 1;
                    }
                });

                const detalleObj = {
                    cantidadDetOr: contadorPlatos,
                    plato: {
                        idPlato: plato.idPlato,
                        valorPlato: plato.valorPlato
                    }

                }


                detalles.push(detalleObj);




            }))

            sinRepetidos = detalles.filter((valorActual, indiceActual, arreglo) => {
                //Podríamos omitir el return y hacerlo en una línea, pero se vería menos legible
                return arreglo.findIndex(valorDelArreglo => JSON.stringify(valorDelArreglo) === JSON.stringify(valorActual)) === indiceActual
            });

            const obj = {
                idTipoOr: 3,
                idMesa: idMesa,
                idUsuario: currentUser.idUsuario,
                detalle: sinRepetidos
            }



            let valid = false;
            if (obj !== undefined && obj !== {}) {
                valid = await addElment('/api/ordenes/full', obj)
            } else {
                alert('La orden ingresada es invalida, inténtelo más tarde');
                return;
            }
            if (valid !== false) {
                alert('Orden ingresada exitosamente')
                localStorage.removeItem('platosCarro');
                localStorage.removeItem('totalCarro');
                window.location.reload(false);
            } else {
                console.log('Ha ocurrido un error')
            }
        }



    }

    return (
        <>
            <Col className="text-center boton-ico-text">
                <div onClick={handleShow}>
                    <ShoppingCartIcon variant="primary" />
                    <Badge variant="light" className="badge-notify">{itemCount}</Badge>
                    <p>Carrito</p>
                </div>
            </Col>

            <Modal show={show} onHide={handleClose} backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Resumen Orden</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>
                        Lista de pedidos:
                    </h5>
                    <ul>
                        {plateDetails.platosSeleccionados ? plateDetails.platosSeleccionados.map((plato, idx) => {
                            return (
                                <li key={idx} style={{ marginBottom: '10px' }}>
                                    {plato.nombrePlato}
                                    <span style={{ marginLeft: '10px' }}><button onClick={() => handleDeleteProduct(plato)}>X</button></span>
                                </li>
                            )
                        }) : <p style={{ color: 'red', marginLeft: '-40px' }}>Selecciona un prodúcto</p>}
                    </ul>
                    <h5>
                        Seleccionar Mesa:
                    </h5>
                    <Form.Control className="mt-3" as="select" value={idMesa} onChange={(e) => {
                        setIdMesa(e.target.value)
                    }}>
                        <option selected disabled hidden value='msg'>Selecciona una mesa</option>
                        {
                            mesas.map((mesa, index) => {
                                return (<option key={index} value={mesa.idMesa}>Mesa número: {mesa.numeroMesa}</option>)
                            })
                        }
                    </Form.Control>
                    <h2 className="mt-3">
                        Total orden: ${plateDetails.totalPago}
                    </h2>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Salir
                    </Button>
                    <Button variant="primary" disabled={!canOrder} onClick={() => handleOrdenar()}>
                        Ordenar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}


const Header = (props) => {

    const dispatch = useAuthDispatch();

    const handleLogout = () => {
        logout(dispatch);
        window.location.reload(false);
    }


    const PrintAcceso = () => (
        <Col className="text-center boton-ico-text" as={Link} to="/login">
            <AccountCircleIcon />
            <p>Acceso</p>
        </Col>
    );


    const PrintLogout = () => (
        <Col className="text-center boton-ico-text" onClick={() => handleLogout()}>
            <AccountCircleIcon />
            <p>Salir</p>
        </Col>
    );
    const userDetails = useAuthState();
    const { isAdmin, itemCount, show } = props.statusObject;
    // const { isLogin, isAdmin = false, itemCount } = statusObject;
    return (
        <div className="header">
            <Container>
                <Row className="align-items-center justify-content-between">
                    <Col>
                        <img src={Logo} className="image-responsive" alt="Logo" />
                    </Col>
                    <Row className="mt-3" style={{ margin: 0 }}>
                        {/* {userDetails.user !== undefined && userDetails.user.perfil !== undefined ? (
                            <p className="nombre-usuario">Hola {userDetails.user.perfil.nombrePerfil}</p>
                        ) : null} */}
                        {!isAdmin === true && show === true && Boolean(userDetails.user) === true && <PrintCarrito />}
                        {!Boolean(userDetails.user) ? <PrintAcceso /> : <PrintLogout />}
                    </Row>
                </Row>
            </Container>

        </div>
    )
}

export default Header;