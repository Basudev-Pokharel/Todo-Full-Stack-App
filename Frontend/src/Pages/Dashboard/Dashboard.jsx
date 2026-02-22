import React, { useContext, useEffect, useState } from 'react'
import style from './Dashboard.module.css'
import { DataContext } from '../../context/DataProvider';

const Dashboard = () => {
    let { projects, getProjects, setProjects, projectLoading, markTaskCompleted, deleteCompletedTask, addTaskInProject, addTaskLoading, addTaskError, addProjectBackend, addProjectLoading, addProjectError } = useContext(DataContext);
    const [taskOpen, setTaskOpen] = useState({
        id: null,
        isOpen: false
    })
    const [taskAdd, setTaskAdd] = useState({
        id: null,
        isOpen: false
    })
    const [taskFormData, setTaskFormData] = useState({
        task: ''
    })
    const [addProject, setAddProject] = useState(false)
    const [projectForm, setProjectForm] = useState({
        name: '',
        description: ''
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

    // Now, creating task in specific project

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTaskFormData((prev) => ({ ...prev, [name]: value }));
    }
    const handleTaskSubmit = async (e) => {
        e.preventDefault();
        let projectId = taskAdd.id;
        // console.log('Task FOrm submitted', taskFormData, projectId);
        let success = await addTaskInProject(projectId, taskFormData);
        if (success) {
            setTaskFormData({ task: '' });
            setTaskAdd({ id: null, isOpen: false });
        }
    }

    // for creating project now
    function handleProjectChange(e) {
        const { name, value } = e.target;
        setProjectForm((prev) => ({ ...prev, [name]: value }));
    }
    const handleProjectSubmit = async (e) => {
        e.preventDefault();
        let success = await addProjectBackend(projectForm);
        if (success) {
            setProjectForm({
                name: '',
                description: ''
            })
            setAddProject(false);
        }

    }


    return (
        <section className={`${style.dashboard_section} border p-1 flex flex-col items-center justify-center min-h-80`}>
            <div className='flex gap-1 justify-between  border w-100 items-center'>
                <h1>Projects</h1>
                <button className={`${style.add_btn} btn`} onClick={() => { setAddProject(prev => !prev) }}> {addProject ? <>&#215;</> : <>&#43;</>}</button>
            </div>
            {addProject && <div className={`${style.add_project_container} border`}>
                <form onSubmit={handleProjectSubmit} className='flex gap-0.5 items-center justify-between border'>
                    <input type="text" name="name" id="" placeholder="Project Name" className="border p-1 w-full" onChange={handleProjectChange} />

                    <input type="text" name="description" id="" placeholder="Project Description" className="border p-1 w-full mt-1" onChange={handleProjectChange} />

                    {addProjectLoading ? <button className={`${style.add_task_btn} ${style.project_submit_button}`} disabled>Adding ...</button> :
                        <button className={`${style.add_task_btn} ${style.project_submit_button}`}>Add</button>}
                </form>
                {addProjectError?.name?.[0] && <p className='text-red'>{addProjectError?.name?.[0]}</p>}
                {addProjectError?.description?.[0] && <p className='text-red'>{addProjectError?.description?.[0]}</p>}
            </div>}
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
                                {/* Tasks add button and See tasks buttons */}
                                <div className='flex gap-0.5 p-0.5 w-fit'>
                                    {project.tasks.length > 0 && <button className={style.tasks_button} onClick={() =>
                                        setTaskOpen(prev => ({ ...prev, id: project.id, isOpen: !prev.isOpen }))
                                    }>{!taskOpen.isOpen || taskOpen.id !== project.id ? <>See Tasks <span className={style.task_length}>{project.tasks.length}</span> &#10225;</> : <>hide Tasks <span className={style.task_length}>{project.tasks.length}</span> &#10224;</>}</button>}
                                    <button className={`${style.add_task_btn} flex justify-center items-center w-fit`} onClick={() =>
                                        setTaskAdd(prev => ({ ...prev, id: project.id, isOpen: !prev.isOpen }))
                                    }><span className={style.icon}>&#43;</span>Add New Task</button>
                                </div>

                                {/* //Tasks things */}
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

                                {/* For adding task, Input field opens for the specific Project */}
                                {taskAdd.id === project.id && taskAdd.isOpen && !taskOpen.isOpen && <form onSubmit={handleTaskSubmit} className={`flex gap-0.5  w-fit items-center justify-center ${style.add_field_container}`}>
                                    <input type="text" placeholder='Task details' className='p-0.5' autoFocus onChange={handleChange} name="task" />
                                    {addTaskLoading ? <button className={style.add_task_btn} disabled>Adding ...</button> : <button className={style.add_task_btn}>Add Task</button>}
                                    {addTaskError?.task?.[0] && <p className='text-red'>{addTaskError?.task?.[0]}</p>}
                                </form>}


                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </section >
    )
}

export default Dashboard