import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Gram from './gram';

const Feed = () => {
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
        <div id="feed" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            {content && content.map(gram => <Gram key={gram.id} gram={gram} />)}
        </div>
    )
};

export default Feed;
