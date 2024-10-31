export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your parking list 🚀</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = (numPacked / numItems) * 100;

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything ! Ready to go ✈️ "
          : `👜 You have ${numItems} items on your list, and you already parked
        ${numPacked.length} (${percentage}%)`}
      </em>
    </footer>
  );
}
