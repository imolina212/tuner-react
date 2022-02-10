import React from 'react';
import './Index.css'
import SongTable from '../Components/SongTable'

function Index() {
  return (
    <div className='Index'>
      <h1>Songs</h1>
      <SongTable />
    </div>);
}

export default Index;
