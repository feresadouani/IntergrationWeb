document.querySelectorAll('.kanban-card').forEach(card => {
  card.addEventListener('mousedown', () => {
    card.style.cursor = 'grabbing';
  });

  card.addEventListener('mouseup', () => {
    card.style.cursor = 'grab';
  });
});
