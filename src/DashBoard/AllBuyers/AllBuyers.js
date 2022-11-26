import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllBuyers = () => {
    const { data: allBuyers = [] } = useQuery({
        queryKey: ['allBuyers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users/buyer');
            const data = await res.json();
            return data;
        }
    })
    console.log(allBuyers);

    return (
        <div className='py-12 my-5'>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Job</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allBuyers.map(allBuyer =>
                                <tr>

                                    <td>{allBuyer.name} </td>
                                    <td>{allBuyer.email} </td>
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

export default AllBuyers;