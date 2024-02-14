import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="center" >
      <div className="center container">
      <div className='error-section'>
        <div style={{'textAlign': 'center'}}>
          <h1 className='error-head'><span className='error'>{"{404}"}</span> Whoops! This Page Doesn't Exist...</h1>
          <p className='error-text'>Not to worry. You can headover to Our <span>HomePage</span> or <span> you can holler at us on our Mail.</span></p>
        </div>
        <div className="center">
        <iframe
          src="https://giphy.com/embed/l2JehQ2GitHGdVG9y"
          width="375"
          height="362"
          frameBorder="0"
          allowFullScreen
        ></iframe>
        </div>
        <div className="center">
          <Link href="/">
            <button className="btn-blue">Go home</button>
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
}
