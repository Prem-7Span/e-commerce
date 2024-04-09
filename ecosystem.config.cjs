module.exports = {
  apps: [{
    name: "e-commerce",
    script: "npm run dev", // Replace with your server script path
    env: {
      NODE_ENV: "development",
      PORT: 5173, // Adjust port as needed
    },
  }],
};
