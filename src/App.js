import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./Components/header";
import ContactPage from "./Components/contactCard";
import Search from "./Components/Search";
import { ContextProvider } from "./Components/store/authContext";

function App() {
  const [data, setData] = useState("");
  const [loadingState, setLoadingState] = useState(true);
  const [error, setError] = useState("");
  const [input, setInput] = useState(10);

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/`;
    async function getData() {
      try {
        const response = await fetch(url);
        let userData = await response.json();
        setData(userData.slice(0, input));
        setError("");
      } catch (e) {
        setError(e.message);
        setData("");
      } finally {
        setLoadingState(false);
      }
    }

    getData();
  }, [input]);

  function searchChangeHandler(e) {
    e.preventDefault();
    setInput(e.target.value);
  }

  return (
    <ContextProvider>
      <div className="container">
        {error && <div>An error has occured</div>}
        {loadingState && <div> Loading Api...</div>}
        <Header />
        <Search onQuary={input} onSearch={searchChangeHandler} />
        <div className="contact-container">
          {data &&
            data.map(
              ({
                id,
                name,
                company,
                address,
                catchPhrase,
                bs,
                phone,
                email,
                suite,
                street,
                website,
              }) => {
                return (
                  <ContactPage
                    key={id}
                    name={name}
                    company={company.name}
                    address={address.city}
                    catchPhrase={company.catchPhrase}
                    bs={company.bs}
                    phone={phone}
                    email={email}
                    suite={address.suite}
                    street={address.street}
                    website={website}
                  />
                );
              }
            )}
        </div>
      </div>
    </ContextProvider>
  );
}

export default App;
