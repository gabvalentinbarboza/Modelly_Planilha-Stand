
document.addEventListener('DOMContentLoaded', () => {
    const tableContainer = document.querySelector('.table-container');

    // Dados simulados das tabelas do Excel
    /*Para adicionar uma nova tabela copie este código
     ,
     {
            title: 'Inserir Título',
            headers: ['Inserir Header', 'Inserir Header'], // Adicione mais headers conforme necessário
            rows: [
                ['inserir linha', 0],
                ['inserir linha', 0],
                // Adicione mais linhas conforme necessário
            ]
        }
    
    */
    const tablesData = [
        {
            title: 'Modelly - Desenvolvedores', //MEMBROS MODELLY
            headers: ['Equipe', 'Funções'], // Adicione mais headers conforme necessário
            rows: [
                ['Pamela Miranda(Pamy)', 'Product Owner - UI Designer/Desenvolvedora Front End'],
                ['Gabriel Santos(Gabs)', 'Scrum Master - Desenvolvedor '],
                ['Gabriel Valentin(Redd)', 'Financeiro - UX Designer/ Desenvolvedor Full-Stack'],
                ['Matheus Santos(Matt)', 'Desenvolvedor Full-Stack'],
                ['Giovanna Tavares(Gio)', 'UI Designer/Desenvolvedora de Banco de Dados e Back End'],
                ['João Lucas(Guiado por Deus)', 'Desenvolvedor Front End'],
                ['Jhonnatan Gomes(Jhow)', 'Desenvolvedor Front End']
            ]
        },

        {
               title: 'Checklist Stand - Modelly :)',
               headers: ['Material', 'Quantidade', 'Pagante', 'Fornecedor','Preço','Total'], // Adicione mais headers conforme necessário
               rows: [
                   ['Cartão de visita', '1000','0','0','R$55,00','R$55,00'],
                   ['Camisetas Personalizadas', '7','0','0','R$30,00','R$210'],
                   ['Cavalete(Naiping Banner com informações da Modelly)', '1','0','0','-','-'],
                   ['Fita Crepe', '1','(Equipe)','(Equipe)','-','-'],
                   ['Tesoura', '1','(Equipe)','(Equipe)','-','-'],
                   ['Escada de madeira', '1','','(Equipe)','-','-'],
                   ['Broches Personalizados', '150','','(Equipe)','R$0','R$0'],
                  
                   // Adicione mais linhas conforme necessário
               ]
           }     ,
         
               
    ];

    // Função para criar uma tabela
    const createTable = (tableData) => {
        const tableDiv = document.createElement('div');
        tableDiv.classList.add('table');

        const title = document.createElement('h2');
        title.textContent = tableData.title;
        tableDiv.appendChild(title);

        const table = document.createElement('table');

        // Adicionar cabeçalhos
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        tableData.headers.forEach(header => {
            const th = document.createElement('th');
            th.textContent = header;
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);
        table.appendChild(thead);

        // Adicionar linhas de dados
        const tbody = document.createElement('tbody');
        tableData.rows.forEach(row => {
            const tr = document.createElement('tr');
            row.forEach(cell => {
                const td = document.createElement('td');
                td.textContent = cell;
                tr.appendChild(td);
            });
            tbody.appendChild(tr);
        });
        table.appendChild(tbody);

        tableDiv.appendChild(table);
        return tableDiv;
    };

    // Adicionar todas as tabelas ao container
    tablesData.forEach(tableData => {
        const table = createTable(tableData);
        tableContainer.appendChild(table);
    });
});
