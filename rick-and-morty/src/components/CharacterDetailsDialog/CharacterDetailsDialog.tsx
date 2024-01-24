import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import ICharacterDetailsDialogProps from '../../interfaces/CharacterDetailsDialogProps';
import React, { useEffect, useState } from 'react';
import { getCharacterFirstLastAppearance } from '../../api/api';
import ICharacterAppearanceDetails from '../../interfaces/CharacterAppearanceDetails';
import { metadata } from '../../config/metadata';
const CharacterDetailsDialog: React.FC<ICharacterDetailsDialogProps> = ({ character, onClose }) => {

    const [characterDetails, setCharacterDetails] = useState<ICharacterAppearanceDetails | null>(null);

    useEffect(() => {
        const fetchCharacterDetails = async () => {
            if (character) {
                try {
                    const result = await getCharacterFirstLastAppearance(character.id);
                    setCharacterDetails(result);
                } catch (error) {
                    console.error('Error fetching character details:', error);
                }
            }
        };
        fetchCharacterDetails();
    }, [character]);
    return (
        <Dialog open={character !== null} onClose={onClose} maxWidth="sm" fullWidth>
            <DialogTitle>{character?.name}</DialogTitle>
            <DialogContent>
                <img src={character?.image} alt={character?.name} style={{ width: '100%', height: 'auto' }} />
                {characterDetails && (
                    <div>
                        <p>{metadata.firstAppearance} : {characterDetails.firstAppearance}</p>
                        <p>{metadata.lastAppearance} : {characterDetails.lastAppearance}</p>
                    </div>
                )}
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default CharacterDetailsDialog;
