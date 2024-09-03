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
                    className={`px-4 py-2 ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''} dark:text-[var(--text-light)]`}
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>

                {getPageNumbers().map((pageNumber) => (
                    <button
                        key={pageNumber}
                        className={`mx-1 rounded-lg w-8 h-8 text-sm ${pageNumber === currentPage ? 'bg-[var(--btn-bg)] text-white' : 'bg-[var(--show-entries-light)] dark:bg-[var(--show-entries-dark)] dark:text-[var(--text-light)]'}`}
                        onClick={() => onPageChange(pageNumber)}
                    >
                        {pageNumber}
                    </button>
                ))}

                <button
                    className={`px-4 py-2 ${currentPage === numberOfPages ? 'cursor-not-allowed opacity-50' : ''} dark:text-[var(--text-light)]`}
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