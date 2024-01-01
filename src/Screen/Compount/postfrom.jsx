import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { storage } from '../../config/Database/Database';
import { databas } from '../../config/Database/Database';
import { ref as sref, uploadBytes, getDownloadURL } from "firebase/storage";

import { ref, push, set } from 'firebase/database';

const PostForm = () => {
  const [postData, setPostData] = useState({
    title: '',
    description: '',

  });
  const [filePath, setFilePath] = useState("");

  let [picture, setpicture] = useState('')

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





    const customerRef = ref(databas, 'ImagesPost/');
    const customerKey = push(customerRef).key;
    // console.log(customerKey)


    await set(ref(databas, 'ImagesPost/' + customerKey), {
      title: postData.title,
      description: postData.description,
      image: picture,
      id: customerKey

    }).then(() => {
      // alert('Data Saved Successfully!')
      toast.success('Data Save', {
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
      setpicture('')

      // navigate('/',{replace:true})


    }).catch((e) => {
      // alert(e)
      toast.error(e.toString, {
        position: 'top-right', // Set the position of the toast
        autoClose: 3000, // Set the duration for which the toast will be visible (in milliseconds)
        hideProgressBar: false, // Show or hide the progress bar
        closeOnClick: true, // Close the toast when clicked
        pauseOnHover: true, // Pause the timer when hovered
        draggable: true, // Make the toast draggable
        progress: undefined, // Disable the built-in progress bar
      });

    })
  };



  const handleFileChange = async (event) => {
    const file = event.target.files[0];

    // const filePath = URL.createObjectURL(file);

    setFilePath(filePath);

    console.log(file)



    if (!file) {
      return;
    }

    // Create a reference to the file in the Cloud Storage bucket.
    const storageRef = sref(storage, 'Images/' + file.name);

    // Upload the file to Cloud Storage.
    const uploadTask = uploadBytes(storageRef, file);

    // Get the download URL of the uploaded file.
    const bytes = new Uint8Array([0x48, 0x65, 0x6c, 0x6c, 0x6f, 0x2c, 0x20, 0x77, 0x6f, 0x72, 0x6c, 0x64, 0x21]);
    uploadBytes(storageRef, bytes).then((snapshot) => {
      // setpicture()
      //   alert('uploaded');
      toast.success('uploaded', {
        position: 'top-right', // Set the position of the toast
        autoClose: 3000, // Set the duration for which the toast will be visible (in milliseconds)
        hideProgressBar: false, // Show or hide the progress bar
        closeOnClick: true, // Close the toast when clicked
        pauseOnHover: true, // Pause the timer when hovered
        draggable: true, // Make the toast draggable
        progress: undefined, // Disable the built-in progress bar
      });
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


    getDownloadURL(storageRef)
      .then((url) => {
        // alert(url)
        setpicture(url)
        // Insert url into an <img> tag to "download"
      })
  }
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
            Image selet
          </label>
          <input type='file' name='image' required onChange={handleFileChange} className='w-[90%] p-2 my-6 h-14 rounded-sm border border-gray-300 mx-auto block' placeholder='image url' />

        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Post
        </button>
      </form>
    </div>
  );
}

export default PostForm
