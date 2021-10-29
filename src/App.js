import './App.css';
import { people } from "./data.js";
import Profile from "./Profile.js";

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
      {
        people.map(person => (
          <Profile
            key={person.id}
            name={person.name}
            imageId={person.imageId}
          />
        ))
      }
    </section>
  );
}
