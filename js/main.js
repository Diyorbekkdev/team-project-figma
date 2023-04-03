function toggleSidebar() {
    var sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('open');
    var closeBtn = document.querySelector('.close-btn');
    if (sidebar.classList.contains('open')) {
      closeBtn.style.display = 'block';
    } else {
      closeBtn.style.display = 'none';
    }
  }



  const card = document.querySelector('.card');
  card.addEventListener('click', () => {
    card.classList.add('clicked');
  });
  
  
  