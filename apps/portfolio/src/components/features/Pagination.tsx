import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
  "data-testid"?: string;
}

export function Pagination({ currentPage, totalPages, onPageChange, className, ...remaining }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const showPages = pages.filter((page) => {
    if (page === 1 || page === totalPages) return true;
    if (page >= currentPage - 1 && page <= currentPage + 1) return true;
    return false;
  });

  return (
    <nav className={cn("flex items-center justify-center gap-2", className)} data-testid="pagination" {...remaining}>
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        data-testid="pagination-previous"
      >
        Previous
      </Button>
      
      {showPages.map((page, index) => {
        const prevPage = showPages[index - 1];
        const showEllipsis = prevPage && page - prevPage > 1;

        return (
          <React.Fragment key={page}>
            {showEllipsis && <span className="px-2 text-gray-400">...</span>}
            <Button
              variant={currentPage === page ? "default" : "outline"}
              size="sm"
              onClick={() => onPageChange(page)}
              data-testid={`pagination-page-${page}`}
            >
              {page}
            </Button>
          </React.Fragment>
        );
      })}

      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        data-testid="pagination-next"
      >
        Next
      </Button>
    </nav>
  );
}
