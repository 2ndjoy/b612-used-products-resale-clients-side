import React from 'react';
import Loading from '../Loading/Loading';
import SmallLoaing from '../Loading/SmallLoading/SmallLoaing';

const Home = () => {
    const first = process.env.REACT_APP_STRIPE_PK;
    console.log(first)
    return (
        <div>
            <h2>This is home</h2>

        </div>
    );
};

export default Home;