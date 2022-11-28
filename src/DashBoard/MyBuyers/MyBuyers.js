
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';



const MyBuyers = () => {
    const { user } = useContext(AuthContext);

    const { data: myBuyers = [] } = useQuery({
        queryKey: ['myBuyers'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/buyer/${user.email}`);
            const data = await res.json();
            return data;
        }
    })
    console.log(myBuyers);

    return (
        <div className='py-12 my-5'>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>

                            </th>
                            <th>Buyer Name</th>
                            <th>Buyer Email</th>
                            <th>Buyer Phone</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            myBuyers.map(buyer =>
                                <tr>
                                    <th>

                                    </th>
                                    <td>
                                        {buyer.buyerName}
                                    </td>
                                    <td>                               {buyer.email}

                                    </td>
                                    <td>{buyer.userPhone}</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">details</button>
                                    </th>
                                </tr>)
                        }


                    </tbody>


                </table>
            </div>

        </div>
    );
};

export default MyBuyers;