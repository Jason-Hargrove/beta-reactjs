export default function Profile({ name, imageId }) {
  cosnt imageUrl = (
    "https://i.imgur.com/" +
    imageId +
    "s.jpg"
  );
  return (
    <img
      className="avatar"
      src={imageUrl}
      alt={name}
  );
}
