import {supabase} from "./supabase.jsx";

export async function getArticles() {
    let {data, error} = await supabase
        .from('Articles')
        .select('*')

    return data

}

