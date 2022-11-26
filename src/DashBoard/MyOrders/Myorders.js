import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Myorders = () => {
    const { data: myOrders = [] } = useQuery({
        queryKey: ['myOrders'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/booking');
            const data = await res.json();
            return data;
        }
    })

    return (
        <div className='py-12 my-5'>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Product Image</th>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>Meeting Location</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            myOrders.map(myOrder =>
                                <tr>
                                    <th>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={myOrder.productImage} />
                                            </div>
                                        </div>
                                    </th>
                                    <td>{myOrder.productName} </td>
                                    <td>{myOrder.productPrice}</td>
                                    <td>{myOrder.meetingLocation}</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">details</button>
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

export default Myorders;