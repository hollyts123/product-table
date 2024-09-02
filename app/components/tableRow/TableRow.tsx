'use client';

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
    const getStatusClass = (status: string) => {
        switch (status) {
            case 'Delivered':
                return 'bg-[var(--status-delivered-bg)] text[var(--status-delivered-text)] py-3 px-4 rounded-3xl';
            case 'Process':
                return 'bg-[var(--status-process-bg)] text[var(--status-process-text)] py-3 px-4 rounded-3xl';
            case 'Cancelled':
                return 'bg-[var(--status-canceled-bg)] text[var(--status-canceled-text)] py-3 px-4 rounded-3xl';
            default:
                return 'bg-[var(--status-delivered-bg)] text[var(--status-delivered-text)] py-3 px-4 rounded-3xl';
        }
    };

    const formattedDate = new Intl.DateTimeFormat('en-GB').format(new Date(date));

    return (
        <tr className={`${className} odd:bg-[var(--bg-light-gray)]`}>
            <td className="py-4 pl-10">
                <div className="flex flex-col items-start">
                    <span>#{trackingId}</span>
                </div>
            </td>
            <td className="py-4 pl-8">
                <div className="flex items-center">
                    <img src={productImage} alt={productName} className="w-8 h-8 rounded-lg mr-2" />
                    <p>{productName}</p>
                </div>
            </td>
            <td className="py-4 pr-10">{customer}</td>
            <td className="py-4 pr-12">{formattedDate}</td>
            <td className="py-4 pr-12">${amount}</td>
            <td className="py-4 pr-6">{paymentMode}</td>
            <td className="py-4 pr-14"><span className={`${getStatusClass(status)}`}>{status}</span></td>
            <td className="py-4 pr-10">
                <div>
                    <button className="mr-4">
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