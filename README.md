# Price Tracker

Price Tracker is a simple web application that allows users to track the prices of items listed on Amazon. With Price Tracker, users can post links to Amazon products, and the application will scrape the current price of the item and track its price daily. The application also provides a detailed page for each item, displaying a price graph for easy visualization of price fluctuations.

## Technologies Used

- React
- Node.js
- Express.js
- MongoDB
- Tailwind CSS
- Puppeteer
- Recharts
- Node-cron

## Key Features

- User-friendly interface for adding and tracking Amazon product prices.
- Daily price scraping to keep track of price fluctuations.
- Detailed item pages with price graphs for visualizing price history.
- Integration with MongoDB for data storage and retrieval.
- Built with React for the front-end and Node.js/Express.js for the back-end.
- UI styling using Tailwind CSS for a clean and responsive design.
- Price scraping using Puppeteer to fetch data from Amazon's website.
- Data visualization using Recharts to display price graphs.

## Installation

1. Clone the repository:
  git clone https://github.com/your-username/price-tracker.git

2. Install dependencies for the server:
   cd server
   npm install

3. Install dependencies for the client:
   cd client
   npm install

4. Set up the environment variables:
- Create a `.env` file in the `server` directory.
- Add the necessary environment variables for MongoDB connection, API keys, etc.
- DB_URI, JWT_SECRET, HOST_URI

5. Start the development server:
   cd server
   npm start
   This will start the Node.js server.

6. Start the client development server:
   cd client
   npm run dev

This will start the React development server.

## Usage

1. Open the application in your browser.
2. Add an Amazon product link to start tracking its price.
3. View the item's details page to see the price history graph and track price changes over time.

<div align="center">
    <h1 style="text-align: center;">Screenshots</h1>
</div>

<div align="center">
    <h2 style="text-align: center;">Desktop</h2>
</div>

<div align=center style="display: flex; flex-direction: row; justify-content: center; align-items: center; margin: 3px auto">
    <img src="/Screenshots/1.png" alt="Desktop 1" align=top width="450">
    <img src="/Screenshots/2.png" alt="Desktop 2" align=top width="450">
</div>

---

<div align=center style="display: flex; flex-direction: row; justify-content: center; align-items: center; margin: 3px auto">
    <img src="/Screenshots/3.png" alt="Desktop 3" align=top width="450">
    <img src="/Screenshots/4.png" alt="Desktop 4" align=top width="450">
</div>

---

<div align=center style="display: flex; flex-direction: row; justify-content: center; align-items: center; margin: 6px auto">
    <img src="/Screenshots/5.png" alt="Desktop 5" align=top width="450">
    <img src="/Screenshots/6.png" alt="Desktop 6" align=top width="450">
</div>

---

<div align="center">
    <h2 style="text-align: center;">Mobile</h2>
</div>

<div align=center style="display: flex; flex-direction: row; justify-content: center; align-items: center; margin: 3px auto">
    <img src="/Screenshots/mobile-1.png" alt="Mobile 1" align=top width="300px">
    <img src="/Screenshots/mobile-2.png" alt="Mobile 2" align=top width="300px">
    <img src="/Screenshots/mobile-3.png" alt="Mobile 3" align=top width="300px">
</div>

---

<div align=center style="display: flex; flex-direction: row; justify-content: center; align-items: center; margin: 3px auto">
    <img src="/Screenshots/mobile-4.png" alt="Mobile 4" align=top width="300px">
    <img src="/Screenshots/mobile-5.png" alt="Mobile 5" align=top width="300px">
</div>


<div align="center">
    <h2 style="text-align: center;">Tablet</h2>
</div>

<div align=center style="display: flex; flex-direction: row; justify-content: center; align-items: center; margin: 3px auto">
    <img src="/Screenshots/tablet-1.png" alt="Tablet 1" align=top width="350">
    <img src="/Screenshots/tablet-2.png" alt="Tablet 2" align=top width="350">
</div>

---

<div align=center style="display: flex; flex-direction: row; justify-content: center; align-items: center; margin: 3px auto">
    <img src="/Screenshots/tablet-3.png" alt="Tablet 3" align=top width="350">
    <img src="/Screenshots/tablet-4.png" alt="Tablet 4" align=top width="350">
</div>

---

<div align=center style="display: flex; flex-direction: row; justify-content: center; align-items: center; margin: 6px auto">
    <img src="/Screenshots/tablet-5.png" alt="Tablet 5" align=top width="350">
    <img src="/Screenshots/tablet-6.png" alt="Tablet 6" align=top width="350">
</div>

---



## Acknowledgements

- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Puppeteer](https://pptr.dev/)
- [Recharts](https://recharts.org/)
- [Node-cron](https://www.npmjs.com/package/node-cron)
