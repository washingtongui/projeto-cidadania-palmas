document.addEventListener('DOMContentLoaded', function () {
  const botoes = document.querySelectorAll('.botao-solucao');
  const modal = document.getElementById('modal');
  const modalTitulo = document.getElementById('modal-titulo');
  const modalDescricao = document.getElementById('modal-descricao');
  const modalEndereco = document.getElementById('modal-endereco');
  const fechar = document.querySelector('.fechar');
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  // Carregar tema salvo
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    body.classList.add('light-mode');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  }

  // Toggle tema
  themeToggle.addEventListener('click', function() {
    body.classList.toggle('light-mode');
    const isLight = body.classList.contains('light-mode');
    themeToggle.innerHTML = isLight ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });

  const dadosOrgaos = {
    defensoria: {
      titulo: 'Defensoria Pública',
      descricao: 'A Defensoria Pública do Estado do Tocantins oferece assistência jurídica integral e gratuita aos cidadãos que não possuem condições econômicas de contratar um advogado particular. Atua em todas as instâncias judiciais e extrajudiciais, assegurando o acesso à justiça.',
      endereco: 'Quadra AA SE 50 (antiga 502 Sul), Av. Joaquim Teotônio Segurado, Palmas-TO.'
    },
    procon: {
      titulo: 'Procon',
      descricao: 'O Programa de Proteção e Defesa do Consumidor (Procon) é responsável por fiscalizar e mediar conflitos entre consumidores e fornecedores, aplicando a legislação consumerista para garantir direitos em transações comerciais.',
      endereco: 'Avenida LO 02, Quadra 103 Norte, SN, Conjunto 1, Lotes 57 a 59.'
    },
    inss: {
      titulo: 'INSS',
      descricao: 'O Instituto Nacional do Seguro Social administra a Previdência Social brasileira, concedendo benefícios como aposentadorias, pensões por morte, auxílios-doença e outros auxílios previdenciários.',
      endereco: '201 Sul, Conjunto 02, Lote 05, Plano Diretor Sul.'
    },
    receita: {
      titulo: 'Receita Federal',
      descricao: 'A Receita Federal do Brasil é responsável pela administração dos tributos federais, fiscalização aduaneira, emissão e controle de documentos fiscais como CPF e CNPJ, além de combater a sonegação fiscal.',
      endereco: 'Consulte o site oficial da Receita Federal (receita.economia.gov.br) para localizar a unidade mais próxima ou acessar serviços online.'
    },
    ministerio: {
      titulo: 'Ministério Público',
      descricao: 'O Ministério Público do Estado do Tocantins exerce o controle externo da atividade policial, defende a ordem jurídica, o regime democrático e os interesses sociais indisponíveis, atuando na promoção da justiça.',
      endereco: '202 Norte, Avenida LO 4, Conjunto 01, Lotes 05 e 06.'
    },
    juizado: {
      titulo: 'Juizado Especial',
      descricao: 'Os Juizados Especiais Cíveis e Criminais proporcionam solução rápida e informal para causas de menor complexidade, com procedimentos simplificados, sem custas judiciais e sem necessidade de advogado.',
      endereco: 'Quadra AA SE 50 (antiga 502 Sul), Av. Joaquim Teotônio Segurado, Palmas-TO.'
    }
  };

  botoes.forEach(botao => {
    botao.addEventListener('click', function () {
      const orgao = this.getAttribute('data-orgao');
      const dados = dadosOrgaos[orgao];
      modalTitulo.textContent = dados.titulo;
      modalDescricao.textContent = dados.descricao;
      modalEndereco.textContent = dados.endereco;
      modal.style.display = 'block';
      document.body.style.overflow = 'hidden'; // Impede scroll do fundo
    });
  });

  fechar.addEventListener('click', function () {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  });

  window.addEventListener('click', function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });

  // Smooth scroll removido pois agora são páginas separadas
});