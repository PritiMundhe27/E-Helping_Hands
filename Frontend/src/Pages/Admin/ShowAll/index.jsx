import React, { useEffect, useState } from 'react'
import "./style.css";
import { deleteNgo, fetchNGOs } from '../../../API/api';
import { Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

function ShowAll() {
    const [ngoData, setNgoData] = useState(null);
    useEffect(() => {
        async function getNgoData() {
            const data = await fetchNGOs();
            setNgoData(data);
        }
        getNgoData()
    }, []);
    function deleteNgoFunction(id) {
        deleteNgo(id).then(() => {
            async function getNgoData() {
                const data = await fetchNGOs();
                setNgoData(data);
            }
            getNgoData()
        })
    }
    function deleteButtonOnClick(title, id) {
        confirmAlert({
            title: title,
            message: 'Are you sure want to delete this NGO?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => deleteNgoFunction(id)
                },
                {
                    label: 'No'
                }
            ]
        });
    }
    return (
        <div className='table-card'>
            <div className="action-buttons-table">
                <Link to={"/add-ngo"}><button className='edit-button'>Create +</button></Link>
                <Link to={"/settings"}><button className='settings-button'>Settings</button></Link>
            </div>
            <h2>All NGO's</h2>
            <table id='Table'>
                <thead>
                    <tr>
                        <th>Sr.No.</th>
                        <th>Title</th>
                        <th>Organization</th>
                        <th>Status</th>
                        <th>Action button</th>
                    </tr>
                </thead>
                <tbody>
                    {ngoData?.map((data, i) => {
                        console.log(data.active)

                        return (
                            <tr>
                                <td>{i + 1}</td>
                                <td>{data.title}</td>
                                <td>{data.organization}</td>
                                <td>{data.active ? 'Active' : 'Expired'}</td>
                                <td>
                                    <Link to={'/edit-ngo/' + data.id}><button className='edit-button'>edit</button></Link>
                                    <button className='delete-button' onClick={() => deleteButtonOnClick(data.title, data.id)}>delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ShowAll