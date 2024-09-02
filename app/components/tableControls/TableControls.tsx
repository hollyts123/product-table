'use client';

interface TableControlsProps {
    className?: string;
    itemsPerPage: number;
    onItemsPerPageChange: (itemsPerPage: number) => void;
}

const TableControls: React.FC<TableControlsProps> = ({ className, itemsPerPage, onItemsPerPageChange }) => {
    return (
        <div className={className}>
            <div className="flex items-center justify-between">
                <div className="flex items-center my-2 ml-4 font-medium">
                    <label htmlFor="itemsPerPage">Show</label>
                    <select
                        id="itemsPerPage"
                        value={itemsPerPage}
                        onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
                        className="border rounded-lg bg-[var(--show-entries-light)] px-1 py-1 mx-4  h-8 w-12 text-sm"
                    >
                        {[5, 10, 15, 20, 50].map((value) => (
                            <option key={value} value={value}>
                                {value}
                            </option>
                        ))}
                    </select>
                    <span>entries</span>

                    {/* Search bar  */}
                    <div className="flex relative w-full max-w-sm items-center ml-8">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center  pointer-events-none">
                            <img src="/tableControls/search.svg" />
                        </div>
                        {/* Input Field */}
                        <input
                            type="text"
                            placeholder="Search..."
                            className="block w-56 h-8 pl-10 pr-3 py-2 border border-[var(--sort-btn)] rounded-lg bg-white text-[var(--sort-btn)] placeholder-[var(--sort-btn)] focus:outline-none focus:border-[var(--sort-btn)] focus:[var(--sort-btn)]"
                        />
                    </div>
                </div>



                <button className="flex justify-self-end items-center border border-[var(--btn-bg)] rounded-lg bg-[var(--btn-bg)] text-[var(--bg-white)] text-sm h-8 px-3 mr-4">
                    <img src="/tableControls/plus.svg" />
                    <span className="ml-2">Add Customer</span>
                </button>
            </div>
        </div>
    );
}

export default TableControls;