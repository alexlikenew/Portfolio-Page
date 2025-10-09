import {useMemo} from "react";

export function useTruncateText(text, maxLength = 200) {
    const truncated = useMemo(() => {
        if (!text) return "";
        if (text.length <= maxLength) return text;

        const lastSpace = text.lastIndexOf(" ", maxLength);
        return text.slice(0, lastSpace > 0 ? lastSpace : maxLength).trim() + "...";
    }, [text, maxLength]);

    return truncated;
}