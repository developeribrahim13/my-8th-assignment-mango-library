
export const fetchBooks = async () => {
    const rspns = await fetch('https://mango-server-vwic.onrender.com/products')
    const data = await rspns.json()
    return data;
}

export const fetchBookById = async(id)=>{
    const rspns = await fetchBooks();
    const book = rspns.find(f=>f.id==id)
    return book;
}