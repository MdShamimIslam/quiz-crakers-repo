import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './TopicDetails.css';
import { EyeIcon } from '@heroicons/react/24/solid'

const TopicDetails = () => {
  const topic=useLoaderData();
  console.log(topic.data.questions);
//   const {question,options,correctAnswer}=topic;
    return (
        <div>
            {
                topic.data.questions.map(top =>
                
               <div>
                    
                     <div className="ques-ans-info">
                   
                        <div className="question">
                            <h3>Question: {top.question}</h3>
                            <EyeIcon className="icon"/>
                        </div>
                        <div className="option">
                                {
                                top.options.map(option =>
                                <div>
                                    <input type="radio" name="radio" id="radio" />
                                    <span className="span">{option}</span>
                                </div>
                                )
                                }
                        </div>
                    </div>
               </div>

                )
            }

        </div>
    );
};

export default TopicDetails;