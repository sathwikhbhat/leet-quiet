const roastHTML = `
  <style>
    .roast-container {
      margin: 0;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #0f172a;
      color: #f1f5f9;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
    }
    .roast-content {
      text-align: center;
      padding: 2rem;
      max-width: 600px;
    }
    .roast-badge {
      display: inline-block;
      padding: 0.5rem 1rem;
      border-radius: 9999px;
      font-weight: 700;
      font-size: 0.875rem;
      color: white;
      background-image: linear-gradient(to right, #f43f5e, #f97316);
      margin-bottom: 1rem;
    }
    .roast-heading {
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }
    .roast-text {
      font-size: 1.1rem;
      color: #cbd5e1;
    }
    .roast-button {
      margin-top: 2rem;
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
      border: none;
      border-radius: 0.5rem;
      font-weight: bold;
      background: linear-gradient(to right, #14b8a6, #4ade80);
      color: white;
      cursor: pointer;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .roast-button:hover {
      transform: scale(1.05);
      box-shadow: 0 0 15px rgba(20, 184, 166, 0.6);
    }
  </style>
                
  <div class="roast-container">
      <div class="roast-content">
        <div class="roast-badge">Access Denied 😏</div>
        <h1 class="roast-heading">Trying to be smart, aah!?</h1>
        <p class="roast-text">
          Looks like you're trying to peek at the solutions... but we both know growth comes from the grind 🧠💪
        </p>
        <button onclick="window.history.back()" class="roast-button">
          Take me back to the problem!
        </button>
      </div>
  </div>
`;

const quote = `
<div style="
  display: inline-block;
  padding: 4px 12px;
  border-radius: 9999px;
  font-weight: 600;
  color: white;
  font-size: 0.875rem;
  text-align: center;
  background: linear-gradient(to right, rgba(20, 184, 166, 0.9), rgba(99, 102, 241, 0.9));
  backdrop-filter: blur(4px);
">
  Your Brain > The Solution Tab 🧠🔥
</div>
`;