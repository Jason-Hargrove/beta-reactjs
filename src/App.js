import './App.css';

function Profile({ name, imageUrl }) {
  return (
    <img
      className="avatar"
      src={imageUrl}
      alt={name}
    />
  );
}

export default function App() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile
        name="Lin Lanying"
        imageUrl="https://i.imgur.com/1bX5QH6.jpg"
       />
      <Profile
        name="Gregorio Y. Zara"
        imageUrl="https://i.imgur.com/7vQD0fPs.jpg" />
      <Profile
        name="Hedy Lamarr"
        imageUrl="https://i.imgur.com/yXOvdOSs.jpg"
      />
    </section>
  );
}
