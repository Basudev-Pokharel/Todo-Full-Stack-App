import React, { createContext, useState } from 'react'
import { API } from '../Services/api';

export const DataContext = createContext(null);
const DataProvider = ({ children }) => {
    const [projects, setProjects] = useState([]);
    const [projectLoading, setprojectLoading] = useState(false)



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



    return (
        <DataContext.Provider value={{ projects, setProjects, getProjects, projectLoading, markTaskCompleted, deleteCompletedTask }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider