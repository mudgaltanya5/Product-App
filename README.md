# Product Explorer App
A simple and responsive React application that allows users to browse, search and filter the products using an API.<hr/>

# Features
<ul>
  <li>Real Time Search Functionality</li>
  <li>Product listing (image, title, price)</li>
  <li>Loading and error handling</li>
  <li>Responsive UI using Bootstrap</li>
</ul><hr/>

#  Technology Used
<ul>
  <li>React js</li>
  <li>Javascript(E65+)</li>
  <li>HTML & CSS</li>
  <li>Bootstrap</li>
</ul><hr/>

# API Used
Fake Store API<br/>
Open [https://fakestoreapi.com/products](https://fakestoreapi.com/products)
Provides product data such as title, image , price and rating.<hr/>

# Setup Instructions
git clone [https://github.com/mudgaltanya5/product-app.git](https://github.com/mudgaltanya5/product-app.git)<br/>
cd product-app<br/>
npm install<br/>
npm start<br/>
Run the app on: [http://localhost:3000](http://localhost:3000) to view it in your browser.<hr/>

# Key Architectural Decisions
<ol>
  <li>
    State Management
  </li>
  Used React Hooks:
  <ul>
    <li>
      useState → manage products, filtered data, loading, and error states
    </li>
     <li>
     useEffect → fetch API data on component mount
    </li>
  </ul>
  <li>
    Component Structure
  </li>
  The application is divided into reusable components:
  <ul>
    <li>
      Navbar
    </li>
     <li>
       SearchBar
    </li>
    <li>
      ProductList
    </li>
     <li>
       ProductCard
    </li>
     This improves readability and maintainability.
  </ul>
  <li>
     Data Flow
  </li>
  <ul>
     <li>Data is fetched in App.js</li>
     <li>Passed to child components via props</li>
     <li>Search updates filtered data in parent components</li>
  </ul>
 <li>
   Search Implementation
 </li>
  Implemented using Javascript .filter() method for real-time results.
</ol><hr/>

# Author
Tanya Mudgal


