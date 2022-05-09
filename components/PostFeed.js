import Link from 'next/link';

export default function PostFeed({ posts, admin }) {
  return(
    <>
      <div className="grid-container">
        {posts ? posts.map((post) => <div className="grid-item"><PostItem post={post} key={post.slug} admin={admin} /></div>) : null}
      </div>
    </>
  );
}

function PostItem({ post, admin = false }) {
  // Naive method to calc word count and read time
  const wordCount = post?.content.trim().split(/\s+/g).length;
  const minutesToRead = (wordCount / 100 + 1).toFixed(0);

  return (

    <Link href={`/${post.username}/${post.slug}`}>
      <div className="card2">
        <img className="posts_image" src={ post?.thumbnail || "./photo.jpg"}/>
        <div className="card_text">
          <div className='spacing'/>
          <Link href={`/${post.username}`}>
            <a>
              <strong>By @{post.username}</strong>
            </a>
          </Link>
          <h2><a>{Normalize_Text(post.title)}</a></h2>
          <footer>
            <span>
              {wordCount} words. {minutesToRead} min read
            </span>
            <span className="push-left">💗 {post.heartCount || 0} Hearts</span>
          </footer>
        </div>        
        {/* If admin view, show extra controls for user */}
        {admin && (
          <>
              <div className="center">
                {post.published ? <p className="text-success">Live</p> : <p className="text-danger">Unpublished</p>}
                <div style={{width: "10px"}} />
                <Link href={`/admin/${post.slug}`}>
                  <h3>
                    <button className="btn-blue">Edit</button>
                  </h3>
                </Link>  
              </div>          
          </>
        )}
        <div className='spacing'/>
      </div>
    </Link>
  );
}

function Normalize_Text(str) {
  // if text is more than 5 words show only first 5 words then ...
  if (str.split(/\s+/g).length > 5) {
    return str.split(/\s+/g).slice(0, 5).join(" ") + "...";
  } else {
    return str;
  }
}