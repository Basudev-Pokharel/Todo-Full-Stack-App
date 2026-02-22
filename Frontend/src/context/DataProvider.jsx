import React, { createContext, useEffect, useState } from 'react'
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
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [openNav, setOpenNav] = useState(false)

    // FOr themes across components
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "dark"
    );

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);



    // GetProject function API call
    async function getProjects() {
        try {
            setprojectLoading(true);
            let response = await API.get('projects');
            if (response.status === 200) {
                setProjects(response.data.projects);
            }
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
            if (response?.data?.status === true) {
                getProjects();
                return true;
            }
        }
        catch (err) {
            setAddProjectError(err?.response?.data?.errors);
        }
        finally {
            setAddProjectLoading(false);
        }
    }
    // Delete project API call
    async function deleteProject(project_id) {
        try {
            let response = await API.delete(`delete_project/${project_id}`);
            console.log(response);
            if (response?.data?.status === true) {
                getProjects();
                return true;
            }
        }
        catch (err) {
            console.log(err.response)
        }
        finally {
            setAddProjectLoading(false);
        }
    }

    // For responsive Header



    return (
        <DataContext.Provider value={{ projects, setProjects, getProjects, projectLoading, markTaskCompleted, deleteCompletedTask, addTaskInProject, addTaskLoading, addTaskError, addProjectError, addProjectLoading, addProjectBackend, deleteProject, windowWidth, setOpenNav, openNav, setTheme, theme }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider