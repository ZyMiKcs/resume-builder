import { useSelector } from 'react-redux';
import { selectFormData } from '../store/formdata/formdataSlice';

export const useFormData = () => {
    const state = useSelector(selectFormData);
    return state;
};
