import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { collection, query, orderBy, getDocs, where } from 'firebase/firestore';
import { db } from '../config/Database/Database';
function ApprovalRequest() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchData = async () => {
            //   const db = getFirestore();
            const collectionRef = collection(db, 'Receiver/');

            const q = query(collectionRef, where('status', '==', 'approve'));// Replace with your actual collection name

            const orderedQuery = query(collectionRef, orderBy('fieldName', 'asc')); // Replace 'fieldName' with the field you want to order by


            try {
                const snapshot = await getDocs(q);
                const dataList = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                setData(dataList);
                setLoading(false);
                console.log(data)
            } catch (error) {
                console.error('Error fetching data from Firestore:', error);
            }
        };

        fetchData();
        //       try {
        //         const snapshot = await getDocs(orderBy());
        //         const dataList = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        //         setData(dataList);
        //         setLoading(false);
        //       } catch (error) {
        //         console.error('Error fetching data from Firestore:', error);
        //       }
        //     };

        //     fetchData();
    }, []);
    return (
        // <div className='flex flex-wrap'>


        // <div className="max-w-md mt-[100px] w-[500px] my-auto mx-auto bg-white rounded-md overflow-hidden shadow-md">
        //         <div className="p-4">
        //           {/* Name and Title */}
        //           <div className="mb-4">
        //             <h2 className="text-xl font-bold">John Doe</h2>
        //             <p className="text-gray-600">Software Engineer</p>
        //           </div>

        //           {/* Category */}
        //           <div className="mb-4">
        //             <span className="text-sm font-semibold text-gray-600">Category:</span>
        //             <span className="ml-2 text-sm text-blue-500">Technology</span>
        //           </div>

        //           <div className="mb-4">
        //             <span className="text-sm font-semibold text-gray-600">Status:</span>
        //             <span className="ml-2 text-sm text-blue-500">Technology</span>
        //           </div>


        //         </div>


        //       </div>







        // </div>



        <div className='flex flex-wrap'>
            <ToastContainer />



            {loading ? (
                <p>Loading...</p>
            ) : data.length === 0 ? (
                <p>No data available.</p>
            ) : (
                <div className="max-w-md mt-[100px] w-[500px] my-auto mx-auto bg-white rounded-md overflow-hidden shadow-md">

                    {data.map((item) => (

                        <>
                            {/* <li key={item.id}>{JSON.stringify(item.id)}</li> */}

                            <div className="p-4">
                                {/* Name and Title */}
                                <div className="mb-4">
                                    <h2 className="text-xl font-bold">{item.name}</h2>
                                    {/* <p className="text-gray-600">{item.cnic}</p> */}
                                </div>

                                {/* Category */}
                                <div className="mb-4">
                                    <span className="text-sm font-semibold text-gray-600">Cnic:</span>
                                    <span className="ml-2 text-sm text-gray-500">{item.cnic}</span>
                                </div>
                                <div className="mb-4">
                                    <span className="text-sm font-semibold text-gray-600">phone Number:</span>
                                    <span className="ml-2 text-sm text-blue-500">{item.phoneNumber}</span>
                                </div>
                                <div className="mb-4">
                                    <span className="text-sm font-semibold text-gray-600">Category:</span>
                                    <span className="ml-2 text-sm text-blue-500">{item.cetagory}</span>
                                </div>
                                <div className="mb-4">
                                    <span className="text-sm font-semibold text-gray-600">Category Detail:</span>
                                    <span className="ml-2 text-sm text-blue-500">{item.cetagoryDeial}</span>
                                </div>

                                {/* Approval Dropdown */}
                                {/* <div className="mb-4">
                                            <label htmlFor="approvalStatus" className="text-sm font-semibold text-gray-600 block">
                                                Approval Status:
                                            </label>
                                            <select
                                                id="approvalStatus"
                                                name="approvalStatus"
                                                onChange={(e) => handleApprovalChange(e.target.value, item.id)}
                                                value={item.status || ''}
                                                className="mt-1 p-2 w-full border rounded-md"
                                            >
                                                <option value="" disabled>
                                                    Select Approval Status
                                                </option>
                                                <option value="approve">Approve</option>
                                                <option value="reject">Reject</option>
                                            </select>
                                        </div> */}
                            </div>


                        </>
                    ))}
                </div>
            )}






            {/* Action Buttons */}
            {/* <div className="flex justify-end p-4 bg-gray-100">
              <button className="bg-green-500 text-white px-4 py-2 rounded-md mr-2">
                Save
              </button>
              <button className="bg-red-500 text-white px-4 py-2 rounded-md">
                Delete
              </button>
                                    </div> */}

        </div>

    )
}

export default ApprovalRequest