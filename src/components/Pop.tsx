// Pop.tsx
import React from "react";

interface PopProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Pop: React.FC<PopProps> = ({ open, onClose, children }) => {
  if (!open) return null;
  return (
    <div style={{
      position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
      background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000
    }}>
      <div style={{ background: "#fff", padding: 24, borderRadius: 8, minWidth: 300, position: "relative" }}>
        <button className="px-10" style={{ position: "absolute", top: 8, right: 8 }} onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
};

export default Pop;
