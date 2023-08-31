import React, {useState} from 'react'
import ProgressBar from "@ramonak/react-progress-bar";
import { Link } from "react-router-dom";
import './style.css'

function Cards(props) {
    return (
        <div className={props.data.active?"card":"card card-inactive"}>
            <div className="image">
                <img src={props.data.cover_picture || "https://diademy.com/wp-content/uploads/2020/06/Bulk-SMS-for-NGO-e1592921630867-770x515.jpg"} alt="NGO image" />
            </div>
            <div className="card-content">
                <div className="subtitle">
                    {props.data.category} | {props.data.state}
                </div>
                <div className="title">
                    {props.data.title}
                </div>
                <div className="organization">
                    by <b>{props.data.organization}</b>
                </div>
                <div className="description">
                    {props.data.description}
                </div>
                <div className="donate-bar">
                        <p><b>{(props.data.goal - props.data.remaining_amount).toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}</b> raised of {(props.data.goal).toLocaleString('en-IN', { style: 'currency', currency: 'INR' })} goal</p>
                        <ProgressBar width='15rem' height='0.75rem' completed={props.data.goal - props.data.remaining_amount} maxCompleted={props.data.goal} isLabelVisible={false} animateOnRender={true} bgColor="#B2BB1E" />
                        {props.data.active && <Link to={"Donation/"+props.data.id}><button>Donate</button></Link>}
                </div>
            </div>
        </div>
    )
}

export default Cards