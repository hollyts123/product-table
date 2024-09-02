'use client';
import React from 'react';

interface PaginationProps {
    className?: string;
    currentPage: number;
    numberOfPages: number;
    onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, numberOfPages, onPageChange, className }) => {
    const getPageNumbers = () => {
        const startPage = Math.max(1, currentPage - 1);
        return Array.from({ length: Math.min(3, numberOfPages) }, (_, i) => startPage + i);
    };

    return (
        <div className={className}>
            <div className="flex flex-row justify-center items-center gap-2">
                <button
                    className={`px-4 py-2 ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''}`}
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>

                {getPageNumbers().map((pageNumber) => (
                    <button
                        key={pageNumber}
                        className={`mx-1 border rounded-lg w-8 h-8 font-montserrat ${pageNumber === currentPage ? 'bg-[var(--btn-bg)] text-white' : 'bg-[var(--show-entries-light)]'}`}
                        onClick={() => onPageChange(pageNumber)}
                    >
                        {pageNumber}
                    </button>
                ))}

                <button
                    className={`px-4 py-2 ${currentPage === numberOfPages ? 'cursor-not-allowed opacity-50' : ''}`}
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === numberOfPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Pagination;