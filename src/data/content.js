export const WHATSAPP = (msg) =>
  `https://wa.me/5514997242712?text=${encodeURIComponent(msg)}`

export const CTA_MSG = 'Olá! Quero agendar uma aula experimental na King of Glory'

export const SOCIALS = [
  { label: 'Instagram', handle: '@academiakingofglory', url: 'https://www.instagram.com/academiakingofglory/' },
  { label: 'Facebook', handle: 'Academy King of Glory', url: 'https://www.facebook.com/academykingofglory/' },
]

export const MODALIDADES = [
  {
    num: '01',
    title: 'Muay Thai',
    desc: 'A arte das oito armas. Condicionamento, técnica e disciplina tailandesa — turmas de manhã, tarde e noite.',
    when: 'Seg à Sex',
  },
  {
    num: '02',
    title: 'Jiu Jitsu',
    desc: 'A arte suave. Alavancas, estratégia e controle no tatame — para todos os níveis, do branca à preta.',
    when: 'Seg à Sex · Noite',
  },
  {
    num: '03',
    title: 'Kids',
    desc: 'Thai Kids (05 à 13 anos) e Jiu Kids (04 à 13 anos). Disciplina, respeito e coordenação desde cedo.',
    when: 'Seg à Qui · 18:00',
  },
  {
    num: '04',
    title: 'Thai Girls',
    desc: 'Turma exclusiva para mulheres. Muay Thai com foco em técnica, defesa pessoal e condicionamento.',
    when: 'Ter e Qui · 08:00',
  },
]

export const MODS = {
  MT: { label: 'Muay Thai', group: 'mt', fill: 'rgba(233,197,92,.14)', border: 'rgba(217,169,63,.55)', color: '#F0CE6B', tag: null },
  JJ: { label: 'Jiu Jitsu', group: 'jj', fill: 'rgba(244,239,227,.08)', border: 'rgba(244,239,227,.4)', color: '#F4EFE3', tag: null },
  TK: { label: 'Thai Kids', group: 'kids', fill: 'rgba(233,197,92,.07)', border: 'rgba(217,169,63,.4)', color: '#E9C55C', tag: '05 à 13 anos' },
  JK: { label: 'Jiu Kids', group: 'kids', fill: 'rgba(244,239,227,.05)', border: 'rgba(244,239,227,.3)', color: '#F4EFE3', tag: '04 à 13 anos' },
  TG: { label: 'Thai Girls', group: 'fem', fill: 'rgba(232,168,124,.1)', border: 'rgba(232,168,124,.5)', color: '#E8A87C', tag: 'Só mulheres' },
}

export const DAYS = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex']

export const GRID = [
  { time: '6:00', cells: [null, 'MT', null, 'MT', null] },
  { time: '7:00', cells: ['MT', null, 'MT', null, 'MT'] },
  { time: '8:00', cells: [null, 'TG', null, 'TG', null] },
  { time: '15:30', cells: ['MT', null, 'MT', null, 'MT'] },
  { time: '18:00', cells: ['TK', 'JK', 'TK', 'JK', null] },
  { time: '19:00', cells: ['JJ', 'MT', 'MT', 'MT', 'JJ'] },
  { time: '20:00', cells: ['MT', 'JJ', 'JJ', 'JJ', 'MT'] },
]

export const FILTERS = [
  { id: 'all', label: 'Todas' },
  { id: 'mt', label: 'Muay Thai' },
  { id: 'jj', label: 'Jiu Jitsu' },
  { id: 'kids', label: 'Kids' },
  { id: 'fem', label: 'Thai Girls' },
]

export const MARQUEE_ITEMS = ['Muay Thai', 'Jiu Jitsu', 'Thai Kids', 'Jiu Kids', 'Thai Girls', 'King of Glory']

export const GALLERY = [
  {
    src: '/assets/thai-kids.webp',
    alt: 'Professora orientando crianças no treino de Muay Thai',
    caption: 'Thai Kids',
    desc: 'Técnica e disciplina desde cedo, com acompanhamento de perto em cada golpe.',
  },
  {
    src: '/assets/clinch.webp',
    alt: 'Professor demonstrando técnica de clinch de Muay Thai com aluno',
    caption: 'Técnicas de Muay Thai',
    desc: 'Demonstrações de clinch no Muay Thai.',
  },
  {
    src: '/assets/jiu-equipe.webp',
    alt: 'Equipe de Jiu Jitsu reunida no tatame',
    caption: 'Equipe Jiu Jitsu',
    desc: 'A família do kimono reunida depois de mais um treino puxado.',
  },
  {
    src: '/assets/graduacao-jiu.webp',
    alt: 'Alunos de Jiu Jitsu com seus certificados de graduação',
    caption: 'Graduação Jiu Jitsu',
    desc: 'Faixas e certificados entregues a adultos e crianças da equipe.',
  },
  {
    src: '/assets/graduacao-thai.webp',
    alt: 'Turma de Muay Thai exibindo certificados de graduação',
    caption: 'Graduação Muay Thai',
    desc: 'Turma inteira reunida na entrega de certificados do Muay Thai.',
  },
  {
    src: '/assets/turma-thai.webp',
    alt: 'Turma de Muay Thai reunida no tatame depois do treino',
    caption: 'Turma de Muay Thai',
    desc: 'A turma reunida no fim do treino — suor dividido vira time.',
  },
  {
    src: '/assets/turma-completa.webp',
    alt: 'Alunos da King of Glory reunidos com certificados',
    caption: 'Turma Completa',
    desc: 'Mais de cem alunos celebrando juntos o ciclo concluído.',
  },
  {
    src: '/assets/corner.webp',
    alt: 'Professor orientando dois alunos mirins no ringue',
    caption: 'Eventos Internos',
    desc: 'Onde nos desafiamos com quem conhecemos, no ringue de casa.',
  },
]

export const UNIDADES = [
  {
    nome: 'Unidade Parque Viaduto',
    endereco: ['Rua Antônio Garbe de Mattos, 7-84', 'Bauru — SP'],
    maps: 'https://www.google.com/maps/search/?api=1&query=Rua+Ant%C3%B4nio+Garbe+de+Mattos+7-84+Bauru+SP',
  },
  {
    nome: 'Unidade Sta Edwirges',
    endereco: ['Alameda Urano, 1-129', 'Bauru — SP'],
    maps: 'https://www.google.com/maps/search/?api=1&query=Alameda+Urano+1-129+Bauru+SP',
  },
]
