import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { databas } from '../../config/Database/Database';
import { ref, push, set } from 'firebase/database';

const VideoForm = () => {
  const [postData, setPostData] = useState({
    title: '',
    description: '',
    videoUrl: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your logic to handle the form submission (e.g., API call, state update, etc.)
    console.log('Submitted data:', postData);

    if (postData.title == '') {
      toast.error('please enter title', {
        position: 'top-right', // Set the position of the toast
        autoClose: 3000, // Set the duration for which the toast will be visible (in milliseconds)
        hideProgressBar: false, // Show or hide the progress bar
        closeOnClick: true, // Close the toast when clicked
        pauseOnHover: true, // Pause the timer when hovered
        draggable: true, // Make the toast draggable
        progress: undefined, // Disable the built-in progress bar
      });
    } else if (postData.description == '') {

      toast.error('enter description', {
        position: 'top-right', // Set the position of the toast
        autoClose: 3000, // Set the duration for which the toast will be visible (in milliseconds)
        hideProgressBar: false, // Show or hide the progress bar
        closeOnClick: true, // Close the toast when clicked
        pauseOnHover: true, // Pause the timer when hovered
        draggable: true, // Make the toast draggable
        progress: undefined, // Disable the built-in progress bar
      });
    } else if (postData.videoUrl == '') {

      toast.error('enter vide url', {
        position: 'top-right', // Set the position of the toast
        autoClose: 3000, // Set the duration for which the toast will be visible (in milliseconds)
        hideProgressBar: false, // Show or hide the progress bar
        closeOnClick: true, // Close the toast when clicked
        pauseOnHover: true, // Pause the timer when hovered
        draggable: true, // Make the toast draggable
        progress: undefined, // Disable the built-in progress bar
      });
    } else {



      const customerRef = ref(databas, 'VideoPost/');
      const customerKey = push(customerRef).key;
      // console.log(customerKey)





      await set(ref(databas, 'VideoPost/' + customerKey), {
        title: postData.title,
        description: postData.description,
        videoUrl: postData.videoUrl,

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
        setPostData({
          title: '',
          description: "",
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
      <h2 className="text-2xl font-bold mb-4">Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-600">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={postData.title}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-600">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={postData.description}
            onChange={handleChange}
            rows="4"
            className="mt-1 p-2 w-full border rounded-md"
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium text-gray-600">
            Video URL
          </label>
          <input
            type="text"
            id="image"
            name="videoUrl"
            value={postData.videoUrl}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        <button
          onClick={handleSubmit}
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default VideoForm;
