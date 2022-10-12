import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='question-ans'>
            <h3><span>Question-01:</span> What is the purpose of react router?</h3>
            <p>
                <span>Ans:</span> ReactJS Router is mainly used for developing Single Page Web Applications.
               React Router is used to define multiple routes in the application. When a user
                types a specific URL into the browser, and if this URL path matches any 'route' inside 
                the router file, the user will be redirected to that particular route.
            </p><br />
            <h3><span>Question-02: </span>How does Context API work?</h3>
            <p>
                <span>Ans:</span> The React Context API is a way for a React app to effectively produce global variables that can be
                passed around. This is the alternative to "prop drilling" or moving props from grandparent to child
                to parent, and so on. Context is also touted as an easier,
                lighter approach to state management using Redux.
            </p><br />
            <h3><span>Question-03: </span>What is useRef hook in react?</h3>
            <p>  
                <span>Ans:</span> The useRef Hook allows you to persist values between renders. It can be used to store 
                a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
            </p>
        </div>
    );
};

export default Blog;