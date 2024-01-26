import React, { useMemo, useState, useEffect } from 'react';
import Loading from './Loading';
import { Table } from '../Components/index';
import Home from './Home'
import deleteicon from '../assets/delete.png'
import editicon from '../assets/pen.png'



const gradientColor = "linear-gradient(#6EB3CB, #408BA4)";

export const Students = () => {
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchStudentData = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      const filteredData = data?.map((user) => ({
        id: '20EBKCS'+user?.id,
        name: user?.name,
        branch: user?.username,
        email: user?.email,
        placed: "yes",
        edit:(
          <div className="flex items-center">
            <img src={editicon} className="h-[25px] w-[25px] cursor-pointer" alt="Edit Icon" />
            <img src={deleteicon} className="h-[25px] w-[25px] cursor-pointer ml-2" alt="Delete Icon" />
          </div>
        ),
      }));
      setStudents(filteredData);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchStudentData();
  }, []);

  const columns = useMemo(
    () => [
      { Header: "ID", accessor: "id" },
      { Header: "Name", accessor: "name" },
      { Header: "Branch", accessor: "branch" },
      { Header: "Email", accessor: "email" },
      { Header: "Placed", accessor: "placed" },
      { Header: "Edit", accessor: "edit" },

    ],
    []
  );

  const handleDelete = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <>
      <div className="container mx-auto mt-6">
        <h1 className="text-4xl font-bold mb-6 flex items-center justify-center" style={{ color: '#005f99'  }}>
          Student Placement Data
        </h1>

        {isLoading ? (
          <p>
            <Loading />
          </p>
        ) : (
          students.length ? (
            <Table columns={columns} data={students} onDelete={handleDelete} />
          ) : (
            <Home />
          )
        )}
      </div>
    </>
  );
};
