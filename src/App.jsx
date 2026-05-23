import {useState,useEffect} from "react"


function App() {
  const [quote, setQuote] = useState("Loading...")

  async function getQuote() {
  try {
    const response = await fetch("https://dummyjson.com/quotes/random");
    const data = await response.json();
    setQuote(data.quote); // DummyJSON uses 'quote' instead of 'content'
  } catch (error) {
    setQuote("Failed to load quote");
  }
}
  useEffect(() => {
    getQuote()
  },[])
  return (
      <div style={styles.container}> 
        <h1> AI Quote Generator </h1>
        <p style={styles.quote}> {quote}</p>
        <button onClick={getQuote} style={styles.button}> New Quote</button>
      </div>
  )
}


 const styles={
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    textAlign: "center",
    gap: "20px",
    backgroundColor: "#0f172a",
    color: "white",
  },

  quote: {
    fontSize: "20px",
    maxWidth: "500px",
    lineHeight: "1.5",
    marginTop: "20px",
  },

  button: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "8px",
    border: "none",
  },
 };
export default App
