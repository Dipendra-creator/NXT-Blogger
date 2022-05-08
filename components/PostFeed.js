import Link from 'next/link';

export default function PostFeed({ posts, admin }) {
  return(
    <>
      <div className="grid-container">
        {posts ? posts.map((post) => <div class="grid-item"><PostItem post={post} key={post.slug} admin={admin} /></div>) : null}
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
        <Link href={`/${post.username}`}>
          <a>
            <strong>By @{post.username}</strong>
          </a>
        </Link>
        <h2><a>{post.title}</a></h2>
        <footer>
          <span>
            {wordCount} words. {minutesToRead} min read
          </span>
          <span className="push-left">💗 {post.heartCount || 0} Hearts</span>
        </footer>
        
        {/* If admin view, show extra controls for user */}
        {admin && (
          <>
            <Link href={`/admin/${post.slug}`}>
              <h3>
                <button className="btn-blue">Edit</button>
              </h3>
            </Link>

            {post.published ? <p className="text-success">Live</p> : <p className="text-danger">Unpublished</p>}
          </>
        )}
      </div>
    </Link>
  );
}
