import './App.css';
import { people } from "./data.js";
import Profile from "./Profile.js";
import Gallery from "./Gallery.js";
import Form from "./Form.js";
import List from "./FormArray.js";
import LiveForm from "./LiveForm.js";
import Accordion from "./Accordion.js";

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
      <br />
      <Gallery />{" "}
      <Form />
      <List />
      <LiveForm />
      <Accordion />
    </section>
  );
}
