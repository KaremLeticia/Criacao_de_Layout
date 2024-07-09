document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-tarefa');
    const novaTarefaInput = document.getElementById('nova-tarefa');
    const periodoTarefaSelect = document.getElementById('periodo-tarefa');
    const tarefasDia = document.getElementById('tarefas-dia');
    const tarefasNoite = document.getElementById('tarefas-noite');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const novaTarefaTexto = novaTarefaInput.value.trim();
        const periodoTarefa = periodoTarefaSelect.value;
        
        if (novaTarefaTexto !== '') {
            const novaTarefa = document.createElement('li');
            novaTarefa.textContent = novaTarefaTexto;
            
            const botaoRemover = document.createElement('button');
            botaoRemover.textContent = 'X';
            botaoRemover.classList.add('remover');
            botaoRemover.addEventListener('click', () => {
                novaTarefa.remove();
            });

            novaTarefa.appendChild(botaoRemover);
            
            if (periodoTarefa === 'dia') {
                tarefasDia.appendChild(novaTarefa);
            } else {
                tarefasNoite.appendChild(novaTarefa);
            }
            
            novaTarefaInput.value = '';
        }
    });

    document.querySelectorAll('.remover').forEach(button => {
        button.addEventListener('click', (e) => {
            e.target.parentElement.remove();
        });
    });
});
