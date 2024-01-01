import React, { useState } from 'react'
import { ref, push, set } from 'firebase/database';
import { ToastContainer, toast } from 'react-toastify';
import { databas } from '../config/Database/Database';
import 'react-toastify/dist/ReactToastify.css';

function TermAndCondition() {
  const [formData, setFormData] = useState({
    termsAndConditions: '',
  });

  const handleChange = async (e) => {
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



    if (formData.termsAndConditions == '') {
      toast.error('please enter terms And Conditions', {
        position: 'top-right', // Set the position of the toast
        autoClose: 3000, // Set the duration for which the toast will be visible (in milliseconds)
        hideProgressBar: false, // Show or hide the progress bar
        closeOnClick: true, // Close the toast when clicked
        pauseOnHover: true, // Pause the timer when hovered
        draggable: true, // Make the toast draggable
        progress: undefined, // Disable the built-in progress bar
      });
    } else {


      await set(ref(databas, 'TermAndCondition/termsAndConditions'), {
        termsAndConditions: formData.termsAndConditions,




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
      <h2 className="text-2xl font-bold mb-4">Terms and Conditions</h2>
      <form onSubmit={handleSubmit}>
        {/* Terms and Conditions */}
        <div className="mb-4">
          <label htmlFor="termsAndConditions" className="block text-sm font-medium text-gray-600">
            Terms and Conditions
          </label>
          <textarea
            id="termsAndConditions"
            name="termsAndConditions"
            value={formData.termsAndConditions}
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

export default TermAndCondition