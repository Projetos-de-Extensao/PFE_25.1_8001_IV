const checkbox = document.querySelectorAll("input[type='checkbox']");

checkbox.forEach((a) => {
    a.addEventListener("click", () => {
        if (a.checked) {
            checkbox.forEach((other) => {
                if (other !== a) {
                    other.checked = false;
                }
            })
        }
    })
})

const pagamentoSelecionado = document.getElementById('selecione-pagamento');

document.getElementById('credito').addEventListener('click', () => {
  pagamentoSelecionado.textContent = 'Cartão de crédito';
});

document.getElementById('debito').addEventListener('click', () => {
  pagamentoSelecionado.textContent = 'Cartão de débito';
});

document.getElementById('pix').addEventListener('click', () => {
  pagamentoSelecionado.textContent = 'Pix';
});

document.getElementById('google-pay').addEventListener('click', () => {
  pagamentoSelecionado.textContent = 'Google Pay';
});

document.getElementById('boleto').addEventListener('click', () => {
  pagamentoSelecionado.textContent = 'Boleto';
});

const boxes = document.querySelectorAll('.caixa-cartao');

boxes.forEach(box => {
  box.addEventListener('click', () => {
    boxes.forEach(b => b.classList.remove('selected'));
    box.classList.add('selected');
  });
});