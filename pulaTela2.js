const form = document.getElementById('formulario');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  const [nome] = ['nome'].map(
    name => form.querySelector(`[name="${name}"]`).value
  );
  let apelido = (nome);
  alert(`Olá, ${nome}! Que os jogos comecem... e que a sorte esteja com você!`);
      {
        window.location="layout3.html";
      }
  console.log(apelido)
});
