
export const fetchBooks = async () => {
    const baseUrl = process.env.BETTER_AUTH_URL
    const rspns = await fetch(`${baseUrl}//data.json`)
    const data = rspns.json()
    return data;
}

export const fetchBookById = async(id)=>{
    const rspns = await fetchBooks();
    const book = rspns.find(f=>f.id==id)
    return book;
}