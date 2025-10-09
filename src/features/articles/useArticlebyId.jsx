import {useQuery} from "@tanstack/react-query";
import {getArticleById} from "../../services/apiArticles.jsx";

export function useArticleById(url) {

    const {data, isPending, error} = useQuery({
        queryKey: ['articlebyId', url],
        queryFn: () => getArticleById(url)
    })
    if (error) throw new Error(error.message);
    return {data, isPending, error};
}