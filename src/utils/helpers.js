export const setProgress = (value, data) => {
    return value ? Math.round(100 * value / Math.max(...data.map((x) => x.experience))) : 0;
}

export const sortArrayInDescendingOrder = (array) => {
    return (array && array.length > 0) ? array.sort((a, b) => b.experience - a.experience) : [];
}