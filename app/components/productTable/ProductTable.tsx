import { useState } from "react";
import TableRow from "../tableRow/TableRow";
import productData from "../../../sample_dataset_final_update.json";

interface ProductTableProps {
    className?: string;
}

const ProductTable: React.FC<ProductTableProps> = ({ className }) => {
    return (
        <div className={className}>
            <table className='w-full'>
                <thead>

                </thead>
                <tbody>
                    {productData.map((product) => (
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
        </div>
    )
}

export default ProductTable;