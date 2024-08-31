// 'use client';
// import tableRowStyles from './TableRow.module.css';

// interface TableRowProps {
//     className?: string;
//     trackingId: number;
//     productName: string;
//     productImage: string;
//     customer: string;
//     date: string;
//     amount: number;
//     paymentMode: string;
//     status: string;
// }

// const TableRow: React.FC<TableRowProps> = ({ className, trackingId, productName, productImage, customer, date, amount, paymentMode, status }) => {
//     const formattedDate = new Intl.DateTimeFormat('en-GB').format(new Date(date));

//     return (
//             <tr className={`flex justify-between items-center `}>
//                 <td>#{trackingId}</td>
//                 <td >
//                     <div className={`flex justify-start items-center ${tableRowStyles['product-info-wrap']}`}>
//                         <img src={productImage} />
//                         <p>{productName}</p>
//                     </div>
//                 </td>
//                 <td>{customer}</td>
//                 <td>{formattedDate}</td>
//                 <td>${amount}</td>
//                 <td>{paymentMode}</td>
//                 <td>{status}</td>
//                 <td>
//                     <div className={tableRowStyles.btns}>
//                         <button>
//                             <img src='/tableRow/edit.svg' />
//                         </button>
//                         <button>
//                             <img src='/tableRow/trash.svg' />
//                         </button>
//                     </div>
//                 </td>
//             </tr>
//     );
// }

// export default TableRow;


'use client';
import tableRowStyles from './TableRow.module.css';

interface TableRowProps {
    className?: string;
    trackingId: number;
    productName: string;
    productImage: string;
    customer: string;
    date: string;
    amount: number;
    paymentMode: string;
    status: string;
}

const TableRow: React.FC<TableRowProps> = ({
    className,
    trackingId,
    productName,
    productImage,
    customer,
    date,
    amount,
    paymentMode,
    status
}) => {
    const formattedDate = new Intl.DateTimeFormat('en-GB').format(new Date(date));

    return (
        <tr className={`${className} ${tableRowStyles['table-row']}`}>
            <td className="py-4 px-2">
                <div className="flex flex-col items-start">
                    <span>#{trackingId}</span>
                </div>
            </td>
            <td className="py-4 px-2">
                <div className="flex items-center">
                    <img src={productImage} alt={productName} className="w-8 h-8" />
                    <p>{productName}</p>
                </div>
            </td>
            <td className="py-4 px-2">{customer}</td>
            <td className="py-4 px-2">{formattedDate}</td>
            <td className="py-4 px-2">${amount}</td>
            <td className="py-4 px-2">{paymentMode}</td>
            <td className="py-4 px-2">{status}</td>
            <td className="py-4 px-2">
                <div className={tableRowStyles.btns}>
                    <button className="mr-2">
                        <img src='/tableRow/edit.svg' alt="Edit" />
                    </button>
                    <button>
                        <img src='/tableRow/trash.svg' alt="Delete" />
                    </button>
                </div>
            </td>
        </tr>
    );
}

export default TableRow;