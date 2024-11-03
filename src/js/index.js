const personagens = document.querySelectorAll('.personagem');


personagens.forEach(personagem => {
    personagem.addEventListener('mouseenter', () => {
        const personagemSelecionado = document.querySelector('.selecionado');

        // Se não houver personagem selecionado, atualiza a visualização
        if (!personagemSelecionado) {
            const imagemPersonagemGrande = document.querySelector('.personagem-grande');
            const idPersonagem = personagem.attributes.id.value;
            imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;

            const nomePersonagem = document.getElementById('nome-do-personagem');
            nomePersonagem.innerText = personagem.getAttribute('data-name');

            const descricaoPersonagem = document.getElementById("descricao-personagem");
            descricaoPersonagem.innerText = personagem.getAttribute('data-description');
        }
    });

    personagem.addEventListener('click', () => {
        const personagemSelecionado = document.querySelector('.selecionado');

        // Se o personagem clicado for diferente do selecionado
        if (personagem !== personagemSelecionado) {
            // Remove a seleção do personagem atualmente selecionado
            if (personagemSelecionado) {
                personagemSelecionado.classList.remove('selecionado');
            }

            // Adiciona a classe 'selecionado' ao novo personagem
            personagem.classList.add('selecionado');

            // Atualiza a imagem do personagem grande
            const imagemPersonagemGrande = document.querySelector('.personagem-grande');
            const idPersonagem = personagem.attributes.id.value;
            imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;

            // Atualiza o nome do personagem
            const nomePersonagem = document.getElementById('nome-do-personagem');
            nomePersonagem.innerText = personagem.getAttribute('data-name');

            // Atualiza a descrição do personagem
            const descricaoPersonagem = document.getElementById("descricao-personagem");
            descricaoPersonagem.innerText = personagem.getAttribute('data-description');
        }
    });
});

