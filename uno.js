document.getElementById('sueldoForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Obtener horas laboradas
  const horas = parseFloat(document.getElementById('horas').value);

  let tarifaHora = 0;
  let porcentajeBonif = 0;

  // Evaluar condición de más de 40 horas
  if (horas > 40) {
    tarifaHora = 55;
    porcentajeBonif = 0.10; // 10%
  } else {
    tarifaHora = 30;
    porcentajeBonif = 0.15; // 15%
  }

  // Cálculos
  const sueldoInicial = horas * tarifaHora;
  const bonificacion = sueldoInicial * porcentajeBonif;
  const sueldoTotal = sueldoInicial + bonificacion;

  // Mostrar resultados formateados a 2 decimales
  document.getElementById('resTarifa').textContent = tarifaHora.toFixed(2);
  document.getElementById('resSueldoInicial').textContent = sueldoInicial.toFixed(2);
  document.getElementById('resPorcentajeBonif').textContent = `${(porcentajeBonif * 100)}%`;
  document.getElementById('resBonificacion').textContent = bonificacion.toFixed(2);
  document.getElementById('resSueldoTotal').textContent = sueldoTotal.toFixed(2);

  // Mostrar la caja de resultados
  document.getElementById('resultado').classList.remove('hidden');
});