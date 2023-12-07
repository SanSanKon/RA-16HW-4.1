// import React, { useState, useEffect } from "react"
// import "../App.css"

// const ColorConverter: React.FC = () => {
//     const [inputColor, setInputColor] = useState<string>('');
//   const [rgbColor, setRgbColor] = useState<string | null>(null);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     if (inputColor.length === 7) {
//       handleColorConversion();
//     } else {
//       setError(null);
//       setRgbColor(null);
//     }
//   }, [inputColor]);

//   const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const inputValue = event.target.value;
//     setInputColor(inputValue);
//   };

//   const handleColorConversion = () => {
//     const hexRegex = /^#[0-9A-Fa-f]{6}$/;
//     if (hexRegex.test(inputColor)) {
//       setError(null);
//       const hex = inputColor.substring(1);
//       const bigint = parseInt(hex, 16);
//       const r = (bigint >> 16) & 255;
//       const g = (bigint >> 8) & 255;
//       const b = bigint & 255;
//       setRgbColor(`rgb(${r}, ${g}, ${b})`);
//     } else {
//       setError('Неправильный формат HEX');
//       setRgbColor(null);
//     }
//   };

//   return (
//     <div className="converter-wrapper">
//       <label>Введите цвет в формате HEX: </label>
//       <input
//         type="text"
//         value={inputColor}
//         onChange={handleColorChange}
//         maxLength={7}
//       />
//       {error && <div style={{ color: 'red' }}>{error}</div>}
//       {rgbColor && (
//         <div className="rgb-wrapper">
//           <p>RGB: {rgbColor}</p>
//           <div
//             style={{
//               width: '100vw',
//               height: '100vh',
//               backgroundColor: rgbColor,
//             }}
//           >
//             Пример текста
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ColorConverter