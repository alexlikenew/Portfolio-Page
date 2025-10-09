import {supabase} from "./supabase.jsx";

export async function getArticles() {
    let {data, error} = await supabase
        .from('Articles')
        .select('*')
    return data
}

export async function getArticleById(url) {
    let {data, error} = await supabase
        .from('Articles')
        .select('*')
        .eq('url', url)
        .single()
    return data
}

