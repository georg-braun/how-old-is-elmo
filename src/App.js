import './App.css';
import moment from "moment"

import { useEffect, useState } from "react";

function App() {

  const [ageInWeeks, setAgeInWeeks] = useState();
  const [ageInMonths, setAgeInMonths] = useState();

  useEffect(() => {
    calcAge();
    setInterval(() => {calcAge()}, 100000);
  })


  return (
    <div className="App">
    <h1>🐶</h1>
     <h1>{ageInWeeks} Wochen</h1>
     ~
     <h3>{ageInMonths} Monate</h3>
     <p>10.06.2021 🚀</p>
    </div>
  );


  function calcAge(){
    var dateOfBirth = new moment("2021-06-10");
    var today = new moment();
    
    var ageInWeeks = today.diff(dateOfBirth, 'weeks');
    var ageInMonths = today.diff(dateOfBirth, 'months');
    
    setAgeInWeeks(ageInWeeks);
    setAgeInMonths(ageInMonths);
  }
}



export default App;
