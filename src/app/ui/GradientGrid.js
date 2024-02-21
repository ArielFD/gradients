import React, { useState } from "react";

const GradientGrid = ({ gradients, changeBackground }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {gradients.map((gradient, index) => (
        <a
          onClick={() => changeBackground(gradient)}
          href="#"
          key={index}
          className="flex justify-center h-[200px] rounded-lg items-center  transition ease-in-out delay-150  hover:scale-105  duration-300"
          style={{
            background: `linear-gradient(to bottom right, ${gradient.colors.join(
              ", "
            )})`,
          }}
        >
          <p className="gradient-name text-slate-50">{gradient.name}</p>
        </a>
      ))}
    </div>
  );
};

export default GradientGrid;
