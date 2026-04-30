
export const fetchBooks = async () => {
    const rspns = await fetch('http://localhost:3000//data.json')
    const data = rspns.json()
    return data;
}