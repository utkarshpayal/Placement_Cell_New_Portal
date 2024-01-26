import React, { useMemo, useState, useEffect } from 'react';
import Loading from './Loading';
import { Table } from '../Components/index';
import Home from './Home'
import deleteicon from '../assets/delete.png'
import editicon from '../assets/pen.png'



const gradientColor = "linear-gradient(#6EB3CB, #408BA4)";



export const Companies = () => {

  const [companies, setCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);



  const apiData = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      const filteredData = data?.map((user) => ({
        companyName: user?.name,
        location: user?.name,
        post: user?.username,
        package: user?.email,
        Students: user?.id,
        edit: (
          <div className="flex items-center">
            <img src={editicon} className="h-[25px] w-[25px] cursor-pointer" alt="Edit Icon" />
            <img src={deleteicon} className="h-[25px] w-[25px] cursor-pointer ml-2" alt="Delete Icon" />
          </div>
        ),
      }));

      setCompanies(filteredData);

    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    apiData();
  }, []);
    
  const columns = useMemo(
    () => [
      { Header: 'Company Name', accessor: 'companyName' },
      { Header: 'Location', accessor: 'location' },
      { Header: 'Post', accessor: 'post' },
      { Header: 'Package', accessor: 'package' },
      { Header: 'Students Placed', accessor: 'Students' },
      { Header: 'Edit', accessor: 'edit' },

      
    ],
    []
  );

  const handleDelete = (companyName) => {
    setCompanies(companies.filter((company) => company.companyName !== companyName));
  };

  return (
    <>
        <div className="container mx-auto mt-6">
      <h1 className="text-4xl font-bold mb-6 flex items-center justify-center" style={{ color: '#005f99'  }}>
          Company Placement Data
        </h1>

        {isLoading ? (
          <p>
            <Loading />
          </p>
        ) : (
          companies.length ? (
        <Table columns={columns} data={companies} onDelete={handleDelete} />
        ) : (
            <Home />
          )
        )}
      </div>
    </>
  );
};
