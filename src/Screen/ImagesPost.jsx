import React,{useEffect,useState} from 'react'
import {  ref, child, get } from "firebase/database";
import { databas } from '../config/Database/Database';
import Card from './Compount/Card';

function ImagesPost() {
    let [data,setdata]=useState()
    let [dataStatus,setdataStatus]=useState(false)

    useEffect( ()=>{
        fetchdata()
    },[dataStatus])


    let fetchdata=async ()=>{
        const dbRef =  ref(databas)
        await get(child(dbRef, `ImagesPost/`)).then((snapshot) => {
           if (snapshot.exists()) {
             console.log(Object.values(snapshot.val()));
             setdata(Object.values(snapshot.val()))
             setdataStatus(true)
             console.log(data)
           } else {
             console.log("No data available");
           }
         }).catch((error) => {
            setdataStatus(false)

           console.error(error);
         });
    }
  return (
    <div>



<div className="flex justify-center items-center min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">


        {dataStatus?
        
        data.map((item) => (
          <Card
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        )): <>Loading....</>}
      </div>
    </div>
    </div>
  )
}

export default ImagesPost