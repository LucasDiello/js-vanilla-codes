    const produtosFake = [
        { nome: 'Notebook', categoria: 'eletronicos', imagem: 'https://via.placeholder.com/150' },
        { nome: 'Livro de Ficção', categoria: 'livros', imagem: 'https://via.placeholder.com/150' },
        { nome: 'Camiseta', categoria: 'roupas', imagem: 'https://via.placeholder.com/150' },
        { nome: 'Boneca', categoria: 'brinquedos', imagem: 'https://via.placeholder.com/150' },
        { nome: 'Maçã', categoria: 'alimentos', imagem: 'https://via.placeholder.com/150' },
        { nome: 'Smartphone', categoria: 'eletronicos', imagem: 'https://via.placeholder.com/150' },
        { nome: 'Livro de Não Ficção', categoria: 'livros', imagem: 'https://via.placeholder.com/150' },
        { nome: 'Calça Jeans', categoria: 'roupas', imagem: 'https://via.placeholder.com/150' },
        { nome: 'Carro de Controle Remoto', categoria: 'brinquedos', imagem: 'https://via.placeholder.com/150' },
        { nome: 'Banana', categoria: 'alimentos', imagem: 'https://via.placeholder.com/150' }
    ];

    const checkboxes = document.querySelectorAll('input[type="checkbox"][name="categoria"]');
    const produtosContainer = document.getElementById('produtos');
    const searchInput = document.getElementById('search');
    const buttons = document.querySelectorAll('button')

    function renderizarProdutos(produtos) {
        produtosContainer.innerHTML = '';

        produtos.forEach(produto => {
            const produtoHTML = `
                <div class="produto">
                    <img src="${produto.imagem}" alt="${produto.nome}">
                    <h3>${produto.nome}</h3>
                </div>
            `;
            produtosContainer.innerHTML += produtoHTML;
        });
    }

    function filtrarProdutos() {
        const categoriasSelecionadas = Array.from(checkboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);

        const termoPesquisa = searchInput.value.trim().toLowerCase();

        let produtosFiltrados = produtosFake.filter(produto => {
            const categoriaMatch = categoriasSelecionadas.length === 0 || categoriasSelecionadas.includes(produto.categoria);
            const nomeMatch = produto.nome.toLowerCase().includes(termoPesquisa);
            return categoriaMatch && nomeMatch;
        });

        renderizarProdutos(produtosFiltrados);
    }

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                checkboxes.forEach(cb => {
                    if (cb !== this) {
                        cb.checked = false;
                    }
                });
            }
            filtrarProdutos();
        });
    });
    
    searchInput.addEventListener('input', filtrarProdutos);
    
    buttons.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            let productsFilter = produtosFake.filter((product) => e.target.value === product.categoria)
            renderizarProdutos(productsFilter)
        })
    })
    // Renderiza todos os produtos ao carregar a página
    renderizarProdutos(produtosFake);