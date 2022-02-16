import './Counter.scss';

export default function Counter({ count, onIncrement, onDecrement }) {
  return (
    <div className="counter">
      <button className="btn" onClick={onDecrement} disabled={count <= 0}>
        -
      </button>
      <span className="number">{count}</span>
      <button className="btn" onClick={onIncrement}>
        +
      </button>
    </div>
  );
}
