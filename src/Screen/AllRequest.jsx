import React, { useState, useEffect } from 'react'
// import {  doc} from 'firebase/firestore';
// import { databas } from '../config/Database/Database';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { db } from '../config/Database/Database';
import { doc, updateDoc, collection, getDocs } from 'firebase/firestore';

function AllRequest() {
    const [approvalStatus, setApprovalStatus] = useState(null);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // const fetchData = async () => {
        // //   const userId = 'yourUserId'; // Replace with the actual user ID
        //   const dbRef = ref(firestoredatabase);

        //   try {
        //     const snapshot = await get(child(dbRef, `users/`));
        //     if (snapshot.exists()) {
        //       setData(Object.values(snapshot.val()));
        //       console.log(data)

        //     } else {
        //       console.log('No data available');
        //     }
        //     setLoading(false);
        //   } catch (error) {
        //     console.error('Error fetching data from Realtime Database:', error);
        //   }
        // };

        // fetchData();


        //     const dbRef = ref(getDatabase());
        // get(child(dbRef, `users/`)).then((snapshot) => {
        //   if (snapshot.exists()) {
        //     console.log(snapshot.val());
        //   } else {
        //     console.log("No data available");
        //   }
        // }).catch((error) => {
        //   console.error(error);
        // });




        fetchData();
    }, []);

    const fetchData = async () => {
        // const db = getFirestore();
        const collectionRef = collection(db, 'Receiver/'); // Replace with your actual collection name

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

    const handleUpdateData = async (id) => {
        // const db = getFirestore();
        const docRef = doc(db, 'yourCollectionName', id); // Replace with your actual collection name

        try {
            await updateDoc(docRef, { /* Update your data fields here */ });
            console.log('Data updated successfully');
        } catch (error) {
            console.error('Error updating data in Firestore:', error);
        }
    };

    return (
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
                                    <div className="mb-4">
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
                                    </div>
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


    );
}

export default AllRequest