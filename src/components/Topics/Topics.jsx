import React from 'react';
import { Navigate, useLoaderData, useNavigate } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Topics.css';

const Topics = () => {
    const topics=useLoaderData();
    // console.log(topics);

    
    return (
        <div className='topics-container'>
            {
                topics.data.map(topic => <Topic
                    key={topic.id}
                    topic={topic}
             
                ></Topic>)
            }
        </div>
    );
};

export default Topics;