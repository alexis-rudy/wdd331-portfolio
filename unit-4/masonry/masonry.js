import Masonry from 'masonry-layout';
var grid = document.querySelector('.js-masonry-grid');
const msnry = new Masonry(grid, {
    itemSelector: '.js-masonry-card',
    columnWidth: 200,
    gutter: 16
  });