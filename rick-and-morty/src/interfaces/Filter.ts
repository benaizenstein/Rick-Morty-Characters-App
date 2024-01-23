export default interface IFilter {
    defaultLabel: string,
    labels: string[],
    onFilterChange: (value: string) => void;
}