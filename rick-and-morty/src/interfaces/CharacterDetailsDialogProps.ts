import ICharacter from "./Character";

export default interface ICharacterDetailsDialogProps {
    character: ICharacter | null;
    onClose: () => void;
}
