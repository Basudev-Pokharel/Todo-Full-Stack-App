import React, { createContext, useState } from 'react'
import { API } from '../Services/api';

export const DataContext = createContext(null);
const DataProvider = ({ children }) => {
    const [projects, setProjects] = useState([]);
    const [projectLoading, setprojectLoading] = useState(false)
    // For taks of the specific project
    const [addTaskLoading, setAddTaskLoading] = useState(false)
    const [addTaskError, setAddTaskError] = useState(false)
    // For adding projetcs
    const [addProjectLoading, setAddProjectLoading] = useState(false)
    const [addProjectError, setAddProjectError] = useState(false)



    // GetProject function API call
    async function getProjects() {
        try {
            setprojectLoading(true);
            let response = await API.get('projects');
            if (response.status === 200) {
                setProjects(response.data.projects);
            }
            // API call here
        }
        catch (err) {
            console.error("Get Projects error:", err);
        }
        finally {
            setprojectLoading(false);
        }
    }

    // Delete Task from the Projects
    async function deleteCompletedTask(taskId) {
        try {
            let response = await API.delete(`task_delete/${taskId}`);
            console.log(response);
            if (response.data.status === true) {
                getProjects()
            }
        }
        catch (err) {
            console.error("Get Projects error:", err);
        }
        finally {
            console.log('fininised')
        }
    }


    // Mark task as completed API call
    async function markTaskCompleted(taskId) {
        try {
            let response = await API.patch(`task_complete/${taskId}`);
            console.log(response);
            if (response.data.status === true) {
                getProjects()
            }
        }
        catch (err) {
            console.error("Get Projects error:", err);
        }
        finally {
            console.log('fininised')
        }
    }

    // Add Task in the specific project API call
    async function addTaskInProject(projectId, taskData) {
        try {
            setAddTaskLoading(true);
            let response = await API.post(`task_create/${projectId}`, taskData);
            if (response?.data?.status === true) {
                getProjects();
                return true;
            }
        }
        catch (err) {
            console.log(err.response);
            setAddTaskError(err?.response?.data?.errors);

        }
        finally {
            setAddTaskLoading(false);
        }
    }

    // Add project API call
    async function addProjectBackend(projectDetails) {
        try {
            setAddProjectLoading(true);
            let response = await API.post('create_project', projectDetails);
            console.log(response)
        }
        catch (err) {
            console.log(err.response);
            setAddProjectError(err?.response?.data?.errors);
        }
        finally {
            setAddProjectLoading(false);
        }

    }



    return (
        <DataContext.Provider value={{ projects, setProjects, getProjects, projectLoading, markTaskCompleted, deleteCompletedTask, addTaskInProject, addTaskLoading, addTaskError, addProjectError, addProjectLoading, addProjectBackend }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider