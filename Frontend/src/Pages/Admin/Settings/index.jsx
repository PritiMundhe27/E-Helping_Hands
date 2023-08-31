import React, { useEffect, useState } from 'react'
import './style.css';
import { fetchPermissions } from '../../../API/api';

function Setting() {
    const [permissions, setPermissions] = useState();

    useEffect(() => {
        async function fetchPermissionsData() {
            const data = await fetchPermissions();
            setPermissions(data.data);
        }
        fetchPermissionsData()

    }, []);
    return (
        <div className='settings-card'>
            {/* <h2>Super Admin</h2>
            <div className='inner-section'>
                <div>
                    <input checked={permissions? permissions.superadmin.create_ngo:false} type="checkbox" name="" id="create_ngo" />
                    <label htmlFor="create_ngo">Create NGO</label>
                </div>

                <div>
                    <input checked={permissions? permissions.superadmin.edit_ngo:false} type="checkbox" name="" id="edit_ngo" />
                    <label htmlFor="edit_ngo">Edit NGO</label>
                </div>

                <div>
                    <input checked={permissions? permissions.superadmin.delete_ngo:false} type="checkbox" name="" id="delete_ngo" />
                    <label htmlFor="delete_ngo">Delete NGO</label>
                </div>

                <div>
                    <input checked={permissions? permissions.superadmin.create_ngo_type:false} type="checkbox" name="" id="create_ngo_type" />
                    <label htmlFor="create_ngo_type">Create NGO Type</label>
                </div>

                <div>
                    <input checked={permissions? permissions.superadmin.edit_ngo_type:false} type="checkbox" name="" id="edit_ngo_type" />
                    <label htmlFor="edit_ngo_type">Edit NGO type</label>
                </div>

                <div>
                    <input checked={permissions? permissions.superadmin.delete_ngo_type:false} type="checkbox" name="" id="delete_ngo_type" />
                    <label htmlFor="delete_ngo_type">Delete Ngo type</label>
                </div>

                <div>
                    <input checked={permissions? permissions.superadmin.create_user:false} type="checkbox" name="" id="create_user" />
                    <label htmlFor="create_user">Create Users</label>
                </div>

                <div>
                    <input checked={permissions? permissions.superadmin.edit_user:false} type="checkbox" name="" id="edit_user" />
                    <label htmlFor="edit_user">Edit Users</label>
                </div>

                <div>
                    <input checked={permissions? permissions.superadmin.delete_user:false} type="checkbox" name="" id="delete_user" />
                    <label htmlFor="delete_user">Delete Users</label>
                </div>

                <div>
                    <input checked={permissions? permissions.superadmin.change_permission:false} type="checkbox" name="" id="change_permission" />
                    <label htmlFor="change_permission">Change Permission</label>
                </div>
            </div> */}

            <h2>Admin</h2>
            <div className='inner-section'>
                <div>
                    <input checked={permissions? permissions.admin.create_ngo:false} type="checkbox" name="" id="create_ngo" />
                    <label htmlFor="create_ngo">Create NGO</label>
                </div>

                <div>
                    <input checked={permissions? permissions.admin.edit_ngo:false} type="checkbox" name="" id="edit_ngo" />
                    <label htmlFor="edit_ngo">Edit NGO</label>
                </div>

                <div>
                    <input checked={permissions? permissions.admin.delete_ngo:false} type="checkbox" name="" id="delete_ngo" />
                    <label htmlFor="delete_ngo">Delete NGO</label>
                </div>

                <div>
                    <input checked={permissions? permissions.admin.create_ngo_type:false} type="checkbox" name="" id="create_ngo_type" />
                    <label htmlFor="create_ngo_type">Create NGO Type</label>
                </div>

                <div>
                    <input checked={permissions? permissions.admin.edit_ngo_type:false} type="checkbox" name="" id="edit_ngo_type" />
                    <label htmlFor="edit_ngo_type">Edit NGO type</label>
                </div>

                <div>
                    <input checked={permissions? permissions.admin.delete_ngo_type:false} type="checkbox" name="" id="delete_ngo_type" />
                    <label htmlFor="delete_ngo_type">Delete Ngo type</label>
                </div>

                <div>
                    <input checked={permissions? permissions.admin.create_user:false} type="checkbox" name="" id="create_user" />
                    <label htmlFor="create_user">Create Users</label>
                </div>

                <div>
                    <input checked={permissions? permissions.admin.edit_user:false} type="checkbox" name="" id="edit_user" />
                    <label htmlFor="edit_user">Edit Users</label>
                </div>

                <div>
                    <input checked={permissions? permissions.admin.delete_user:false} type="checkbox" name="" id="delete_user" />
                    <label htmlFor="delete_user">Delete Users</label>
                </div>

                <div>
                    <input checked={permissions? permissions.admin.change_permission:false} type="checkbox" name="" id="change_permission" />
                    <label htmlFor="change_permission">Change Permission</label>
                </div>
            </div>
        </div>
    )
}

export default Setting