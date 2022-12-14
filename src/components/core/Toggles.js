import React, { useState, useEffect } from "react";

const Toggles = ({
  backOption,
  setBackOption,
  eyeOption,
  setEyeOption,
  soundOption,
  setSoundOption,
}) => {
  return (
    <div className="options">
      <div className="option">
        <div>Chăm sóc lưng:</div>
        <div>
          <label className="switch">
            <input
              type="checkbox"
              checked={backOption}
              onChange={(e) => {
                setBackOption(!backOption);
              }}
            ></input>
            <span className="slider round"></span>
          </label>
        </div>
      </div>
      <div className="option">
        <div>Chăm sóc mắt:</div>
        <div>
          <label className="switch">
            <input
              type="checkbox"
              checked={eyeOption}
              onChange={(e) => {
                setEyeOption(!eyeOption);
              }}
            ></input>
            <span className="slider round"></span>
          </label>
        </div>
      </div>
      <div className="option">
        <div>Chăm sóc tai:</div>
        <div>
          <label className="switch">
            <input
              type="checkbox"
              checked={soundOption}
              onChange={(e) => {
                setSoundOption(!soundOption);
              }}
            ></input>
            <span className="slider round"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Toggles;
