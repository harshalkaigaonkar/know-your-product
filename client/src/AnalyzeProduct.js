import React from 'react';
import Loading from './Loading.js'
import Charts from './Charts';

const AnalyzeProduct = ({data}) => {
    console.log(data)
    return (
        <div>
            <h2>By Analysing major Blogs , we got these Results...</h2> 
            {data === null ? <Loading /> : <Charts data={data} />}
        </div>
    )
}

export default AnalyzeProduct
