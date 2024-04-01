document.addEventListener('DOMContentLoaded', function () {
    const pessoasInput = document.getElementById('pessoas');
    const ingredientesList = document.getElementById('ingredientes');
    const valorPessoasSpan = document.getElementById('valor-pessoas');

    function atualizarIngredientes() {
        const fatorMultiplicador = pessoasInput.value;
        const ingredientesOriginais = [
            "120g Carne Moida",
            "1 pão de gergelim",
            "1 fatias de queijo muçarela tipo sandwich",
            "Alface",
            "Tomate",
            "Cebola",
            "Óleo",
            "Ketchup",
            "Mostarda",
        ];

        ingredientesList.innerHTML = '';

        ingredientesOriginais.forEach(ingredienteOriginal => {
            const ingredienteMultiplicado = ingredienteOriginal.replace(/^\d+/, match => match * fatorMultiplicador);

            const li = document.createElement('li');
            li.textContent = ingredienteMultiplicado;
            ingredientesList.appendChild(li);
        });

        valorPessoasSpan.textContent = fatorMultiplicador;
    }

    atualizarIngredientes();
    pessoasInput.addEventListener('input', atualizarIngredientes);
});
