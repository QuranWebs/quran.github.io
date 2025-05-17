:root {
  --primary: #4f46e5;
  --bg: #f4f4f9;
  --text: #333;
  --white: #fff;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', sans-serif;
  background-color: var(--bg);
  color: var(--text);
  line-height: 1.6;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--white);
  padding: 1rem 2rem;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary);
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1rem;
}

.nav-links li a {
  text-decoration: none;
  color: var(--text);
  font-weight: 500;
}

.menu-toggle {
  display: none;
  font-size: 1.5rem;
  background: none;
  border: none;
  color: var(--primary);
  cursor: pointer;
}

.hero {
  text-align: center;
  padding: 4rem 2rem;
  background: var(--primary);
  color: var(--white);
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.btn {
  background: var(--white);
  color: var(--primary);
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 3rem 2rem;
}

.feature-card {
  background: var(--white);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

footer {
  text-align: center;
  padding: 1.5rem;
  background: var(--white);
  color: var(--text);
  box-shadow: 0 -2px 5px rgba(0,0,0,0.05);
}

/* Responsive */
@media (max-width: 768px) {
  .nav-links {
    flex-direction: column;
    display: none;
  }
  .nav-links.show {
    display: flex;
    background: var(--white);
    position: absolute;
    top: 60px;
    right: 2rem;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    border-radius: 0.5rem;
    padding: 1rem;
  }
  .menu-toggle {
    display: block;
  }
}
