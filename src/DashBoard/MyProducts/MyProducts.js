import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext);

    const { data: myProductss = [], refetch } = useQuery({
        queryKey: ['myProductss'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/products?email=${user.email}`);
            const data = await res.json();
            return data;
        }
    })

    console.log(myProductss);

    return (
        <div className='py-12 my-5'>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>

                            </th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            myProductss.map(myProduct =>
                                <tr>
                                    <th>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={myProduct.productImage} alt="" />

                                            </div>
                                        </div>
                                    </th>
                                    <td>
                                        {myProduct.productName}
                                    </td>
                                    <td>
                                        {myProduct.sellingPrice}
                                    </td>
                                    <td>
                                        <button className="btn btn-success btn-xs">Advertise</button>
                                    </td>
                                    <th>
                                        <button className="btn btn-secondary btn-xs">Sold</button>
                                    </th>
                                </tr>
                            )
                        }


                    </tbody>


                </table>
            </div>

        </div>
    );
};

export default MyProducts;