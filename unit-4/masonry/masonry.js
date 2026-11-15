const grid = document.querySelector('.js-masonry-grid');

if (grid) {
  new Masonry(grid, {
    itemSelector: '.js-masonry-card',
    columnWidth: 200,
    gutter: 16
  });
}
