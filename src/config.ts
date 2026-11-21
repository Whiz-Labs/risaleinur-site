// Todo o conteúdo variável do site vive aqui. As páginas e componentes só
// leem daqui — corrigir texto, endereço, diretoria, fotos ou datas da feira
// não deve exigir mexer em layout.
//
// Valores marcados com TODO ainda precisam ser confirmados pela associação.
// Dado não confirmado fica VAZIO (string vazia / null), nunca com valor de
// exemplo: o componente correspondente esconde o bloco ou mostra "em breve".

export const site = {
  /** Nome curto (menu, <title>). */
  name: 'ARN',
  /** Razão social — usada no hero, rodapé e textos formais. */
  fullName: 'Associação Educacional e Cultural Risale-i Nur',
  url: 'https://risaleinur.org.br',
  description:
    'A ARN é uma associação sem fins lucrativos em São Paulo dedicada à educação, à leitura e à cultura a partir da coleção Risale-i Nur. Aulas, programa de domingo para famílias e dados institucionais.',
  locale: 'pt-BR',
  /** Fuso da sede: decide o que é "hoje" (faixa da feira). */
  timeZone: 'America/Sao_Paulo',
} as const;

export const hero = {
  eyebrow: 'Associação sem fins lucrativos',
  title: 'Educação, leitura e cultura a partir da coleção Risale-i Nur.',
  lead: 'A Associação Educacional e Cultural Risale-i Nur reúne pessoas interessadas em leitura, reflexão e formação humana, com grupos de estudo, cursos e eventos abertos à comunidade.',
  /** Linha de fatos curtos sob os botões. */
  facts: ['Desde 2021', 'São Paulo – SP', 'Domingos, 10h–18h30'],
  photo: {
    src: '/fotos/aula-risale-domingo.jpg',
    alt: 'Grupo lendo livros da coleção Risale-i Nur no salão da sede',
    width: 960,
    height: 720,
  } as Photo | null,
  photoHint: 'Foto: grupo de estudo na sede',
};

export const sobre = {
  eyebrow: 'Quem somos',
  title: 'Uma associação brasileira dedicada à formação pela leitura.',
  paragraphs: [
    'Fundada em 2021 em São Paulo, a ARN é uma associação privada sem fins lucrativos. Promovemos a educação, a leitura e a convivência por meio do estudo da coleção Risale-i Nur, comentário do Alcorão escrito por Bediüzzaman Said Nursi.',
    'Aos domingos, recebemos famílias para um dia de aulas, leitura, conversa e atividades para crianças e adultos. Todos são bem-vindos.',
  ],
  photo: {
    src: '/fotos/fachada-sede.jpg',
    alt: 'Fachada da sede da ARN, com a placa da associação e a porta de entrada',
    width: 968,
    height: 711,
  } as Photo | null,
  photoHint: 'Foto: fachada da sede',
};

export type Photo = {
  /** Caminho em /public, ex.: '/fotos/aula-domingo.jpg' */
  src: string;
  alt: string;
  width: number;
  height: number;
};

/** Cartões de "O que fazemos". `tone` escolhe a cor do ícone. */
export const atividades: {
  title: string;
  text: string;
  icon: 'book' | 'cap' | 'cup' | 'ball';
  tone: 'verde' | 'amarelo' | 'azul';
}[] = [
  {
    title: 'Aulas de Risale-i Nur',
    text: 'Leitura e estudo em grupo da coleção, com noções básicas do Islã e leitura do Alcorão.',
    icon: 'book',
    tone: 'verde',
  },
  {
    title: 'Aulas para crianças',
    text: 'Aos domingos, das 10h às 12h, com conteúdo e atividades para os pequenos.',
    icon: 'cap',
    tone: 'amarelo',
  },
  {
    title: 'Convivência',
    text: 'Almoço, chá e conversa: um domingo de encontro para toda a família.',
    icon: 'cup',
    tone: 'azul',
  },
  {
    title: 'Esporte e lazer',
    text: 'Tênis e atividades esportivas no fim da tarde de domingo.',
    icon: 'ball',
    tone: 'verde',
  },
];

