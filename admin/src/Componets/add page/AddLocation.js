import React, { useState, useEffect } from 'react';
import '../Tailoring Extraordinary page/Adventure.css';


import axios from "axios";
import showNotification from '../../helpers/show_notification';

const AddLocation = () => {
  const [id , setId] = useState('')
  const [turn , setTurn] = useState(false)
  const [state , setState] = useState('')
   const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
const [editingForms , setEditingForms] = useState(false)
const [cancel , setCancel] = useState(null)
const [showAddStates ,setShowAddStates] = useState(false)
    const [showAddForm, setShowAddForm] = useState(false)
    const [editedFormData, setEditedFormData] = useState(false)
    const [formData, setFormData] = useState({
      state: '',
      firstPara: '',
      caraIndex: -1,
      secondPara: null,
      caraImgLocation: [],
      locationType: '' ,
      locationImg: [],
      locationDescription: '',
      locationTitle: ''
  
    });
  const [data, setData] = useState([

    {
      id: 1,

      name: 'Aghori',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7TG_gnIWcJDShUfM4p9zvHiPSVvHSajp5k7Nhv9tGsbrw0pHjzGLWg8Dr4eRbDcRwpo0&usqp=CAU',
      locUrl: 'https://gaana.com/podcast/ek-kahani-aisi-bhi-season-1',
    },

    {
      id: 2,

      name: 'Raj Kamal',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROwHFfzRnRm6kcgE-qzWWXsWIe1Ipl_rycf67UO5wpILy_7Sdz_Oa8Jv9q3K8ENFNCP2U&usqp=CAU',
      locUrl: 'https://gaana.com/podcast/ek-kahani-aisi-bhi-season-1',
    },
    // Add more data items here if needed
  ]);

  
  

  const handleFileChangeLocation = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };


  

  const handleDeleteRow = async (id , item , index ,s) => {
    try {
      console.log("Deleting item with ID:", id._id ,"s:" , state, s , index , item);

      const response = await axios.delete(`http://localhost:4000/locations/deleteLocation/${id._id}/${state}`); 
      showNotification(response.data.message, "Success");
      fetchData();
    } catch (error) {
      console.error("Error deleting item:", error);
    }
    return;
  };

  useEffect(() => {


    fetchData();
  }, []);

  

  const fetchData = async () => {
    try {
      const response = await axios.get('http://192.34.63.158:4000/locations/getAll');
      // console.log("Status110:", response.data.data[0].exactLocation);
      setState( response.data.data[0].state);
      // Check for a successful response (status code 200-299)
      if (response.status >= 200 && response.status < 300) {
        setData(response.data.data[0].exactLocation);
      } else {
        throw new Error('Network response was not ok.');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  

// console.log("1745:" ,id)
  const handleSubmitFormEdit = async (e) => {
    e.preventDefault();


    // console.log("formdara146", formData)
    // console.log("formdara147", editedFormData)

    try {
      const formData2 = new FormData();

      // Assuming formData.state, formData.firstPara, and formData.secondPara are variables with values
      const locationType = formData.locationType; // Replace with the actual value
      const locationTitle = formData.locationTitle; // Replace with the actual value
      const locationDescription = formData.locationDescription; // Replace with the actual value
     
      formData2.append('locationImg', selectedFile);
      formData2.append('state', state);

      formData2.append('locationType', locationType);
      formData2.append('locationTitle', locationTitle);
      formData2.append('locationDescription', locationDescription);
      formData2.append('locationId', id._id);
      

      console.log("formData137", formData2 , id);
      const response = await axios.put('http://localhost:4000/locations/updatelocationData', formData2);

      console.log('response202' , response.data.msg)
      console.log('201')
      if (response.status >= 200 && response.status < 300) {
        setTurn(false)
        showNotification("updated successfully", "Success")
        console.log('207')
        
        window.alert(response.data.msg);
        // Reload the team data after successful update

      } else {
        console.log('err')
        setTurn(false)
        window.alert(response.data.msg);
        throw new Error('Network response was not ok.');

      }
    } catch (error) {
      console.error('Error updating team:', error);
    }
  };
  console.log("70", data)
  return (
    <> 
    <div>
    
     
      <div className='myAdvantureContainerr' style={{marginLeft:'0px'}}>
       
    {  <h2 >Update locations </h2> }
 
  { turn && (
    <div className='blurBackground'>

      <div className="blurForml" style={{top:'50%'}}>
<div style={{justifyContent:'center' , display:'flex'}}><h4>Update {state} location Data</h4></div>
        <form >
       
          
          <label>
          Update locationDescription:
            <input
              type="text"
              value={formData.locationDescription}
              onChange={(e) => setFormData({ ...formData, locationDescription: e.target.value })}
            />
          </label>
          
          <label>
          Update locationType:
            <select value={formData.locationType} onChange={(e) => setFormData({ ...formData, locationType: e.target.value })}>
        <option value="popular place">Popular Places</option>
        <option value="hill station">Hill Station</option>
        <option value="religious place">Religious Places</option>
        <option value="Adventure Place">Adventure Places</option>
        <option value="museum">Museums</option>
      </select>
          </label>
          <label>
          Update locationImg:
          <input
            type="file"
            onChange={handleFileChangeLocation}
            accept="image/*"

          />
          </label>
         
         
        
          <button onClick={ (e) => handleSubmitFormEdit(e)}>Update</button>
          <button  onClick={ (e) => setTurn(false)}>cancel</button> 
          {/* <button style={{ backgroundColor: "orange" }} onClick={setTurn(true)}  >Cancel</button> */}
        </form>

      </div>
    </div>
  )} 
  
      { 
       <table>
          <thead className='ag11'>
            <tr>
              <th>Location</th>
              <th>Location Image</th>
              <th>Location Type</th>
              <th>Location Description</th>
           
              <th>Actions</th>
              
            </tr>
          </thead>
          <tbody>
         

  {data && data.map((item) => (
    <tr className="colm11" key={item._id}>

      <td>{item.locationTitle}</td>
      <div className='scroll' >
      
      
          <td  className='caraimgs'> 
            <img src={`http://192.34.63.158:4000/locationImg/${item.locationImg}`} alt={item.locationTitle} style={{ width: '100px' }} />
            
          </td>
          
         
        
       </div>
       <td>{item.locationType}</td>
          <td>{item.locationDescription}</td>
          <td>
          <button onClick={() => {setTurn(true) ; setId(item);}}>Edit Locationdata</button>
          </td>
          <td>
            <button onClick={() => handleDeleteRow(item )}>Delete LocationData</button>
          </td>

    </tr>
   
  ) )} 
</tbody>


        </table>
}


      </div>
      


</div>

    </>
  )
}

export default AddLocation ;