import React, { useState } from 'react'
import { ref, push, set } from 'firebase/database';
import { databas } from '../config/Database/Database';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function PrivacyPolicy() {
  const [formData, setFormData] = useState({
    privacyPolicy: '',
    termsOfService: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your logic to handle the form submission (e.g., API call, state update, etc.)
    console.log('Submitted data:', formData);



    const customerRef = ref(databas, 'TextPost/');
    const customerKey = push(customerRef).key;
    // console.log(customerKey)

    if (formData.privacyPolicy == '') {
      toast.error('please enter privacyPolicy', {
        position: 'top-right', // Set the position of the toast
        autoClose: 3000, // Set the duration for which the toast will be visible (in milliseconds)
        hideProgressBar: false, // Show or hide the progress bar
        closeOnClick: true, // Close the toast when clicked
        pauseOnHover: true, // Pause the timer when hovered
        draggable: true, // Make the toast draggable
        progress: undefined, // Disable the built-in progress bar
      });
    } else if (formData.termsOfService == '') {

      toast.error('enter termsOfService', {
        position: 'top-right', // Set the position of the toast
        autoClose: 3000, // Set the duration for which the toast will be visible (in milliseconds)
        hideProgressBar: false, // Show or hide the progress bar
        closeOnClick: true, // Close the toast when clicked
        pauseOnHover: true, // Pause the timer when hovered
        draggable: true, // Make the toast draggable
        progress: undefined, // Disable the built-in progress bar
      });
    } else {


      await set(ref(databas, 'PrivacyPolicy/customkeyterm'), {
        title: formData.privacyPolicy,
        description: formData.termsOfService,

        id: customerKey

      }).then(() => {
        //   alert('Data Saved Successfully!')

        toast.success('Data Saved Successfully', {
          position: 'top-right', // Set the position of the toast
          autoClose: 3000, // Set the duration for which the toast will be visible (in milliseconds)
          hideProgressBar: false, // Show or hide the progress bar
          closeOnClick: true, // Close the toast when clicked
          pauseOnHover: true, // Pause the timer when hovered
          draggable: true, // Make the toast draggable
          progress: undefined, // Disable the built-in progress bar
        });
        formData({
          privacyPolicy: '',
          termsOfService: "",
        })

        //   navigate('/',{replace:true})


      }).catch((e) => {
        //   alert(e)
        toast.error(e.toString(), {
          position: 'top-right', // Set the position of the toast
          autoClose: 3000, // Set the duration for which the toast will be visible (in milliseconds)
          hideProgressBar: false, // Show or hide the progress bar
          closeOnClick: true, // Close the toast when clicked
          pauseOnHover: true, // Pause the timer when hovered
          draggable: true, // Make the toast draggable
          progress: undefined, // Disable the built-in progress bar
        });

      })
    }



  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <ToastContainer />
      <h2 className="text-2xl font-bold mb-4">Privacy and Policy</h2>
      <form onSubmit={handleSubmit}>
        {/* Privacy Policy */}
        <div className="mb-4">
          <label htmlFor="privacyPolicy" className="block text-sm font-medium text-gray-600">
            Privacy Policy
          </label>
          <textarea
            id="privacyPolicy"
            name="privacyPolicy"
            value={formData.privacyPolicy}
            onChange={handleChange}
            rows="6"
            className="mt-1 p-2 w-full border rounded-md"
            required
          ></textarea>
        </div>

        {/* Terms of Service */}
        <div className="mb-4">
          <label htmlFor="termsOfService" className="block text-sm font-medium text-gray-600">
            Terms of Service
          </label>
          <textarea
            id="termsOfService"
            name="termsOfService"
            value={formData.termsOfService}
            onChange={handleChange}
            rows="6"
            className="mt-1 p-2 w-full border rounded-md"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default PrivacyPolicy