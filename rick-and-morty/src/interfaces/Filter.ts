export default interface IFilter {
    label: string;
    options: string[];
    type: string,
    onFilterChange: (type: string, value: string) => void;
}
