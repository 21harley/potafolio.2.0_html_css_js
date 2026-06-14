import { $ } from '../utils/dom.js';

function generateHTML(character, pos, isAlternate, radius, inputClass) {
  const directions = [[1, 1], [-1, -1], [-1, 1], [1, -1]];
  const anglesA = [180, 360, 180, 0];
  const anglesB = [180, 360, 0, 180];
  const angleMultiplier = [-1, -1, 1, 1];

  let x = directions[pos][0];
  let y = directions[pos][1];
  let startAngle = isAlternate ? anglesA[pos] : anglesB[pos];
  let angleFactor = angleMultiplier[pos];

  let circleProps = {
      angleIncrement: 360 / character.length,
      radiusIncrement: radius / character.length
  };

  let fragment = document.createDocumentFragment();

  for (let i = 0, angle = startAngle; i < character.length; i++, angle += circleProps.angleIncrement) {
      const radians = angle * (Math.PI / 180);
      const valueX = radius * Math.cos(radians);
      const valueY = radius * Math.sin(radians);

      let p = document.createElement('p');
      p.textContent = character[i];
      p.style.transform = `translate3d(${valueX}px, ${valueY}px, 0px) rotate(${angle + 90}deg)`;
      p.classList.add('colorItem', `cInput${inputClass}`);
      fragment.appendChild(p);
  }

  return { type: true, fragment: fragment, tag: '' };
}

export default function createMandala() {
  const container = $(".containerTitleA");

  const patterns = [
      '{{ {{ << {{ }} >> }} }} {{ {{ << {{ }} >> }} }}',
      ' + + + + + + + + + + + + + + + + + + + + + + + + + + + + + +',
      '/////////////////////////////////////////////////////////////////////'
  ];
  const radii = [110, 150, 190];

  patterns.forEach((pattern, index) => {
      for (let i = 0; i < 4; i++) {
          const result = generateHTML(pattern, i, false, radii[index], "header");
          container.append(result.fragment);
      }
  });
}
