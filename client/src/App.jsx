import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styles from './index.module.css'
import sqlLogo from './assets/sql-logo.png'

function App() {
  const [queryDescription, setQueryDescription] = useState("")

  return (
    <main className={styles.main}>
      <img src={sqlLogo} alt = "" className={styles.icon}/>
      <h3>Generate SQL with AI</h3>

      <form>
        <input
        type="text"
        name="query-description"
        placeholder="Describe your query"
        onChange={(e) => setQueryDescription(e.target.value)}
        />
        <input type="submit" value="Generate query"/>
      </form>
    </main>
  )
}

export default App
