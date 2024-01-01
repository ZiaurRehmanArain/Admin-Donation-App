import React, { useState } from 'react'
import PostForm from './Compount/postfrom'
import TextForm from './Compount/Textfrom'
import VideoForm from './Compount/VideoFrom'

function PostScreen() {
  let [formtype, setfromtype] = useState('imageform')

  return (

    <>

      <div className="flex justify-between max-w-screen-lg mx-auto">

        <button onClick={() => setfromtype('textfrom')} className="bg-gray-50 hover:bg-gray-200 text-black font-bold py-2 px-4 rounded my-3">
          Text from
        </button>

        <button onClick={() => setfromtype('imagefrom')} className="bg-gray-50 hover:bg-gray-200 text-black font-bold py-2 px-4 rounded my-3">
          Imge From
        </button>

        <button onClick={() => setfromtype('videofrom')} className="bg-gray-50 hover:bg-gray-200 text-black font-bold py-2 px-4 rounded my-3">
          Video from
        </button>
      </div>

      {


        formtype == 'textfrom' ?
          <TextForm /> :
          formtype == 'imagefrom' ?
            <PostForm /> :
            formtype == 'videofrom' ?
              <VideoForm /> :  <PostForm /> 


      }




    </>
  )
}

export default PostScreen