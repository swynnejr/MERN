import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css'
// Set up Vars
const firstBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/41u8uuGSqOL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
  title: "Breath",
  author: "James Nestor"

}
const secondBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/41D6G5s3BnL._SX323_BO1,204,203,200_.jpg",
  title: "Born to Run",
  author: "Christopher McDougall"

}


function BookList() {
  return (
    <section className='booklist'>
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author= {firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author= {secondBook.author}
      />
    </section>
  )
}

const Book = ({img, title, author}) => {
  return (
    <article className='book'>
      <img src={img} alt="Book cover" />
      <h1>{title}</h1>
      <p>{author}</p>
    </article>
  )
}




ReactDom.render(<BookList/>, document.getElementById('root'));