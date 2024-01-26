import React, { useMemo, useState } from 'react';
import { useTable, useGlobalFilter, useSortBy, usePagination } from 'react-table';
import { Link, useNavigate } from 'react-router-dom';
export const Table = ({ columns, data, deleteStudent }) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        state,
        setGlobalFilter,
        pageOptions,
        gotoPage,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageSize,
        setPageSize,
    } = useTable(
        { columns, data, initialState: { pageIndex: 0, pageSize: 10 } },
        useGlobalFilter,
        useSortBy,
        usePagination
    );

    const { globalFilter, pageIndex } = state;
    const navigate = useNavigate();


    return (
        <div className="bg-gray-100 p-6 ml-10 mr-10 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
                <div className="flex items-center space-x-4">
                    <span className="text-gray-600">Search:</span>
                    <div className="relative">
                        <i className="absolute top-3 left-3 text-gray-500 fas fa-search"></i>
                        <input
                            className="p-2 pl-10 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            value={globalFilter || ''}
                            onChange={(e) => setGlobalFilter(e.target.value)}
                            placeholder="Search..."
                        />
                    </div>
                </div>

                <div className="flex items-center space-x-4 ml-auto">
                    <span className="text-gray-600">Show:</span>
                    <select
                        className="p-2 border border-gray-300 rounded"
                        value={pageSize}
                        onChange={(e) => setPageSize(Number(e.target.value))}
                    >
                        {[10, 20, 50, 100].map((pageSizeOption) => (
                            <option key={pageSizeOption} value={pageSizeOption}>
                                {pageSizeOption}
                            </option>
                        ))}
                    </select>

                    <Link to="/add-student">
                        <button className="p-2 rounded bg-blue-500 text-white hover:bg-blue-600">
                            Add Entry
                        </button>
                    </Link>
                </div>
            </div>

            <table {...getTableProps()} className="w-full table-auto border border-gray-300">
                <thead className="bg-gray-200">
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th
                                    {...column.getHeaderProps(column.getSortByToggleProps())}
                                    className="p-4 text-left font-semibold "
                                >
                                    {column.render('Header')}
                                    <span className="ml-2">
                                        {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                                    </span>
                                </th>
                            ))}
                            <th className="p-4"></th>
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()} className="hover:bg-blue-100 " onClick={() => {
                                navigate(`/students/${Number(row?.id) + 1}`)
                            }}>
                                {row.cells.map((cell) => (
                                    <td {...cell.getCellProps()} className="p-4 border-t border-gray-300">
                                        {cell.render('Cell')}
                                    </td>
                                ))}
                              
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            <div className="mt-4 flex justify-between items-center">
                <div>
                    <span className="text-gray-600">
                        Page {pageIndex + 1} of {pageOptions.length}
                    </span>
                    <button
                        className="p-2 rounded bg-gray-200 hover:bg-gray-300"
                        onClick={() => gotoPage(0)}
                        disabled={!canPreviousPage}
                    >
                        {'<<'}
                    </button>
                    <button
                        className="p-2 rounded bg-gray-200 hover:bg-gray-300"
                        onClick={() => previousPage()}
                        disabled={!canPreviousPage}
                    >
                        {'<'}
                    </button>
                    <button
                        className="p-2 rounded bg-gray-200 hover:bg-gray-300"
                        onClick={() => nextPage()}
                        disabled={!canNextPage}
                    >
                        {'>'}
                    </button>
                    <button
                        className="p-2 rounded bg-gray-200 hover:bg-gray-300"
                        onClick={() => gotoPage(pageOptions.length - 1)}
                        disabled={!canNextPage}
                    >
                        {'>>'}
                    </button>
                </div>

                <div className="flex items-center space-x-2">
                    <span className="text-gray-600">Show</span>
                    <select
                        className="p-2 border border-gray-300 rounded"
                        value={pageSize}
                        onChange={(e) => {
                            setPageSize(Number(e.target.value));
                            gotoPage(0);
                        }}
                    >
                        {[10, 20, 50, 100].map((pageSizeOption) => (
                            <option key={pageSizeOption} value={pageSizeOption}>
                                {pageSizeOption}
                            </option>
                        ))}
                    </select>
                    <span className="text-gray-600">rows per page</span>
                </div>
                
            </div>
        </div>
    );
};