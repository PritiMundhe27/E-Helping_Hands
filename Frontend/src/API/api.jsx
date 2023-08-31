import axios from 'axios';
const baseURL = "http://localhost:8000/";

// get
export async function fetchCategory() {
    return await fetch(baseURL+"category")
        .then(res => res.json())
}

export async function fetchOrganization() {
    return await fetch(baseURL+"organization")
        .then(res => res.json())
}

export async function fetchNGOs() {
    return await fetch(baseURL+"NGO_details?_sort=active&_order=desc")
        .then(res => res.json())
}

export async function fetchNGOsFilter(category) {
    return await fetch(baseURL+"NGO_details?_sort=active&_order=desc&category="+category)
        .then(res => res.json())
}

export async function fetchNGOid(id) {
    return await fetch(baseURL+"NGO_details?_sort=active&_order=desc&id="+id)
        .then(res => res.json())
}

export async function fetchPermissions() {
    return await axios.get(baseURL+"user_permission")
}

// post
export async function submitDonationForm(data) {
    return await axios.post(baseURL+"donation_history", data)
}

export async function submitNewNGO(data) {
    return await axios.post(baseURL+"NGO_details/", data)
}

// update
export async function changeMaxAndAmount(data, id) {
    return await axios.put(baseURL+`NGO_details/${id}`, data)
}

export async function editNgoData(data, id) {
    return await axios.put(baseURL+`NGO_details/${id}`, data)
}

// delete
export async function deleteNgo(id) {
    return await axios.delete(baseURL+`NGO_details/${id}`)
}