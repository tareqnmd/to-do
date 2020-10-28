import React, { useEffect, useState } from 'react';
import './ToDo.css';
import { Col, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addTODO, doneTODO, removeTODO, undoTODO } from '../../redux/actions/actions';
import SingleToDo from '../SingleToDo/SingleToDo';

const ToDo = (props) => {
    const{todo,addTODO, removeTODO, undoTODO, doneTODO} = props;
    const [newTodo, setNewTodo] = useState('');
    const [category, setCategory] = useState('all');
    const [filter, setFilter] = useState([]);
    const change = (event) => {
        const newTask = event.target.value;
        setNewTodo(newTask);
    }
    useEffect(() => {
        if (category === 'all') {
            return setFilter(todo);
        }
        if (category === 'done') {
            return setFilter(todo.filter(todo=>todo.isActive!==true));
        }
        if (category === 'active') {
            return setFilter(todo.filter(todo=>todo.isActive===true));
        }
    }, [category,todo])

    const submit=(event) => {
        event.target.children[0].value='';
        addTODO(newTodo);
        event.preventDefault();
    }
    return (
        <Container>
        <Row>
            <Col xs={12} sm={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }} xl={{ span: 6, offset: 3 }}>
                <h3 className="text-center mt-4 mb-3 heading" >Add Your Task</h3>
                <form onSubmit={submit} action="">
                <input onChange={change} className="from-control pl-4" type="text" required />
                <input className="submit-button" type="submit" value="Add" />
                </form>
            </Col>
        </Row>
        <Row>
            <Col xs={12} sm={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }} xl={{ span: 6, offset: 3 }}>
                <div className="custom-nav text-center mt-3">
                    <button onClick={() => setCategory('all')} className={`mr-3 ${category === 'all' ? 'custom-background' : ''}`}>All</button>
                    <button onClick={() => setCategory('active')} className={`mr-3 ${category === 'active' ? 'custom-background' : ''}`} to="/active">Active</button>
                    <button onClick={() => setCategory('done')} className={`mr-3 ${category === 'done' ? 'custom-background' : ''}`} to="/done">Done</button>
                </div>
            </Col>
        </Row>
        <Row>
            <Col xs={12} sm={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }} xl={{ span: 6, offset: 3 }}>
                {
                    filter.map(todo => <SingleToDo key={todo.id} todo={todo} removeTODO={removeTODO} doneTODO={doneTODO} undoTODO={undoTODO}></SingleToDo>)
                }
            </Col>
        </Row>
    </Container>
    );
};

const mapStateToProps = (state) =>{
    return {
        todo: state.todo
    }
}

const mapDispatchToProps ={
    addTODO:addTODO,
    removeTODO:removeTODO,
    doneTODO: doneTODO,
    undoTODO:undoTODO
}

export default connect(mapStateToProps,mapDispatchToProps)(ToDo);