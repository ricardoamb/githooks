import React, { useState, useEffect } from 'react'

export default function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      const response =  await fetch('https://api.github.com/users/ricardoamb/repos');
      const data = await response.json();
      setRepositories(data);
    }
    fetchdata();
  }, []);

  useEffect(() => {
    const filtered = repositories.filter(repo => repo.favorite);
    document.title = `Ricardo Amb :: ${filtered.length} repositórios favoritos`;
  }, [repositories]);

  const handleFavorite = id => {
    const newRepositories = repositories.map(repo => {
      return repo.id === id ? { ...repo, favorite: !repo.favorite } : repo;
    })
    setRepositories(newRepositories);
  }

  return (
    <>
      <ul>
        { repositories.map(repo => (
          <li key={repo.id}>
            {repo.favorite && <span>⭐</span>}{repo.name}
            <button style={{marginLeft:"10px", border: "none", background: "#6900A8", color: "white"}} onClick={() => handleFavorite(repo.id)}>Favoritar</button>
          </li> 
        ))}
      </ul>
    </>
  )
}