import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from '@mui/material';
import ICharacterTableProps from '../../interfaces/CharacterTableProps';
import CharacterDetailsDialog from '../CharacterDetailsDialog/CharacterDetailsDialog';
import ICharacter from '../../interfaces/Character';
import { useState } from 'react';
import React from 'react';
import { metadata } from '../../config/metadata';


const CharacterTable: React.FC<ICharacterTableProps> = ({ characters }) => {
    const [selectedCharacter, setSelectedCharacter] = useState<ICharacter | null>(null);

    const handleRowClick = (character: ICharacter) => {
        setSelectedCharacter(character);
    };

    const handleCloseDialog = () => {
        setSelectedCharacter(null);
    };

    return (
        <>
            <TableContainer component={Paper} style={{ maxHeight: '400px', overflowY: 'auto' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            {metadata.tableHeaders.map(header => <TableCell>{header}</TableCell>)}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {characters.map((character) => (
                            <TableRow key={character.id}
                                onClick={() => handleRowClick(character)}
                                style={{ cursor: 'pointer' }}>
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
            <CharacterDetailsDialog character={selectedCharacter} onClose={handleCloseDialog} />
        </>
    );
};

export default CharacterTable;
