export default function Quote({ classes, quote, author }) {
  return (
    <div className={classes.quoteBox}>
      <p className={classes.quote}>{quote}</p>
      <span className={classes.author}>{author}</span>
    </div>
  );
}
