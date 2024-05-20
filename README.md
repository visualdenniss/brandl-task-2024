You will need the Gatsby CLI, you can find installation instructions here: https://www.gatsbyjs.com/docs/tutorial/part-0/

Execute gatsby develop in the repository's root directory to start a development server (default: http://localhost:8000/)

If you open the page in your browser, it should display the names of 7 products. Familiarize yourself with the existing code and try to understand how it works - I have used a plugin to read data from JSON files in the repository, which I then query using graphql (see src/pages/index.js). You can open GraphiQL, a GraphQL explorer, using http://localhost:8000/\_\_\_graphql

Now for the actual task:

- Display all the products in a grid (name, image, description and correctly formatted price) ✅
- Use the styled-components library to style it (doesn't have to be a fancy design, just some basic structure) ✅
- Implement a basic search: Add an input field and filter the displayed products based on what the user entered ✅
- For each product, a new page should be created, i.e. /astaxanthin, /bio-maca-pulver, etc. and show the product details. The user can access this page by clicking on a product in the grid. Consult the Gatsby documentation on how to create routes. ✅

You can add and use any additional npm packages, if you want to.

Please use lazy loading for images. Consult the Gatsby documentation on how to best do this with Gatsby. ✅