export const programaDomingo = {
  eyebrow: 'Todo domingo',
  title: 'Programa de Domingo',
  text: 'Um dia inteiro de aprendizado e convivência para toda a família. Inclui almoço e momentos de oração.',
  schedule: [
    { time: '10h', label: 'Aula para as crianças' },
    { time: '13h30', label: '1ª aula de Risale-i Nur' },
    { time: '14h30', label: 'Chá, aperitivos e conversa' },
    { time: '15h15', label: '2ª aula de Risale-i Nur' },
    { time: '16h15', label: 'Noções do Islã e leitura do Alcorão' },
    { time: '17h15', label: 'Tênis e atividades esportivas' },
  ],
};

/** Dados de registro — conferíveis na Receita Federal. */
export const instituicao = {
  razaoSocial: 'Associação Educacional e Cultural Risale-i Nur',
  nomeFantasia: 'ARN',
  cnpj: '44.386.978/0001-09',
  naturezaJuridica: 'Associação Privada',
  fundacao: '21/10/2021',
  /** TODO: conferir na Receita antes de publicar. */
  situacao: 'Ativa',
  /** Página oficial de consulta de CNPJ (o visitante digita o número). */
  consultaUrl: 'https://solucoes.receita.fazenda.gov.br/Servicos/cnpjreva/Cnpjreva_Solicitacao.aspx',
};

/**
 * TODO: nomes da diretoria atual. Nome vazio = a linha mostra "a informar".
 * Se nenhum nome for preenchido, o cartão inteiro some.
 */
export const diretoria: { cargo: string; nome: string }[] = [
  { cargo: 'Presidente', nome: '' },
  { cargo: 'Vice-presidente', nome: '' },
  { cargo: 'Tesoureiro(a)', nome: '' },
  { cargo: 'Secretário(a)', nome: '' },
];

/**
 * Documentos públicos. Coloque o PDF em `public/docs/` e preencha `file`.
 * `file: null` = aparece como "em breve", sem link.
 */
export const documentos: { title: string; file: string | null }[] = [
  { title: 'Estatuto social', file: null },
  { title: 'Ata de eleição da diretoria', file: null },
];

/** Fotos reais da sede. Lista vazia = a galeria mostra um aviso "em breve". */
export const galeria: Photo[] = [
  {
    src: '/fotos/leitura-em-grupo.jpg',
    alt: 'Aula de Risale-i Nur',
    width: 960,
    height: 720,
  },
  {
    src: '/fotos/comunidade-sede.jpg',
    alt: 'Encontro de domingo na sede',
    width: 1280,
    height: 960,
  },
  {
    src: '/fotos/criancas-tenis-de-mesa.jpg',
    alt: 'Esporte no domingo: tênis de mesa',
    width: 737,
    height: 553,
  },
  {
    src: '/fotos/placa-sede.jpg',
    alt: 'Placa na entrada da sede',
    width: 1200,
    height: 900,
  },
];

/**
 * Seção "Livros". Capas em `public/livros/` (3:4, fundo branco). Sem
 * descrições inventadas: só título, subtítulo e autor que estão na capa.
 * Lista vazia = a seção some.
 */
const autor = 'Bediüzzaman Said Nursi';

