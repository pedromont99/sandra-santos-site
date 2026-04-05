"use client";
import { useState } from "react";

export default function Teste() {
  const [aberto, setAberto] = useState(false);

  return (
    <div style={{ paddingTop: 200, paddingLeft: 40 }}>
      <button
        type="button"
        onClick={() => setAberto(!aberto)}
        style={{ fontSize: 32, color: "black", display: "block", padding: 30, background: "gold" }}
      >
        CLICA AQUI
      </button>
      {aberto && (
        <div style={{ background: "red", padding: 40, marginTop: 20, fontSize: 32 }}>
          ABRIU!
        </div>
      )}
    </div>
  )
}