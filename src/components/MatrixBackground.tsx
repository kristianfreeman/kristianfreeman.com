import { useEffect } from "react";

export default () => {
  useEffect(() => {
    const svg = document.getElementById('matrix-bg');
    const width = window.innerWidth;
    const height = window.innerHeight;
    const fontSize = 10;
    const columns = Math.floor(width / fontSize);
    const rows = Math.floor(height / fontSize);
    const characters: any = [];

    for (let i = 0; i < columns; i++) {
      for (let j = 0; j < rows; j++) {
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', (i * fontSize).toString());
        text.setAttribute('y', (j * fontSize).toString());
        text.setAttribute('font-size', `${fontSize}px`);
        text.setAttribute('font-family', 'IBM Plex Mono, monospace');
        text.setAttribute('fill', `rgba(255, 255, 255, ${Math.random() * 0.2 + 0.1})`);
        text.textContent = getRandomChar();
        svg?.appendChild(text);
        characters.push(text);
      }
    }

    function getRandomChar() {
      return String.fromCharCode(33 + Math.floor(Math.random() * 94));
    }

    function updateMatrix() {
      characters.forEach((char: any) => {
        if (Math.random() < 0.01) { // 1% chance to change each character
          char.textContent = getRandomChar();
          char.setAttribute('fill', `rgba(255, 255, 255, ${Math.random() * 0.2 + 0.1})`);
        }
      });
      requestAnimationFrame(updateMatrix);
    }

    updateMatrix();
  }, []);

  return (
    <>
      <div className="w-full h-16 mt-4 mb-28">
        <svg className="w-full" id="matrix-bg"></svg>
      </div>
    </>
  )
}
