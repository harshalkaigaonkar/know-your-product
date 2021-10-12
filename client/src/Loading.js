import React from 'react';
import loading from './loading.gif';

const Loading = () => {
    return (
        <div>
            <img src={loading} alt='Loading..' width='100px' height='100px' />
            <h2>Please Hang Tight, It takes time...</h2>
        </div>
    )
}

export default Loading
