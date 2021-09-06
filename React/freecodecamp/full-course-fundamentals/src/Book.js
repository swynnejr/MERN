import React from 'react';


const Book = ({ img, title, author }) => {
    const clickHandler = () => {
        alert(`You clicked "${title}" by ${author}`)
    };
    const logAuthorToConsole = (author) => {
        console.log(author);
    }
    return (
        <article className='book' onMouseOver={() => {
            console.log(`Customer showed interest in ${title}`)
        }}>
            <img src={img} alt="Book cover" />
            <h1 onClick={() => console.log(title)}>{title}</h1>
            <h4>{author}</h4>
            <button type="button" onClick={clickHandler}>Click Me!</button><br></br>
            <button type="button" onClick={() => logAuthorToConsole(author)}>Click to log the Author</button>
        </article>
    )
}

export default Book;