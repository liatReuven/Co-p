
import React from 'react'
import { Link } from 'react-router-dom'

import Elogo from '../Elements/Elogo'

import '../assets/StyleSheets/Main.css'



export default function Main() {
    return (
        <div>
            {Elogo}
            <br />
            <h1 className="loginh1">מי אתה/את?</h1>
            <div className="buttons">
                <Link to="/LogInParent">
                    <button className="btn">הורה</button>
                </Link>
                <Link to="/LoginStaffMember">
                    <button className="btn">איש צוות</button>
                </Link>
            </div>
            <div>
                <Link to="/LoginManage">
                    <button className="btn">מנהל/ת חינוך</button>
                </Link>
            </div>
        </div>
    );
}