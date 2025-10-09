import {useQuery} from "@tanstack/react-query";
import {getArticles} from "../../services/apiArticles.jsx";

export function useArticles() {
    const {data, isPending, error} = useQuery(
        {
            queryKey: ['articles'],
            queryFn: () => getArticles()
        }
    )

    if (error) throw new Error(error.message);
    return {data, isPending, error};
}