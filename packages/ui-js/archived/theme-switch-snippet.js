// 1. SELECT ELEMENTS
const themeToggleBtn = document.getElementById('theme-toggle');
const rootElement = document.documentElement;

// 2. INITIALIZE THEME ON PAGE LOAD
const initializeTheme = () => {
  // Check for saved preference first, then fall back to system setting
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    rootElement.classList.add('dark');
  } else if (savedTheme === 'light') {
    rootElement.classList.remove('dark');
  }
};

// 3. TOGGLE HANDLER
const toggleTheme = () => {
  const isDarkMode = rootElement.classList.toggle('dark');

  // Save the explicit user choice to local storage
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
};

// RUN INITIALIZATION
initializeTheme();

// LISTEN FOR CLICKS
themeToggleBtn?.addEventListener('click', toggleTheme);
