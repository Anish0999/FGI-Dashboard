import { useState } from 'react'


function App() {

  const[showEvent, setShowEvent] = useState(false);

  const handleEvent = () => {
      setShowEvent(true);
  }

  return (
    <>
    <div className='top'>
     <button onClick = {handleEvent}>Add event</button>
      {showEvent && <div className = 'new-event'></div> }
     </div>

    </>
  )
}

export default App
