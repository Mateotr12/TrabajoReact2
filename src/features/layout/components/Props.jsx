const getImageUrl = ({ imageId }) =>
  `https://i.imgur.com/${imageId}s.jpg`;

function Avatar({ name, imageId, size = 120 }) {
  return (
    <div className="text-center">
      <img
        src={getImageUrl({ imageId })}
        alt={name}
        width={size}
        height={size}
        className="rounded-circle shadow-sm"
      />
      <h6 className="mt-3">{name}</h6>
    </div>
  );
}

export default function Props() {
  const people = [
    { name: "1", imageId: "YfeOqp2", size: 140 },
    { name: "2", imageId: "OKS67lh", size: 120 },
    { name: "3", imageId: "1bX5QH6", size: 100 },
  ];

  return (
    <div className="container py-5">
      <header className="mb-5 text-center">
        <h1 className="fw-bold">Props en React</h1>
        <p className="lead mt-3">
          Este ejemplo demuestra cómo pasar información a componentes mediante
          <strong> props</strong>, permitiendo reutilización y separación de
          responsabilidades.
        </p>
      </header>

      <div className="row justify-content-center g-4">
        {people.map((person) => (
          <div
            key={person.imageId}
            className="col-12 col-md-4 d-flex justify-content-center"
          >
            <Avatar {...person} />
          </div>
        ))}
      </div>
    </div>
  );
}