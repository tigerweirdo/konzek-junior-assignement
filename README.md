
# Project Title: Country Explorer SPA

## Project Overview

Country Explorer is a single-page application (SPA) that allows users to query, filter, and view detailed information about countries using the public GraphQL Countries API. The application features a dynamic list of countries, searchable and groupable by various criteria, with a focus on user interaction and data visualization.

### Features

- **GraphQL API Integration**: Fetches data from the GraphQL Countries API.
- **Dynamic Search, Filtering, and Grouping**: Users can dynamically search for countries by name and group the results by continent, language, or other attributes. The application supports complex queries for advanced search and grouping functionalities.
- **Interactive List**: Provides an interactive list where countries can be selected and deselected. Selections are highlighted with a distinct border color, and only one country can be selected at a time.
- **Automatic Selection**: Automatically selects the 10th item (or the last one if fewer than 10 items are available) in the list upon loading or filtering.
- **Customizable UI**: Utilizes Ant Design components for a polished user interface, with visual feedback for loading states, errors, and item selections.

## Installation

### Prerequisites

- Node.js (version 14 or later)
- npm (version 6 or later) or yarn

### Getting Started

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/country-explorer-spa.git
   cd country-explorer-spa
   ```

2. Install dependencies:
   ```sh
   npm install
   ```
   or if you use yarn:
   ```sh
   yarn install
   ```

3. Start the development server:
   ```sh
   npm start
   ```
   or with yarn:
   ```sh
   yarn start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Deployment

The application is deployed at [Vercel](https://konzek-junior-assignement.vercel.app/). Visit the link to see the live version of the Country Explorer SPA.

## Usage

- **Viewing Countries**: The main page displays a list of countries fetched from the GraphQL API.
- **Advanced Search and Grouping**: Use the application's search and grouping functionalities to filter countries based on textual matches and group them by attributes such as continent or language. For example, to search for countries that contain "sweden" and group them by their continent, use the application's interactive interface.
- **Selecting a Country**: Click on a country from the list to select it. The background color of the selected country's card will change to indicate it's the active selection. The application supports single selection, meaning only one country can be selected at a time.

## Contributing

We welcome contributions to the Country Explorer project! If you have suggestions for improvements or bug fixes, please follow our contribution guidelines:

1. Fork the repository.
2. Create a new branch for your feature or fix.
3. Commit your changes with clear, descriptive messages.
4. Push your branch and submit a pull request.

Please ensure your code adheres to the project's coding standards and include any relevant tests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
