import style from './Book.module.css'

function Book(props) {
    return (
        <article className={style.book}>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <span>{props.author}</span>
        </article>
    );
}

export default Book;