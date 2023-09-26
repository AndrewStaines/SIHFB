import React, { useState, useEffect } from 'react';
import img from '../assets/6884036.jpg'
import axios from 'axios';
function Login() {
    const [data, setData] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:2000/api/items')
    .then( (response)=>{
      console.log(response.data);
      setData(response.data)
    })
    .catch(function (error) {
      alert(error.response.data)
      console.log(error);
    });
  }, []);
  const [com,setCom]=useState("");
  const handleOnSubmit = async (e) => {
		e.preventDefault();
		let result = await fetch(
		'http://localhost:2000/register', {
			method: "post",
      body: JSON.stringify({ com }),
			headers: {
				'Content-Type': 'application/json'
			}
		})  
		result = await result.json();
    if(result){
      alert("Your comments are sent...");
      setCom("")
    }
		
	}
  return (
//     <>
//     <h1>Ministry Of Ayush</h1>
//     <div className='cont'>
//       <h2>Approvals:</h2>
//       <ul type='none'>
//         {data.map((item) => (
//           <li key={item._id}>
//             {/* <h2>{item.abstract}</h2> */}
//             <h4>Rating:</h4>
//             <h3 className='para'>{item.rat}</h3>
//             <h4>Domain:</h4>
//             <h3 className='para'>{item.dom}</h3>
//             {/* <button onClick={()=>handleDownload(item.file.data,item.dom)} className='b2'>Download File</button> */}
//             <input type="button" value="Approve" className='bg-[#4461F2] text-xl px-6 py-3 font-bold my-12 rounded-lg w-full text-white shadow-xl cursor-pointer hover:shadow-[#4461f280]' onClick={()=>handleDownload(item.file.data,item.dom)} />
//             <div class="mb-2">
//   <label for="exampleFormControlTextarea1" class="form-label">Comments</label><br/>
//   <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={com} onChange={(e) => setCom(e.target.value)}></textarea>
// </div>
// 						<div className='button'>
//                         <input type="button" value="Post" className='bg-[#4461F2] text-xl px-6 py-3 font-bold my-12 rounded-lg w-full text-white shadow-xl cursor-pointer hover:shadow-[#4461f280]' onClick={handleOnSubmit} />
//             <h6>------------------------------------------------------------------------------------</h6>
// 						</div>
//           </li>
//         ))}
//       </ul>
//     </div>
//     </>
<> 
<div className='flex w-screen h-screen overflow-y-hidden'>
            <div className=' w-4/5 h-full '>
            <h1 className='absolute mt-52 ml-48 text-white'>Ministry Of Ayush</h1>
                <img src={img} alt="" className='mt-72 ml-10 absolute h-1/2 border-2 rounded-full'/>
                <div className='h-full w-6/6 bg-[#4461F2] ' />
            </div>
            <div className='flex  w-3/5 h-4/5 items-center justify-center border-solid border-4 border-blue-500 ml-52 mt-32 mr-40 relative'>
            
        <ul className='h-full overflow-scroll m-12 p-2' id='scroll'>
        <h2>Approvals:</h2>
        {data.map((item) => (
          <li key={item._id}>
            {/* <h2>{item.abstract}</h2> */}
            <h4>Rating:</h4>
            <h3 className='para'>{item.rating}</h3>
            <h4>Domain:</h4>
            <h3 className='para'>{item.domain}</h3>
            {/* <button onClick={()=>handleDownload(item.file.data,item.dom)} className='b2'>Download File</button> */}
            <div class="mb-2">
  <label for="exampleFormControlTextarea1" class="form-label ">Comments</label><br/>
  <textarea class="form-control border-8 border-blue-500" id="exampleFormControlTextarea1" rows="3" value={com} onChange={(e) => setCom(e.target.value)}></textarea>
</div>
						<div className='button'>
                        <input type="button" value="Post" className='bg-[#4461F2] text-xl px-6 py-3 font-bold my-12 rounded-lg w-full text-white shadow-xl cursor-pointer hover:shadow-[#4461f280]' onClick={handleOnSubmit} />
            <h6>------------------------------------------------------------------------------------</h6>
						</div>
          </li>
        ))}
        </ul>
            </div>
        </div></>


  );
}

export default Login