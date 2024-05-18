// formdataSlice.js

import { createSlice } from '@reduxjs/toolkit';

interface educationType {
    institution: string;
    level: string | null;
    faculty: string | null;
    speciality: string | null;
    graduationYear: string;
}

const initialState = {
    id: '',
    template: '',
    resumeName: '',
    firstName: '',
    lastName: '',
    job: '',
    city: '',
    dateOfBirth: '',
    contacts: [],
    phoneNemail: {},
    aboutMe: '',
    photo: '',
    education: { graduationYear: '2024' } as educationType,
    skills: [],
};

export const formdataSlice = createSlice({
    name: 'formdata',
    initialState,
    reducers: {
        setFormData: (state, action) => {
            return { ...state, ...action.payload };
        },
        setDateOfBirth: (state, action) => {
            return { ...state, ...action.payload };
        },
        setphoneNemail: (state, action) => {
            state.phoneNemail = { ...state.phoneNemail, ...action.payload };
        },
        setEducation: (state, action) => {
            state.education = { ...state.education, ...action.payload };
        },
        setContacts: (state, action) => {
            state.contacts = action.payload;
        },
        removeContact: (state, action) => {
            state.contacts = state.contacts.filter(
                (contact: any) => contact.id !== action.payload
            );
        },
        setSkills: (state, action) => {
            state.skills = action.payload;
        },
        removeSkill: (state, action) => {
            state.skills = state.skills.filter(
                (skill: any) => skill.id !== action.payload
            );
        },
    },
});

export const { actions, reducer } = formdataSlice;
export const selectFormData = (state: any) => state.formdata;
