import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container, Heading } from '@chakra-ui/react'

import MainMenu from './pages/MainMenu.jsx'
import Game from './pages/Game.jsx'
import LeaderBoard from './pages/LeaderBoard.jsx'
import Rules from './pages/Rules.jsx'
import Nav from './components/Nav.jsx' // optional if you're using a tab nav

const App = () => {
  return (
    <Router>
      <header>
        <Heading as="h1" size="2xl" textAlign="center" marginTop="6">
          Welcome to the Game
        </Heading>
      </header>

      {/* <Nav /> Optional: Tab-based navigation */}

      <main>
        <Container maxW="container.md" mt={8}>
          <Routes>
            <Route path="/" element={<MainMenu />} />
            <Route path="/game" element={<Game />} />
            <Route path="/leaderboard" element={<LeaderBoard />} />
            <Route path="/rules" element={<Rules />} />
          </Routes>
        </Container>
      </main>

      <footer>
        {/* Add footer stuff here */}
      </footer>
    </Router>
  )
}

export default App
