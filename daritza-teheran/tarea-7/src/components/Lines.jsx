export default function Lines({ lines }) {
  return (
    <ul>
      {lines.map((line) => (
        <li key={line.toString()}>{line}</li>
      ))}
    </ul>
  );
}
