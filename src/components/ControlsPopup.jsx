import "./ControlsPopup.css";

export default function ControlsPopup({ onClose }) {
  return (
    <div className="controls-toast">
      <div className="controls-header">
        <span>🎮 Controls</span>
        <button onClick={onClose}>✕</button>
      </div>

      <div className="controls-body">
        <p><b>W</b> – Forward &nbsp; <b>S</b> – Back</p>
        <p><b>A</b> – Left &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>D</b> – Right</p>
        <p><b>← / →</b> – Rotate</p>
        <p><b>↑ / ↓</b> – Height</p>
      </div>
    </div>
  );
}
