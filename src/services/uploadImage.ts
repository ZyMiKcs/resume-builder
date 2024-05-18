import supabase, { supabaseUrl } from './supabase';

export const uploadImage = async (file: any) => {
    const fileName = `${Date.now()}-${file.name}`;
    const imagePath = `${supabaseUrl}/storage/v1/object/public/resume-images/${fileName}`;

    const { error } = await supabase.storage
        .from('resume-images')
        .upload(fileName, file);

    if (error) {
        throw error;
    }

    return imagePath;
};
