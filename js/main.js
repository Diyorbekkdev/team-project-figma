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



  var showOverlayBtn = document.querySelector('.show-overlay-btn');
  var overlay = document.querySelector('.overlay');
  var card = document.querySelector('.card');
  
  showOverlayBtn.addEventListener('click', function() {
    overlay.style.display = 'block';
    card.style.pointerEvents = 'none';
  });
  
  overlay.addEventListener('click', function() {
    overlay.style.display = 'none';
    card.style.pointerEvents = 'auto';
  });
  
  