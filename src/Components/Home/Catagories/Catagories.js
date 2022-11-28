import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../PrimaryButton/PrimaryButton';

const Catagories = () => {

    const [catagories, setCatagory] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(res => res.json())
            .then(data => setCatagory(data))

    }, [])


    console.log('catagory', catagories);
    return (
        <div className='my-9'>
            <div className='lg:flex justify-center gap-4'>
                {
                    catagories.map(category => <div className="card w-96 my-5 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">{category.name}</h2>
                            <p>Get all the {category.name} accorsories</p>
                            <div className="card-actions justify-end">
                                <Link to={`/catagories/${category.categoryName}`}><PrimaryButton
                                    classes='w-full px-4 py-2 tracking-wide transition-colors duration-300 transform rounded-md'
                                >Go</PrimaryButton></Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Catagories;