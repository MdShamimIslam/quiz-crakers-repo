import React from 'react';

const Topic = ({topic}) => {
    console.log(topic);
    const {id,name,logo,total}=topic;
    return (
        <div>
            <h3>name:{name}</h3>
        </div>
    );
};

export default Topic;