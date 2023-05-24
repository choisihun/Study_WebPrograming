const tableContainer = document.querySelector('#gugudan');

for (let i = 1; i <= 9; i++) {
  const gugu = document.createElement('gugu');
  gugu.innerHTML = `<dan>${i}단</dan>`;

  for (let j = 1; j <= 9; j++) {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${i} x ${j} = </td><td>${i * j}</td>`;
    gugu.appendChild(row);
  }

  tableContainer.appendChild(gugu);
}