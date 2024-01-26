import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const StudentDetail = () => {
  const { studentId } = useParams();

  const [studentDetail, setStudentDetail] = useState({});
  const apiData = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${studentId}`);
      if (response.ok) {
        const data = await response.json();
        setStudentDetail(data);
      } else {
        console.error(`Failed to fetch data. Status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    apiData();
  }, [studentId]);

  return (
    <>
  <div className='p-10 font-bold text-white text-5xl flex items-center  justify-center'  style={{ color: '#005f99'  }}>
Student's complete details
</div>

    <div className='flex flex-col md:flex-row items-stretch p-5 gap-3'>

      {/* Left side - Student details */}
      <div className='p-3 md:w-[50%] text-white ' style={{ background: '#005f99'  }} >
        <h1 className='text-white flex justify-center font-bold text-3xl  p-2'>Student Data</h1>

        <div className='bg-white  shadow-lg p-6 w-full'>
          <div className='flex items-center justify-center mb-4'>
            <div className='bg-blue-100 rounded-full h-20 w-20 overflow-hidden shadow-md'>
              <img
                className='h-full w-full object-cover rounded-full'
                src="https://media.gettyimages.com/id/1155570239/photo/portrait-of-actor.jpg?s=612x612&w=0&k=20&c=3YiQq2d2kQmfsFlSrQBbpI7nPa4dwwpb4z7BLYrn09Q="
                alt="Student"
              />
            </div>
          </div>

          <p className='text-black mb-4 flex justify-center'>{"20EBKCS123" || "Loading"}</p>

          <table className='w-full text-black'>
            <tbody>

<tr className='border-b my-8  leading-12'>
  <td className='text-xl font-bold'>Name:</td>
  <td className='text-xl'>{studentDetail?.name || "Loading"}</td>
</tr>
<tr className='border-b my-8 leading-12'>
  <td className='text-xl font-bold'>UserName:</td>
  <td className='text-xl'>{studentDetail?.username || "Loading"}</td>
</tr>
<tr className='border-b my-8'>
  <td className='text-xl font-bold'>Email:</td>
  <td className='text-xl'>{studentDetail?.email || "Loading"}</td>
</tr>
<tr className='border-b my-8'>
  <td className='text-xl font-bold'>Phone No.:</td>
  <td className='text-xl'>{studentDetail?.phone || "Loading"}</td>
</tr>
<tr className='border-b my-8'>
  <td className='text-xl font-bold'>Branch:</td>
  <td className='text-xl'>{studentDetail?.branch || "Computer Science"}</td>
</tr>
<tr className='border-b my-8'>
  <td className='text-xl font-bold'>Domain:</td>
  <td className='text-xl'>{studentDetail?.domain || "Web Development"}</td>
</tr>
<tr className='border-b my-8'>
  <td className='text-xl font-bold'>Batch:</td>
  <td className='text-xl'>{studentDetail?.batch || "2020-24"}</td>
</tr>
<tr className='border-b my-8'>
  <td className='text-xl font-bold'>10th marks:</td>
  <td className='text-xl'>{studentDetail?.marks10 || "90 %"}</td>
</tr>
<tr className='border-b my-8'>
  <td className='text-xl font-bold'>12th marks:</td>
  <td className='text-xl'>{studentDetail?.marks12 || "98 %"}</td>
</tr>
<tr className='border-b my-8'>
  <td className='text-xl font-bold'>Btech Marks:</td>
  <td className='text-xl'>{studentDetail?.btechMarks || "9.8 CGPA"}</td>
</tr>
<tr className='border-b my-8'>
  <td className='text-xl font-bold'>Enrollment ID:</td>
  <td className='text-xl'>{studentDetail?.enrollmentId || "BKB_20EBKCS000"}</td>
</tr>
<tr className='border-b my-8'>
  <td className='text-xl font-bold'>Isplaced:</td>
  <td className='text-xl'>{studentDetail?.isPlaced || "NO"}</td>
</tr>
<tr className='border-b my-8'>
  <td className='text-xl font-bold'>Isplaced:</td>
  <td className='text-xl'>{studentDetail?.isPlaced || "NO"}</td>
</tr>
<tr className='border-b my-8'>
  <td className='text-xl font-bold'>Isplaced:</td>
  <td className='text-xl'>{studentDetail?.isPlaced || "NO"}</td>
</tr>
<tr className='border-b my-8'>
  <td className='text-xl font-bold'>Isplaced:</td>
  <td className='text-xl'>{studentDetail?.isPlaced || "NO"}</td>
</tr>
<tr className='border-b my-8'>
  <td className='text-xl font-bold'>Isplaced:</td>
  <td className='text-xl'>{studentDetail?.isPlaced || "NO"}</td>
</tr>
<tr className='border-b my-8'>
  <td className='text-xl font-bold'>Isplaced:</td>
  <td className='text-xl'>{studentDetail?.isPlaced || "Loading"}</td>
</tr>


            </tbody>
          </table>
        </div>
      </div>

      {/* Right side - Resume */}
      <div className='p-3 md:w-[50%]  text-white' style={{ background: '#005f99'  }} >
        <h2 className='text-white flex justify-center font-bold text-3xl rounded-md p-2'>Resume</h2>
        <div className='bg-white rounded-md shadow-lg p-6 w-full'>
          <iframe
            title="resume"
            src="https://drive.google.com/file/d/1AWxKfjGnv5p33zt9inSJQgjij_FCL_Tq/preview"
            className='w-full h-[500px] md:h-[1000px] rounded-md'
          ></iframe>
        </div>
      </div>
    </div>
    </>
  );
};
