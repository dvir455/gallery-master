'use strict';

const PROJECTS = [
  {
    id: 'minesweeper',
    name: 'Mine Sweeper',
    title: 'An online version of Mine Sweeper',
    desc: `Just an online version of the legendary game Mine Sweeper, Small project, one way to Victory 😜`,
    url: 'https://dvir455.github.io/mine-sweeper-sprint-1/',
    publishedAt: 1448693940000,
    labels: ['Matrixes', 'keyboard events'],
    imgUrl: '../../img/portfolio/minesweeper-thumbnail.jpg',
    client: 'Self Project',
    category: 'Games',
  },
  {
    id: 'bookshop',
    name: 'Book Shop',
    title: 'An Online Admin site book shop',
    desc: `Just a book shop admin panel example`,
    url: 'https://dvir455.github.io/Crudl-ex/',
    publishedAt: 1848693940000,
    labels: ['Matrixes', 'keyboard events'],
    imgUrl: '../../img/portfolio/bookshop-thumbnail.jpg',
    client: 'Self Project',
    category: 'Administration Page',
  },
];

function getProjects() {
  return PROJECTS;
}

function getProject(projId) {
  return PROJECTS.find((proj) => proj.id === projId);
}
