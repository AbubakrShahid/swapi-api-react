import React, {useEffect, useState} from 'react';

function Characters() {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPeople = async () => {
    try {
      const response = await fetch('https://swapi.dev/api/people');
      const data = await response.json();

      setPeople(data.results);
    } catch (err) {
      setError('Unable to fetch the data.');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchPeople();
  }, [])

  if (error) {
    return <div className='danger'>{error}</div>
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>Display Star Wars Characters</h1>
      <ul>
        {people.map((person) => (
          <li key={person.name}>
            <span style={{color:person.eye_color||'black'}}>{person.name}</span> - Eye Color: {person.eye_color}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Characters;
