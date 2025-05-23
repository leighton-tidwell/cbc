export const createHeader = () => {
  return `
    <header class="header">
      <div class="container header-container">
        <a href="#" class="logo" data-page="home">
          <img src="/images/logo.png" alt="Calvary Baptist Church Logo">
        </a>
        <nav>
          <button class="mobile-menu-toggle" aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul class="nav-list">
            <li><a href="#" class="nav-link active" data-page="home">Home</a></li>
            <li><a href="#" class="nav-link" data-page="about">About</a></li>
            <li><a href="#" class="nav-link" data-page="events">Events</a></li>
            <li><a href="#" class="nav-link" data-page="contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  `;
};

export const updateActiveNavLink = (page) => {
  document.querySelectorAll('.nav-link').forEach((link) => {
    link.classList.remove('active');
    if (link.dataset.page === page) {
      link.classList.add('active');
    }
  });
};
