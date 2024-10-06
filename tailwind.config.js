/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens : {
        'asghar' : "800px"
      },
      colors : {
        sabzabi : {
          100 : "#badbd5",
          200 : "#84d1c3",
          300 : "#49d1b8",
          400 : "#25ccad"
        }
      },
      spacing : {
        "large" : "30rem",
        "extralarge" : "520px"
      }
    },
  },
  plugins: [],
}

