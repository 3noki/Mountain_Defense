function accordion(){
  document.querySelectorAll('.accordion').forEach((acc, i, all) => {
  acc.addEventListener('click', () => {
    hideOthers(acc);
    acc.classList.toggle('active');
    const panelStyle = acc.nextElementSibling.style;
    panelStyle.display = panelStyle.display === 'block' ? 'none' : 'block';
  })

  function hideOthers(me) {
    all.forEach(acc => {
      if (acc !== me) {
        acc.classList.remove('active');
        acc.nextElementSibling.classList.remove('show');
        acc.nextElementSibling.style.display = 'none';
      }
    });
  }
});
}
