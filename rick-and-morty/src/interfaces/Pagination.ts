export default interface ICustomPagination {
    currentPage: number;
    totalPageCount: number;
    onPageChange: (value: number) => void;
}
