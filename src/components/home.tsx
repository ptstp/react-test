import * as React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


//import './App.css'

export const Home = () => {
  return (



    <div>
    <Link to="/"> Эспертная оценка </Link>
    <Link to="/buy"> Акты техэкспертизы </Link>
    <Link to="/about"> Демонтаж/мотаж </Link>
    <Link to="/contacts"> Самовывоз/погрузка</Link>
    <Link to="/contacts"> Отчёт содержания цветных/черных/драгметаллов</Link>

</div>


    // <div className="container">
    //   <h1> Эспертная оценка</h1>
    //   <h1> Акты техэкспертизы</h1>
    //   <h1> Демонтаж/мотаж</h1>
    //   <h1> Самовывоз/погрузка</h1>
    //   <h1> Отчёт содержания цветных/черных/драгметаллов</h1>
      
    // </div>
  )
}
