import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Gram from './gram';

const Feed = (props) => {
    const [content, setContent] = useState('');

    useEffect(() => {
        const fetchData = async() => {
            const returnedGrams = await axios.get('/api/gram');
            setContent(returnedGrams.data);
        };
        if (!content) {
            fetchData();
        }
    });

    return (
        <div id="feed">
            {content && content.map(gram => <Gram key={gram.id} gram={gram} />)}
        </div>
    )
};

export default Feed;
