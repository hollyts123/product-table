'use client';
import { useState } from "react";
import TableRow from "../tableRow/TableRow";
import productData from "../../../sample_dataset_final_update.json";
import Pagination from '../pagination/Pagination';
import TableControls from '../tableControls/TableControls';

interface ProductTableProps {
    className?: string;
}

const ProductTable: React.FC<ProductTableProps> = ({ className }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);

    const numberOfPages = Math.ceil(productData.length / itemsPerPage);
    const records = productData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const handleItemsPerPageChange = (newItemsPerPage: number) => {
        setItemsPerPage(newItemsPerPage);
        setCurrentPage(1);
    };

    return (
        <div className={className}>
            <TableControls
                itemsPerPage={itemsPerPage}
                onItemsPerPageChange={handleItemsPerPageChange}
            />

            {/* Table */}
            <table className='w-full dark:text-[var(--text-light)]'>
                <thead>
                    <tr>
                        <th className="py-3 pl-7">Tracking ID</th>
                        <th className="py-3 pl-8">
                            <div className="flex justify-between">
                                <p>Product</p>
                                <img src='/productTable/sort.svg' className="pr-8" />
                            </div>
                        </th>
                        <th className="py-3 pr-8">
                            <div className="flex justify-between">
                                <p>Customer</p>
                                <img src='/productTable/sort.svg' />
                            </div>
                        </th>
                        <th className="py-3">
                            <div className="flex justify-between">
                                <p>Date</p>
                                <img src='/productTable/sort.svg' className="pr-6" />
                            </div>
                        </th>
                        <th className="py-3">
                            <div className="flex">
                                <p>Amount</p>
                            </div>
                        </th>
                        <th className="py-3 pr-10">Payment Mode</th>
                        <th className="py-3">
                            <div className="flex justify-between">
                                <p>Status</p>
                                <img src='/productTable/sort.svg' className="pr-6" />
                            </div>
                        </th>
                        <th className="py-3">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {records.map((product) => (
                        <TableRow
                            key={product["Tracking ID"]}
                            trackingId={product["Tracking ID"]}
                            productImage={product["Product Image"]}
                            productName={product["Product Name"]}
                            customer={product.Customer}
                            date={product.Date}
                            amount={product.Amount}
                            paymentMode={product["Payment Mode"]}
                            status={product.Status}
                        />
                    ))}
                </tbody>
            </table>

            {/* Pagination Controls */}
            <Pagination
                currentPage={currentPage}
                numberOfPages={numberOfPages}
                onPageChange={handlePageChange}
                className={`py-8`}
            />
        </div>
    );
};

export default ProductTable;