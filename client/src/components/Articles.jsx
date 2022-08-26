import { useEffect } from 'react';
import { Box } from '@mui/material';
import { getNews } from '../service/api';
import { useState } from 'react';

import Article from './Article.jsx';    


const Articles = () => {

    const [news, setNews] = useState([]);

    useEffect(() => {
        dailyNews();
    }, []);


    const dailyNews = async () => {
        let response = await getNews();
        setNews(response.data);

    }



    return (
        <Box>
            {
                news.map(data => (
                    <Article data={data}/>
                ))
            }
        </Box>
    )

}

export default Articles;