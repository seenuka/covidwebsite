import React from 'react'
import '../Styles/Stats.css'

function Stats() {
  const data = [
    { Continent: "europe", cases: "1M+", deaths: "1B+" },
    { Continent: "America", cases: "1M+", deaths: "1B+" },
    { Continent: "Africa", cases: "1M+", deaths: "1B+" },
    { Continent: "Asia", cases: "1M+", deaths: "1B+" },
    { Continent: "Others", cases: "1M+", deaths: "1B+" },
  ]
  return (
    <div className='table'>
      <h1>STATICAL APPROXIMATE  CALCULATION</h1>
      <table>
        <tr>
          <th>CONTINENT</th>
          <th>CASES</th>
          <th>DEATHS</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.Continent}</td>
              <td>{val.cases}</td>
              <td>{val.deaths}</td>
            </tr>
          )
        })}
      </table>
    </div>
  
  )
}

export default Stats