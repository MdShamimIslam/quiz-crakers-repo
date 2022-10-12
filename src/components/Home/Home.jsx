import React from 'react';
import './Home.css';
import image from '../../images/quiz.png';

const Home = () => {
    return (
        <div className='home-container'>
            
            
            <header className='homeInfo'>
                    <div className="text">
                        <h1>Organize Live Multiplayer Trivia Quiz for Your Event!</h1>
                        <p>myQuiz is a web-based Audience Engagement Cloud Platform for hosting interactive trivia quizzes at in-person, virtual, and hybrid events.
                        No app install is required</p>
                    </div>
                    <div className="image">
                        <img src={image} alt="" />
                    </div>
            </header>
        </div>
    );
};

export default Home;