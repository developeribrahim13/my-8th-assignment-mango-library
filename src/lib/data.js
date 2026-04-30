
export const fetchBooks = async () => {
    const rspns = await fetch('http://localhost:3000//data.json')
    const data = rspns.json()
    return data;
}

export const fetchBookById = async(id)=>{
    const rspns = await fetchBooks();
    const book = rspns.find(f=>f.id==id)
    return book;
}