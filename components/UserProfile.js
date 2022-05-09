// UI component for user profile
export default function UserProfile({ user }) {
  return (
    <div className="box-center">
      <img 
      src="https://source.unsplash.com/1600x900/?technology" 
      className="banner"
      onMouseMove={(e) => {
        const { clientX, clientY } = e;
        const { width, height } = e.target.getBoundingClientRect();
        const x = (clientX - width / 2) / width;
        const y = (clientY - height / 2) / height;
        e.target.style.transform = `translate(${x * 10}px, ${y * 10}px)`;

        e.target.style.filter = `blur(${Math.abs(x) * 10}px)`;
      }}
      />      
      <div className="up-image">
        <img src={user.photoURL || '/hacker.png'} className="card-img-center" />
      </div>
      <p>
        <i>@{user.username}</i>
      </p>
      <h1>{user.displayName || 'Anonymous User'}</h1>
    </div>
  );
}

