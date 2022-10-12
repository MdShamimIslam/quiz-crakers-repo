import React from 'react';
import {useNavigate } from 'react-router-dom';
import './Topic.css';

const Topic = ({topic}) => {
    // console.log(topic);
    const {id,name,logo,total}=topic;

    const navigate=useNavigate();
    const handleNavigate= () =>{
        navigate(`/topic/${id}`);
    };
    return (
        <div className='topic'>
            <img src={logo} alt="" />
            <div className="topic-info">
                <h2>{name}</h2>
                <h4>Total Quiz: {total}</h4>
                    <button onClick={handleNavigate}>Start</button>          
            </div>
        </div>
    );
};

export default Topic;