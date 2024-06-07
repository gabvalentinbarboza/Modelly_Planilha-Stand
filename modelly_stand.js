
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
            headers: ['Equipe', 'Funções', 'Contrato', 'Salário'], // Adicione mais headers conforme necessário
            rows: [
                ['Pamela Miranda(Pamy)', 'Product Owner - UI Designer/Desenvolvedora Front End','PJ','R$4.254'],
                ['Gabriel Santos(Gabs)', 'Scrum Master - Desenvolvedor Full-Stack','PJ','R$4.254'],
                ['Gabriel Valentin(Redd)', 'Financeiro - UX Designer/ Desenvolvedor Full-Stack','PJ','R$4.254'],
                ['Matheus Santos(Matt)', 'Desenvolvedor Back End','PJ','R$4.254'],
                ['Giovanna Tavares(Gio)', 'UI Designer/Desenvolvedora de Banco de Dados','PJ','R$4.254'],
                ['Ben-Hur(Ben)', 'Desenvolvedor Back End','PJ','R$4.254'],
                ['João Lucas(Guiado por Deus)', 'Desenvolvedor Back End','PJ','R$4.254'],
                ['Jhonnatan Gomes(Jhow)', 'Desenvolvedor Front End','PJ','R$4.254']
            ]
        },

        {
               title: 'Stand Modelly :)',
               headers: ['Material', 'Quantidade', 'Pagante', 'Fornecedor','Preço','Total'], // Adicione mais headers conforme necessário
               rows: [
                   ['Cartão de visita', '450','0','0','R$0','R$0'],
                   ['Camisetas Personalizadas', '8','0','0','R$0','R$0'],
                   ['Cavalete(Naiping Banner com informações da Modelly)', '1','0','0','R$0','R$0'],
                   ['Fita Crepe', '1','(Equipe)','(Equipe)','R$0','R$0'],
                   ['Tesoura', '1','(Equipe)','(Equipe)','R$0','R$0'],
                   ['Escada de madeira', '1','','(Equipe)','R$0','R$0'],
                  
                   // Adicione mais linhas conforme necessário
               ]
           }     ,
           {
                  title: 'Lembrancinhas',
                  headers: ['Opções', 'Materiais Necessários'], // Adicione mais headers conforme necessário
                  rows: [
                      ['Chaveiro', 'Argolas c corrente/peça'],
                      ['Broche', 'broche personalizado'],
                      ['Ecobag', 'Personalizada']
                      // Adicione mais linhas conforme necessário
                  ]
              }
               
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
