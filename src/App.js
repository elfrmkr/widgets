/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/search';

const items = 
[
    {
        title: 'What is react?',
        content: 'React is a frontend javascript framework'
    },
    {
        title: 'Why use react?',
        content: 'React is a favorite js library'
    },
    {
        title: 'how do you use react?',
        content: 'React is with creating components'
    }
];
export default () => {
    return (
        <div>
            <Search/>
        </div>
    );
};

