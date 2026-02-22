import React, { useContext, useEffect, useState } from 'react'
import style from './Dashboard.module.css'
import { DataContext } from '../../context/DataProvider';

const Dashboard = () => {
    let { projects, getProjects, setProjects, projectLoading, markTaskCompleted, deleteCompletedTask } = useContext(DataContext);
    const [taskOpen, setTaskOpen] = useState({
        id: null,
        isOpen: false
    })

    useEffect(() => {
        getProjects();
    }, [])

    // time calcuation function for the projects
    function calculateTimeWhenCreated(createdAt) {
        const createdTime = new Date(createdAt);
        const currentTime = new Date();
        const timeDifference = currentTime - createdTime;
        const inSeconds = timeDifference / 1000;
        if (inSeconds < 60) {
            return `${Math.floor(inSeconds)} seconds ago`;
        } else if (inSeconds < 3600) {
            return `${Math.floor(inSeconds / 60)} minutes ago`;
        } else if (inSeconds < 86400) {
            return `${Math.floor(inSeconds / 3600)} hours ago`;
        } else {
            return `${Math.floor(inSeconds / 86400)} days ago`;
        }
    }

    // projects && console.log("Projects from context:", projects);
    // CLicked on done task completed
    const handleTaskCompleted = async (task_id) => {
        let success = await markTaskCompleted(task_id);
    }


    function handleDeleteTask(task_id) {
        deleteCompletedTask(task_id);
    }
    return (
        <section className={`${style.dashboard_section} border p-1 flex flex-col items-center justify-center min-h-80`}>
            <div className='flex gap-1 justify-between  border w-100 items-center'>
                <h1>Projects</h1>
                <button className={`${style.add_btn} btn`}>&#43;</button>
            </div>
            <div className='flex items-center justify-center flex-col gap-1 w-100'>
                {projects.length === 0 && !projectLoading && <p>No projects found. Please add some projects.</p>}
                {projectLoading && <p>Loading projects...</p>}
                {projects.length > 0 && !projectLoading && (
                    <ul className={`flex flex-col gap-1 ${style.project_container}`}>
                        {projects.map((project, idx) => (
                            <li key={project.id} className='flex flex-col gap-0.5'>
                                <div className='flex justify-between items-center my-0.5'>
                                    <h3>{idx + 1}. {project.project_name}</h3>
                                    <p className={style.time_ago}>{calculateTimeWhenCreated(project.created_at)}</p>
                                </div>
                                <h3>{project.description}</h3>
                                {project.tasks.length == 0 && <div className='flex justify-between'>
                                    <p>No tasks found for this project.</p> <button className={style.add_task_btn}>Add One</button> </div>}
                                <div className='flex gap-0.5 p-0.5 w-fit'>
                                    {project.tasks.length > 0 && <button className={style.tasks_button} onClick={() =>
                                        setTaskOpen(prev => ({ ...prev, id: project.id, isOpen: !prev.isOpen }))
                                    }>{!taskOpen.isOpen || taskOpen.id !== project.id ? <>See Tasks <span className={style.task_length}>{project.tasks.length}</span> &#10225;</> : <>hide Tasks <span className={style.task_length}>{project.tasks.length}</span> &#10224;</>}</button>}
                                    <button className={`${style.add_task_btn} flex justify-center items-center w-fit`}><span className={style.icon}>&#43;</span>Add New Task</button>
                                </div>
                                {taskOpen.id === project.id && taskOpen.isOpen && project.tasks.length > 0 && <ul className='flex flex-col gap-0.5 border p-1 text-white'>
                                    {project.tasks.map((task, idx) => (
                                        <li key={task.id} className={`flex justify-between items-center`}>
                                            <p className={`${task.is_completed == 1 && style.task_completed}`}>
                                                {idx + 1}. {task.task}
                                            </p>
                                            <div className='flex gap-0.5'>
                                                {task.is_completed == 1 ? <button disabled>Completed</button> : <button className={style.task_completed_button} onClick={() => { handleTaskCompleted(task.id) }}>Done</button>}
                                                <button className={style.task_delete} onClick={() => { handleDeleteTask(task.id) }}>Delete</button>
                                            </div>
                                        </li>))}
                                </ul>
                                }

                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </section >
    )
}

export default Dashboard