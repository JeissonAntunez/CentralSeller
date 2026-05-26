
"use client";

import { count } from "console";
import React from "react";

import { useState } from 'react';


export default function ButtonJack() {
  const [start, setStart] = useState(0);

  const buttons = {
    start: "Start Game",
    PedirCarta: "Pedir Carta",
    Plantarse: "Plantarse",
    DetenerJuego: "Detener Juego",
  };

  function handleClick() {
    setStart(start + 1);
  }

  const juegoIniciado = start > 0;

  return (
    <div className="flex gap-4 p-4">
      {/* 1. Start Game: Se deshabilita al iniciar */}
      <button 
        onClick={handleClick}
        disabled={juegoIniciado}
        className="bg-blue-600 text-white p-2 rounded disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
      >
        {buttons.start}
      </button>

      {/* 2. Pedir Carta: Se habilita al iniciar */}
      <button 
        disabled={!juegoIniciado}
        className="bg-green-600 text-white p-2 rounded disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
      >
        {buttons.PedirCarta}
      </button>

      {/* 3. Plantarse: Siempre deshabilitado por ahora */}
      {/* <button 
        disabled={true} 
        className="bg-yellow-600 text-white p-2 rounded disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
      >
        {buttons.Plantarse}
      </button> */}

      {/* 4. Detener Juego: Se habilita al iniciar */}
      <button 
        disabled={!juegoIniciado}
        className="bg-red-600 text-white p-2 rounded disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
      >
        {buttons.DetenerJuego}
      </button>
    </div>
  );
}
