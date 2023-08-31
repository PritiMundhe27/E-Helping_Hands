import React, { useEffect, useState } from 'react'
import './style.css'
import { editNgoData, fetchCategory, fetchNGOid, fetchOrganization, submitNewNGO } from '../../../API/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';

function EditNGO() {
    let { id } = useParams();
    const [categoryData, setCategoryData] = useState(null);
    const [selectCategory, setSelectCategory] = useState('');
    const [organizationData, setOrganizationData] = useState(null);
    const [selectOrganization, setSelectOrganization] = useState('');
    const [ngoData, setNgoData] = useState(null);

    useEffect(() => {
        async function getNgoData() {
            const data = await fetchNGOid(id);
            setNgoData(data[0]);
        }
        getNgoData()
    }, []);


    useEffect(() => {
        async function getCategoryData() {
            const data = await fetchCategory();
            setCategoryData(data);
        }
        getCategoryData()
    }, []);

    useEffect(() => {
        async function getOrganizationData() {
            const data = await fetchOrganization();
            setOrganizationData(data);
        }
        getOrganizationData()
    }, []);

    function onSubmit(event) {
        event.preventDefault()
        const date = new Date();
        let today = date.toLocaleString('en-IN', { year: "numeric", month: "2-digit", day: "2-digit" })
        const data = {
            "title": event.target.title.value,
            "category": event.target.category.value,
            "organization": event.target.organization.value,
            "state": event.target.state.value,
            "description": event.target.description.value,
            "min_amount": event.target.min.value,
            "goal": event.target.goal.value,
            "remaining_amount": event.target.goal.value,
            "organization_id": organizationData[event.target.organization.value].id,
            "cover_picture": event.target.cover.value,
            "contact_number": event.target.number.value,
            "important_level": event.target.imp.value,
            "expiry_date": event.target.date.value,
            ...ngoData
        };
        console.log(data)
        // document.getElementById("ngoForm").reset();
        editNgoData(data,id)
            .then(() =>
                toast.success('NGO Edited', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
            );

    }

    return (
        <div className='editNgocard-card'>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <h2>Edit Donation Service</h2>
            <form onSubmit={onSubmit} id='ngoForm' action="" className='createDonationForm'>
                <div>
                    <label htmlFor="title">Title</label>
                    <input value={ngoData?.title} name="title" placeholder='Title' type="text" />
                </div>
                <div>
                    <label htmlFor="State">State</label>
                    <input value={ngoData?.state} name="state" placeholder='State' type="text" />
                </div>
                <div>
                    <label htmlFor="Category">Category</label>
                    <select className={selectCategory?selectCategory: ngoData?.category} value={selectCategory?selectCategory: ngoData?.category} name='category' onChange={(e) => setSelectCategory(e.target.value)}>
                        {categoryData && categoryData?.map((data, i) => {
                            return (
                                <option key={i} value={data}>{data}</option>
                            )
                        })}
                    </select>
                </div>
                <div>
                    <label htmlFor="organization">Organization</label>
                    <select value={selectOrganization?selectOrganization:ngoData?.organization} name='organization' onChange={(e) => setSelectOrganization(e.target.value)}>
                        {organizationData && Object.keys(organizationData)?.map((data, i) => {
                            return (
                                <option key={i} value={data}>{data}</option>
                            )
                        })}
                    </select>
                </div>
                <div>
                    <label htmlFor="Description">Description</label>
                    <textarea name="description" placeholder='Description' value={ngoData?.description}></textarea>
                </div>
                <div>
                    <label htmlFor="Min">Min Amount</label>
                    <input value={ngoData?.min_amount} name="min" placeholder='Min amount' type="number" />
                </div>
                <div>
                    <label htmlFor="goal">Goal</label>
                    <input value={ngoData?.goal} name="goal" placeholder='goal' type="number" />
                </div>
                <div>
                    <label htmlFor="Cover">Cover Picture</label>
                    <input value={ngoData?.cover_picture} name="cover" placeholder='Cover Picture' type="text" />
                </div>
                <div>
                    <label htmlFor="Contact">Contact Number</label>
                    <input value={ngoData?.contact_number} name="number" placeholder='Contact Number' type="text" />
                </div>
                <div>
                    <label htmlFor="Imporant">Imporant Level</label>
                    <input value={ngoData?.important_level} name="imp" placeholder='(1 - 10)' type="number" min={1} max={10} />
                </div>
                <div>
                    <label htmlFor="Expiry">Expiry Date</label>
                    <input value={ngoData?.expiry_date} name='date' type="date" />
                </div>
                <button>Create Donation</button>
            </form>
        </div>
    )
}

export default EditNGO