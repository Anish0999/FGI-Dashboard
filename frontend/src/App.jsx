import { useState } from 'react'


function App() {

  const[showEvent, setShowEventForm] = useState(false);
  const[formData, setFormData] = useState({
    name: '',
    info: '',
    date: ''
  });

  const [events, setEvents] = useState([]);

  const handleEvent = () => {
      setShowEventForm(true);
  }

  const handleChange = (e) => {
    const  {name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  const handleDelete = () => {
    setShowEventForm(false);
    setFormData({
      name: '',
      info: '',
      date: ''
    });
  };

  const handleSubmit = () => {
    setEvents((prevEvents) => [...prevEvents, formData]);
    setFormData({
      name: '',
      info: '',
      date: ''
    });
    setShowEventForm(false);
  }

  return (
    <>
    <div className='top'>
     <button onClick = {handleEvent}>Add event</button>
      {showEvent && (
        <div className = 'new-event'>
          <label>
            Name:
            <input
            type = "text"
            name = "name"
            value = {formData.name}
            onChange={handleChange} 
            />
          </label>

          <label>
            Info:
            <input 
              type="text" 
              name="info" 
              value={formData.info} 
              onChange={handleChange} 
            />
          </label>



          <label>
            Date:
            <input 
              type="date" 
              name="date" 
              value={formData.date} 
              onChange={handleChange} 
            />
          </label>

          <button className = 'submit' onClick ={handleSubmit}>Submit</button>
          <button className = 'delete' onClick ={handleDelete}>Delete</button>
        </div>




      )}
      <div className = "event-list">
        <h2>Submitted Events:</h2>
        {events.map((event, index) => (
          <div key = {index} className = 'event'>
              <p><strong>Event:</strong> {index + 1}</p>
              <p><strong>Name:</strong> {event.name}</p>
              <p><strong>Info:</strong> {event.info}</p>
              <p><strong>Date:</strong> {event.date}</p>
              </div>
        ))}
      </div>

     </div>

    </>
  );
}

export default App
