


import React, { useState, useEffect } from 'react'
// import {  doc} from 'firebase/firestore';
// import { databas } from '../config/Database/Database';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { db } from '../config/Database/Database';
import { doc, updateDoc, collection, getDocs } from 'firebase/firestore';

function Donation() {
    const [approvalStatus, setApprovalStatus] = useState(null);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
       
        fetchData();
    }, []);

    const fetchData = async () => {
        // const db = getFirestore();
        const collectionRef = collection(db, 'Donation/'); // Replace with your actual collection name

        try {
            const snapshot = await getDocs(collectionRef);
            const dataList = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setData(dataList);
            console.log(data)
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data from Firestore:', error);
        }
    };
    const handleApprovalChange = async (status, id) => {
        setApprovalStatus(status);


        //   const db = getFirestore();
        const docRef = doc(db, 'Receiver/', id); // Replace with your actual collection name

        try {
            await updateDoc(docRef, { status: status });
            fetchData()
            toast.success('Data updated successfully', {
                position: 'top-right', // Set the position of the toast
                autoClose: 3000, // Set the duration for which the toast will be visible (in milliseconds)
                hideProgressBar: false, // Show or hide the progress bar
                closeOnClick: true, // Close the toast when clicked
                pauseOnHover: true, // Pause the timer when hovered
                draggable: true, // Make the toast draggable
                progress: undefined, // Disable the built-in progress bar
            });
            // console.log('Data updated successfully');
        } catch (error) {
            // console.error('Error updating data in Firestore:', error);
            toast.error(error.toString(), {
                position: 'top-right', // Set the position of the toast
                autoClose: 3000, // Set the duration for which the toast will be visible (in milliseconds)
                hideProgressBar: false, // Show or hide the progress bar
                closeOnClick: true, // Close the toast when clicked
                pauseOnHover: true, // Pause the timer when hovered
                draggable: true, // Make the toast draggable
                progress: undefined, // Disable the built-in progress bar
            });
        }


    };

    // const handleUpdateData = async (id) => {
    //     // const db = getFirestore();
    //     const docRef = doc(db, 'yourCollectionName', id); // Replace with your actual collection name

    //     try {
    //         await updateDoc(docRef, { /* Update your data fields here */ });
    //         console.log('Data updated successfully');
    //     } catch (error) {
    //         console.error('Error updating data in Firestore:', error);
    //     }
    // };

    return (




        <div >
            <ToastContainer />



            {loading ? (
                <p>Loading...</p>
            ) : data.length === 0 ? (
                <p>No data available.</p>
            ) : (

                <div className='flex flex-wrap'>
                    {data.map((item) => (

                        <>
                            {/* <li key={item.id}>{JSON.stringify(item.id)}</li> */}
                            <div className="max-w-md m-[5px] w-[380px]  bg-white rounded-md overflow-hidden shadow-md">

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

                                </div>

                            </div>

                        </>
                    ))}
                </div>
            )}

        </div>









    );
}

export default Donation