const add = (x, y, z) => {
  const sum = x + y + z;
  const res = sum * 2;

  if (res === 10) return 'medium';
  if (res >= 10) return 'large';
  if (res <= 10) return 'small';
};

const addCurry = (x) => (y) => (z) => {
  const sum = x + y + z;
  const res = sum * 2;

  if (res === 10) return 'medium';
  if (res >= 10) return 'large';
  if (res <= 10) return 'small';
};

const result = addCurry(1)(2)(2);
console.log(result);

const updateElement = (id) => (content) =>
  (document.getElementById(id).textContent = content);

const btn = document.getElementById('button');
btn.addEventListener('click', () => updateElement('header')('Updated Header'));
