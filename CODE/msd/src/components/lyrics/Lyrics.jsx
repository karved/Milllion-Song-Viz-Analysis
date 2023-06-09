import React from 'react'
import Navbar from '../Navbar';
import Container from '@mui/material/Container';
import * as d3 from 'd3';
import{useEffect} from 'react';

export default function Lyrics() {

  useEffect(() => { 
  d3.select("#tooltip").remove()
  },[])

  return (
    <div>
      <Navbar val={2} />
      <Container style={{marginTop:"2%",marginLeft:"15%", width:"85%"}}>
        
      <iframe title="DVA" width="1024" height="700" src="https://app.powerbi.com/view?r=eyJrIjoiYzVhYzA2YTAtODYyOC00NmUxLWI4NWQtYmNjZmJhZDJiMjdhIiwidCI6IjhkMWE2OWVjLTAzYjUtNDM0NS1hZTIxLWRhZDExMmY1ZmI0ZiIsImMiOjN9&pageName=ReportSection" frameborder="0" allowFullScreen="true"></iframe>
      </Container>
        
    </div>
  )
}
