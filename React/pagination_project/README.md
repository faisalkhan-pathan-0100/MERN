# Pagination Project with React Context - Implementation Guide

This guide walks through all the steps to build a pagination system using React Context API.

---

## Step 1: Create the Context

Create a context to store and manage the shared state across components.

**File:** `src/store/AppProvider.jsx`

```jsx
import { createContext } from "react";

export const AppContext = createContext();
```

**Explanation:**

- `createContext()` creates a context object that will hold shared state
- `AppContext` is exported so other components can access it using `useContext()`

---

## Step 2: Create the Context Provider Component

Create the provider component that wraps your app and provides the context values to all child components.

**File:** `src/store/AppProvider.jsx` (Complete file)

```jsx
import { createContext, useEffect, useState } from "react";
import React from "react";

// Step 1: Create the context
export const AppContext = createContext();

// Step 2: Create context provider component
const AppProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 8;

  // Calculate pagination values
  const last = currentPage * itemPerPage;
  const start = last - itemPerPage;
  const currentItems = items.slice(start, last);

  const pages = Math.ceil(items.length / itemPerPage);

  // Fetch data from API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        setItems(json);
      });
  }, []);

  // Step 3: Provide context values
  return (
    <>
      <AppContext.Provider value={{ currentItems, pages, setCurrentPage }}>
        {children}
      </AppContext.Provider>
    </>
  );
};

export default AppProvider;
```

**Explanation:**

- **State Management:**

  - `items`: Stores all posts fetched from API
  - `currentPage`: Tracks the current page number (default: 1)
  - `itemPerPage`: Sets how many items to display per page (8)

- **Pagination Logic:**

  - `last`: Calculates the last item index for current page
  - `start`: Calculates the first item index for current page
  - `currentItems`: Gets only the items for the current page using `slice()`
  - `pages`: Calculates total number of pages

- **Data Fetching:**

  - Uses `useEffect` hook to fetch posts from JSONPlaceholder API on component mount
  - Updates `items` state with fetched data

- **Context Provider:**
  - Provides `currentItems`, `pages`, and `setCurrentPage` to all child components

---

## Step 3: Wrap App with Provider in main.jsx

Set up the root component to use the provider.

**File:** `src/main.jsx`

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AppProvider from "./store/AppProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
```

**Explanation:**

- Wraps the entire `App` component with `AppProvider`
- All child components of `App` now have access to the context

---

## Step 4: Create the Main App Component

Set up the main App component that uses the provider components.

**File:** `src/App.jsx`

```jsx
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import PostList from "./components/PostList";
import Pagination from "./components/Pagination";

function App() {
  return (
    <>
      <Header />
      <PostList />
      <Pagination />
    </>
  );
}

export default App;
```

**Explanation:**

- Renders three main components: `Header`, `PostList`, and `Pagination`
- Previously had local state management (shown in comments) which is now handled by Context

---

## Step 5: Create the PostList Component

Display the current page's posts.

**File:** `src/components/PostList.jsx`

```jsx
import React, { useContext } from "react";
import Post from "./Post";
import { AppContext } from "../store/AppProvider";

function PostList() {
  const { currentItems } = useContext(AppContext);

  return (
    <div className="container">
      <div className="row">
        {currentItems.map((x) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3" key={x.id}>
            <Post item={x} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostList;
```

**Explanation:**

- Uses `useContext(AppContext)` to access `currentItems` from the context
- Maps through `currentItems` to render individual `Post` components
- Uses Bootstrap grid system for responsive layout

---

## Step 6: Create the Post Component

Display individual post details.

**File:** `src/components/Post.jsx`

```jsx
import React from "react";

function Post({ item }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.body}</p>
      </div>
    </div>
  );
}

export default Post;
```

**Explanation:**

- Receives individual post item as a prop
- Displays the post title and body in a Bootstrap card

---

## Step 7: Create the Pagination Component

Display pagination buttons to navigate between pages.

**File:** `src/components/Pagination.jsx`

```jsx
import React, { useContext } from "react";
import { AppContext } from "../store/AppProvider";

export const Pagination = () => {
  const { pages, setCurrentPage } = useContext(AppContext);

  // Create array of page numbers
  const pageNumbers = [];
  for (let i = 1; i <= pages; i++) {
    pageNumbers.push(i);
  }

  const pageHandle = (x) => {
    setCurrentPage(x);
  };

  return (
    <center>
      <div className="m-5">
        {pageNumbers.map((x) => (
          <button
            type="button"
            className="btn btn-light p-3 m-1"
            onClick={() => pageHandle(x)}
          >
            {x}
          </button>
        ))}
      </div>
    </center>
  );
};

export default Pagination;
```

**Explanation:**

- Uses `useContext(AppContext)` to access `pages` and `setCurrentPage` from context
- Creates an array of page numbers from 1 to total pages
- Renders a button for each page
- On button click, calls `setCurrentPage()` to update the current page

---

## Step 8: Create the Header Component

Display the header of the application.

**File:** `src/components/Header.jsx`

```jsx
import React from "react";

function Header() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">Pagination App</span>
      </div>
    </nav>
  );
}

export default Header;
```

**Explanation:**

- Simple header component using Bootstrap navbar
- Displays the application title

---

## Summary of How It Works

1. **AppProvider** wraps the entire app and manages all pagination state
2. **App** component uses three sub-components: Header, PostList, and Pagination
3. **PostList** uses `useContext()` to get `currentItems` and displays them
4. **Pagination** uses `useContext()` to get `pages` and `setCurrentPage()` function
5. When a pagination button is clicked, `setCurrentPage()` is called
6. This updates `currentPage` in the provider, which recalculates `currentItems`
7. **PostList** automatically re-renders with new items

---

## Data Flow Diagram

```
AppProvider (State Management)
    ├── items (all posts from API)
    ├── currentPage (current page number)
    ├── currentItems (posts for current page)
    ├── pages (total pages)
    └── setCurrentPage (update function)
         │
         ├── App
         │    ├── Header
         │    ├── PostList (reads currentItems)
         │    └── Pagination (reads pages, calls setCurrentPage)
```

---

## Key Concepts Used

1. **React Context API:** Share state without prop drilling
2. **useContext Hook:** Access context values in components
3. **useState Hook:** Manage local state in the provider
4. **useEffect Hook:** Fetch data on component mount
5. **Array Slicing:** Paginate items (`slice()`)
6. **Array Mapping:** Render lists dynamically (`.map()`)
7. **Bootstrap Classes:** Responsive styling

---

## Running the Project

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start development server:

   ```bash
   npm run dev
   ```

3. Open browser and navigate to `http://localhost:5173`

---

## Dependencies

- **React:** ^19.2.0
- **Bootstrap:** ^5.3.8
- **Vite:** ^7.2.4 (build tool)

---
