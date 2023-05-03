import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/Task.class'

const TaskComponent = ({ task }) => {

    useEffect(() => {
        console.log('Tarea creada')
    
        return () => {
            console.log(`task: ${task.name} se esta desapareciendo`)
        }
    }, [task])
    
    
    return (
        <div>
            <h2>
                Nombre: { task.name }
            </h2>
            <h3>
                Descripción: { task.description }
            </h3>
            <h4>
                Level: { task.level }
            </h4>
            <h5>
                This task is: { task.completed ? 'COMPLETED' : 'PENDING' }
            </h5>
        </div>
    )
}

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
}

export default TaskComponent