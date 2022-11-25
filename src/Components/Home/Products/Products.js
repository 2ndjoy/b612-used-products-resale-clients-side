import React from 'react';
import kitchen1 from '../../../assets/kitchen1.avif';
import Gallery from '../../Gallery/Gallery';
import BookingModal from './BookingModal';
import { MdVerified } from 'react-icons/md';
import { useQuery } from '@tanstack/react-query';
import ProductsCards from './ProductsCards';


const Products = () => {
    const { data: productss = [] } = useQuery({
        queryKey: ['productss'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/products');
            const data = await res.json();
            return data;
        }
    })
    console.log(productss);

    return (
        <div className='lg:grid md:grid justify-center gap-5 lg:grid-cols-3 md:grid-cols-2 px-3'>
            {
                productss.map(product =>
                    <ProductsCards
                        key={product._id}
                        product={product}
                    ></ProductsCards>
                )

            }
        </div>
    );
};

export default Products;