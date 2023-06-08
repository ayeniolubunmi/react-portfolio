import React, { useEffect, useState } from 'react'
import {FaAngleDoubleRight} from 'react-icons/fa'
const url = 'https://course-api.com/react-tabs-project'

export default function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(0);

  async function fetchJobs(){
    const response = await fetch(url);
    const newJob = await response.json();
    setJobs(newJob);
    setLoading(false)
  }

  useEffect(() => {
    fetchJobs();
  }, [])
if(loading){
  <section className='section loading'>
    <h1>loading...</h1>
  </section>
}
const {title,date,duties,company} = jobs[value]
  return (
    <section className='section'>
      <div className='title'>
        <h2>exprience</h2>
        <div className='underline'></div>
      </div>
      <div className='job-center'>
        <div className='btn-container'>
          {jobs.map((item,index)=>{
            return <button key={item.id} onClick={()=>setValue(index)} 
            className={`job-btn ${index === value && "active-btn"}`}>
              {item.company}
              </button>
          })}
        </div>
        <article className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{date}</p>
          {duties.map((duty,index)=>{
            return <div key={index} className='job-desc'>
            <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
            <p>{duty}</p>
            </div>
          })}          
        </article>
      </div>

    </section>
  )
}