export const livros: {
  eyebrow: string;
  title: string;
  text: string;
  cta: string;
  itens: { title: string; subtitle?: string; author: string; cover: string }[];
} = {
  eyebrow: 'Livros',
  title: 'A coleção Risale-i Nur em português',
  text: 'Alguns títulos da coleção de Bediüzzaman Said Nursi traduzidos para o português, e o Alcorão com tradução portuguesa.',
  cta: 'Perguntar sobre os livros',
  itens: [
    { title: 'As Cartas', author: autor, cover: '/livros/as-cartas.jpg' },
    { title: 'Os Lampejos', author: autor, cover: '/livros/os-lampejos.jpg' },
    { title: 'O Sinal Supremo', author: autor, cover: '/livros/o-sinal-supremo.jpg' },
    {
      title: 'Os Milagres do Profeta Mohammad',
      subtitle: 'O Tratado dos Milagres do Alcorão',
      author: autor,
      cover: '/livros/os-milagres-do-profeta-mohammad.jpg',
    },
    {
      title: 'A Ressurreição e a Outra Vida',
      subtitle: 'Imortalidade do Espírito',
      author: autor,
      cover: '/livros/a-ressurreicao-e-a-outra-vida.jpg',
    },
    { title: 'As Curtas Palavras', author: autor, cover: '/livros/as-curtas-palavras.jpg' },
    { title: 'Os Frutos da Fé', author: autor, cover: '/livros/os-frutos-da-fe.jpg' },
    { title: 'A Fé e o Ser Humano', author: autor, cover: '/livros/a-fe-e-o-ser-humano.jpg' },
    { title: 'Mensagem ao Enfermo', author: autor, cover: '/livros/mensagem-ao-enfermo.jpg' },
    {
      title: 'Alcorão',
      subtitle: 'e sua tradução portuguesa',
      author: '',
      cover: '/livros/alcorao.jpg',
    },
  ],
};

export const contact = {
  /**
   * TODO: rua e número. Enquanto `street` estiver vazio, o site mostra só
   * bairro/cidade/CEP — nunca um endereço pela metade com marcador.
   */
  address: {
    street: '',
    district: 'Vila São José (Ipiranga)',
    city: 'São Paulo',
    state: 'SP',
    zip: '04265-000',
  },
  hours: 'Domingos, das 10h às 18h30',
  /** Só dígitos, com DDI. */
  whatsapp: '5511941855590',
  whatsappLabel: '(11) 94185-5590',
  instagram: 'https://www.instagram.com/livrosagradoalcorao',
  instagramHandle: '@livrosagradoalcorao',
  /**
   * TODO: contato@risaleinur.org.br ainda não existe (vai ser criado). Só
   * preencher quando a caixa estiver recebendo — e-mail que volta é pior que
   * nenhum. Preenchido, aparece sozinho no contato e no rodapé.
   */
  email: '',
  /** TODO: Google Maps → Compartilhar → Incorporar → só o `src`. Vazio = aviso. */
  mapsEmbed: '',
  /** TODO: link "como chegar" da ficha no Google Maps. */
  mapsLink: '',
};

export const whatsappHref = `https://wa.me/${contact.whatsapp}`;

/**
 * Feira do livro. A faixa no topo da home só aparece entre `showFrom` e `end`
 * (datas no fuso da sede, conferidas NO NAVEGADOR — um build estático
 * congelaria a decisão no dia do deploy). A página /feira continua no ar
 * depois, porque os QR codes impressos apontam para ela.
 *
 * TODO: confirmar datas, número e local do estande.
 */
export const feira = {
  name: 'Bienal do Livro Rio 2027',
  shortName: 'Bienal do Livro Rio',
  /** AAAA-MM-DD, inclusive. A faixa aparece alguns dias antes (`showFrom`). */
  // TODO: provisório para ver a faixa — voltar para '2027-08-27'.
  showFrom: '2026-11-20',
  start: '2027-09-03',
  end: '2027-09-12',
  dateLabel: '3 a 12 de setembro de 2027',
  /** Vazio = "a confirmar". */
  stand: '',
  venue: '',
  city: 'Rio de Janeiro – RJ',
  /** TODO: trocar pela foto do estande quando houver. */
  photo: {
    src: '/fotos/livros-colecao.jpg',
    alt: 'Livros da coleção Risale-i Nur em português: Os Lampejos, As Cartas e Os Frutos da Fé',
    width: 1200,
    height: 485,
  } as Photo | null,
  /**
   * Textos de /feira depois de `end` (trocados no navegador). O bloco
   * "Na feira" some; o resto da página continua igual.
   */
  depois: {
    eyebrow: 'Associação sem fins lucrativos',
    title: 'Que bom ter você por aqui!',
  },
};
