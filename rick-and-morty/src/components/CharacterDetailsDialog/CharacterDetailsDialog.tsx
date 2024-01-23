import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import ICharacterDetailsDialogProps from '../../interfaces/CharacterDetailsDialogProps';
import React from 'react';

const CharacterDetailsDialog: React.FC<ICharacterDetailsDialogProps> = ({ character, onClose }) => {

    return (
        <Dialog open={character !== null} onClose={onClose} maxWidth="sm" fullWidth>
            <DialogTitle>{character?.name}</DialogTitle>
            <DialogContent>
                <img src={character?.image} alt={character?.name} style={{ width: '100%', height: 'auto' }} />
                {/* <p>First Appearance: {character?.firstAppearance}</p> */}
                {/* <p>Last Appearance: {character?.lastAppearance}</p> */}
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
