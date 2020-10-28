import { faCheck, faTrash, faUndo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './SingleToDo.css';

const SingleToDo = ({ todo, removeTODO, undoTODO, doneTODO }) => {
    const { name, isActive, id } = todo;
    let active;
    if (isActive) {
        active = true;
    }
    else {
        active = false;
    }
    return (
        <>
            <div className="single-todo">
                <div className="d-flex justify-content-between">
                    {
                        active ?
                            <h5 style={{ color: 'green' }}>{name}</h5>
                            :
                            <h5 style={{ textDecoration: 'line-through' }}>{name}</h5>
                    }
                    <div className="">
                        {
                            active ?
                                <button onClick={() => doneTODO(id)} className="btn btn-sm btn-success mr-2">
                                    <FontAwesomeIcon icon={faCheck} />
                                </button>
                                :
                                <button onClick={() => undoTODO(id)} className="btn btn-sm btn-info mr-2">
                                    <FontAwesomeIcon icon={faUndo} />
                                </button>
                        }
                        <button onClick={() => removeTODO(id)} className="btn btn-sm btn-danger">
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleToDo;