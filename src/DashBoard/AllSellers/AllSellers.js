import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllSellers = () => {

    const { data: allSellers = [], refetch } = useQuery({
        queryKey: ['allSellers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users/seller');
            const data = await res.json();
            return data;
        }
    })
    console.log(allSellers);


    const handleReport = (id) => {
        fetch(`http://localhost:5000/users/seller/${id}`, {
            method: 'PUT',

        })
            .then(res => res.json())
            .then(data => {

                console.log(data)
                if (data.modifiedCount > 0) {
                    toast.success('Verified successfully')
                    refetch();
                }
            })
    }

    return (
        <div className='py-12 my-5'>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Job</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allSellers.map(allSeller =>
                                <tr>

                                    <td>{allSeller.name} </td>
                                    <td>{allSeller.email} </td>
                                    <th>
                                        {allSeller.verify ? <p>Verified</p> : <button onClick={() => handleReport(allSeller._id)} className="btn bg-green-500 text-white border-none btn-xs">Verify</button>}
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

export default AllSellers;