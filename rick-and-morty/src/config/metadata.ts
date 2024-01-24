export const metadata = {
    filters: [
        { label: 'Gender', type: 'gender', options: ['Male', 'Female', 'Genderless', 'Unknown'] },
        { label: 'Status', type: 'status', options: ['Alive', 'Dead', 'Unknown'] },
    ],
    defaultFilter: {
        gender: '',
        status: '',
    }
}