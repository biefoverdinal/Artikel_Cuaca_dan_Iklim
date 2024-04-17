function showSidebar() {
  var sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'block';
}

function hideSidebar() {
  var sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none';
}

function toggleNav() {
  var nav = document.querySelector('nav');
  nav.style.display = (nav.style.display === 'none' || nav.style.display === '') ? 'block' : 'none';
}
