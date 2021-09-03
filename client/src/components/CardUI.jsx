import './CardUI.css';

function CardUI() {
  return (
    <a className="card" href="https://codetheweb.blog/2017/10/06/html-syntax/">
      <div>
        <h1>This is a card</h1>
        <p>Welcome to the web site</p>
        <div className="date">Test</div>
        <div className="tags">
          <div className="tag">HTML</div>
        </div>
      </div>
    </a>
  );
}

export default CardUI;
