import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from '@mui/material';
import CharacterTableProps from '../../interfaces/CharacterTableProps';

//TODO: Create config file with hard coded titles

const CharacterTable: React.FC<CharacterTableProps> = ({ characters }) => {
    return (
        <>
            <TableContainer component={Paper} style={{ maxHeight: '400px', overflowY: 'auto' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Image</TableCell>
                            <TableCell>Character Name</TableCell>
                            <TableCell>Origin</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Species</TableCell>
                            <TableCell>Gender</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {characters.map((character) => (
                            <TableRow key={character.id}>
                                <TableCell>
                                    <img
                                        src={character.image}
                                        alt={character.name}
                                        style={{ width: '50px', height: '50px' }}
                                    />
                                </TableCell>
                                <TableCell>{character.name}</TableCell>
                                <TableCell>{character.origin.name}</TableCell>
                                <TableCell>{character.status}</TableCell>
                                <TableCell>{character.species}</TableCell>
                                <TableCell>{character.gender}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </>
    );
};

export default CharacterTable;
