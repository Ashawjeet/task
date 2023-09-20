import React, { useState, useEffect } from 'react';
import '../Tailoring Extraordinary page/Adventure.css';


import axios from "axios";
import showNotification from '../../helpers/show_notification';
import AddLocation from './AddLocation';

const AddState = () => {
  const [turn , setTurn] = useState(false)
  const [location , setLocation] = useState(true)
   const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
const [state , setState] = useState('')
const [cancel , setCancel] = useState(null)
const [showAddStates ,setShowAddStates] = useState(false)
    const [showAddForm, setShowAddForm] = useState(false)
    const [editedFormData, setEditedFormData] = useState(false)
    const [formData, setFormData] = useState({
      state: '',
      firstPara: '',
      caraIndex: null,
      secondPara: '',
      caraImgLocation: [],
      // locationType: '' ,
      // locationImg: [],
      // locationDescription: '',
      // locationTitle: ''
  
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

  const handleToggleImage = (id) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, showImage: !item.showImage } : item
      )
    );
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    console.log('files58' , files)
    setSelectedFiles(files);
  };
  const handleFileChangeLocation = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };


  const handleEdit = async (id  , item, s , index) => {

    try {
        setEditedFormData(true)
      console.log("Deleting item with ID:", id ,"s:", s , index , item);
    //   const response = await axios.post('http://192.34.63.158:4000/adventure/edit', { id: id });
    //   showNotification(response.data.message, "Success");
    //   fetchData();
    } catch (error) {
      console.error("Error deleting item:", error);
    }
    return;
  };

  const handleDeleteRow = async (id , item , index ,s) => {
    try {
      console.log("Deleting item with ID:", id ,"s:", s , index , item);
      const response = await axios.delete(`http://192.34.63.158:4000/locations/delete/${id._id}`);
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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevFormData) => ({ ...prevFormData, team: file }));
  };

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:4000/stateDatas/getall');
      console.log("Status58:", response.data.data);

      // Check for a successful response (status code 200-299)
      if (response.status >= 200 && response.status < 300) {
        setData(response.data.data);
      } else {
        throw new Error('Network response was not ok.');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const handleStateData = async (e) => {
    e.preventDefault();

    // console.log("formdara146", formData)
    console.log("formdara147", editedFormData)

    try {
      const formData2 = new FormData();

      selectedFiles.forEach((file, index) => {
        formData2.append(`caraImgstateData`, file);

      });
      // formData2.append('locationImg', selectedFile);
      
      // Assuming formData.state, formData.firstPara, and formData.secondPara are variables with values
      const stateValue = formData.state; // Replace with the actual value
      const firstParaValue = formData.firstPara; // Replace with the actual value
      const secondParaValue = formData.secondPara; // Replace with the actual value
      // const locationDescription = formData.locationDescription
      // const locationTitle = formData.locationTitle

      formData2.append('state', stateValue);
      formData2.append('firstPara', firstParaValue);
      formData2.append('secondPara', secondParaValue);
      // formData2.append('locationDescription',locationDescription)
      // formData2.append('locationTitle' , locationTitle)
      console.log("formData137", formData2);
      const response = await axios.post('http://localhost:4000/stateDatas/add', formData2);

      console.log('response139' , response)
      console.log('140')
      if (response.status >= 200 && response.status < 300) {
        setCancel(false)
        showNotification("updated successfully", "Success")
        console.log('154')
        
        window.alert(response.data.message);
        window.location.reload();

        // Reload the team data after successful update

      } else {
        console.log('err')
        setCancel(false)
        window.alert(response.data.message);
        throw new Error('Network response was not ok.');
        

      }
    } catch (error) {
      console.error('Error updating team:', error);
    }
  };

console.log("state:174" , state.state)
  const handleSubmitFormEdit = async (e) => {
    e.preventDefault();

    // console.log("formdara146", formData)
    console.log("formdara147", editedFormData)

    try {
      const formData2 = new FormData();

      selectedFiles.forEach((file, index) => {
        formData2.append(`caraImgLocation`, file);
      });
      
      
      
      // Assuming formData.state, formData.firstPara, and formData.secondPara are variables with values
      // const stateValue = formData.state; // Replace with the actual value
      const firstParaValue = formData.firstPara; // Replace with the actual value
      const secondParaValue = formData.secondPara; // Replace with the actual value
      const caraIndex = formData.caraIndex;

      formData2.append('state', state.state);
      formData2.append('firstPara', firstParaValue);
      formData2.append('secondPara', secondParaValue);
      formData2.append('caraIndex', caraIndex);
      
      console.log("formData137", formData2);
      const response = await axios.put('http://localhost:4000/locations/updateStateData', formData2);

      console.log('response202' , response.data.msg)
      console.log('201')
      if (response.status >= 200 && response.status < 300) {
        setTurn(false)
        showNotification("updated successfully", "Success")
        console.log('207')
        
        window.alert(response.data.msg);
       
        window.location.reload();

      } else {
        console.log('err',)
        window.alert( "select caraIndex to update photo");
        setTurn(false)
       
        throw new Error('Network response was not ok.');
      
      }
    } catch (error) {
      console.error('Error updating team:', error.response.data.msg);
      window.alert("select caraIndex to update photo");
    }
  };
  console.log("70", data)
  return (
    <> 
    <div>
    
     
      <div className='myAdvantureContainerr' style={{padding:'50px'}}>
        <div>
          <button onClick={() => setLocation(!location)}>StateData</button>
          <button onClick={() => setLocation(!location)}>LocationData</button>
        </div> 
       
    {location &&  <h2 style={{backgroundColor:'white',fontWeight:'bold', color:'green', backgroundColor:'white',margin:5, padding:'5px'}} onClick={() => setShowAddStates(true)}>Add StateData <span ><img style={{width:'2%', height:'2%'}} src='https://originalslimstudios.com/cdn/shop/files/white-logo_523d0423-e830-42a3-b48b-d18779fa1c78.gif?v=1659745340' /></span>

 </h2> }
    {!location && <AddLocation />}
 {location &&

   <div> 
      {showAddStates && (
    <div className='blurBackground'>

      <div className="blurForml" style={{marginTop:'50px'}}>
      <br />
  <h1>add state data here</h1>
  <br />
        <form >
          <label>
            state:
            <input
              type="text"
              value={formData.state}
              onChange={(e) => setFormData({ ...formData, state: e.target.value })}
            />
            <br />
          </label>
          <label>
          firstPara:
            <input
              type="text"
              value={formData.firstPara}
              onChange={(e) => setFormData({ ...formData, firstPara: e.target.value })}
            />
          </label>
          <label>
          secondPara:
            <input
              type="text"
              value={formData.secondPara}
              onChange={(e) => setFormData({ ...formData, secondPara: e.target.value })}
            />
          </label>
          <label>
            AddCara Image:
            <input
            type="file"
            onChange={handleFileChange}
            accept="image/*"
            multiple

          />
          </label>
          {/* <label>
          locationType:
            <select value={formData.locationType} onChange={(e) => setFormData({ ...formData, locationType: e.target.value })}>
        <option value="popular place">Popular Places</option>
        <option value="hill station">Hill Station</option>
        <option value="religious place">Religious Places</option>
        <option value="adventure place">Adventure Places</option>
        <option value="museum">Museums</option>
      </select>
          </label>
          <label>
          locationImg:
          <input
            type="file"
            onChange={handleFileChangeLocation}
            accept="image/*"

          />
          </label>
          <label>
          locationDescription:
            <input
              type="text"
              value={formData.locationDescription}
              onChange={(e) => setFormData({ ...formData, locationDescription: e.target.value })}
            />
          </label>
          <label>
          locationTitle:
            <input
              type="text"
              value={formData.locationTitle}
              onChange={(e) => setFormData({ ...formData, locationTitle: e.target.value })}
            />
          </label> */}
          <button onClick={handleStateData}>Submit</button>

          <button onClick={() => setCancel(false)} >Cancel</button>
          {/* <button style={{ backgroundColor: "orange" }} onClick={setShowAddStates(false)}>Cancel</button> */}
        </form>
      </div>

    </div>
  )}
  </div>
  }
  { location && turn && (
    <div className='blurBackground'>
      <div className="blurForml">

<div>Update {data[0].state} State Data
  </div>
        <form >
        
          <label>
          UpdateFirstPara:
            <input
              type="text"
              value={formData.firstPara}
              onChange={(e) => setFormData({ ...formData, firstPara: e.target.value })}
            />
          </label>
          <label>
          UpdateSecondPara:
            <input
              type="text"
              value={formData.secondPara}
              onChange={(e) => setFormData({ ...formData, secondPara: e.target.value })}
            />
          </label>
          <label>
            UpdateCara Image:
            <input
            type="file"
            onChange={handleFileChange}
            accept="image/*"
            multiple

          />
          <label>
          caraIndex:
            <input
              type = "number"
              value={formData.caraIndex}
              onChange={(e) => setFormData({ ...formData, caraIndex: e.target.value })}
            />
          </label>
          </label>
          <button onClick={ (e) => handleSubmitFormEdit(e)}>Submit</button>
          <button  onClick={ (e) => setTurn(false)}>cancel</button> 
          {/* <button style={{ backgroundColor: "orange" }} onClick={setTurn(true)}  >Cancel</button> */}
        </form>

      </div>
    </div>
  )} 
  
      { location &&
       <table>
          <thead className='ag11'>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>firstPara</th>
              <th>secondPara</th>
              <th>Actions</th>
              
            </tr>
          </thead>
          <tbody>
         

  {data && data.map((item) => (
    <tr className="colm11" key={item._id}>

      <td>{item.state}</td>
      <div className='scroll' >
      {item.caraImgstateData && item.caraImgstateData.map((s , index) => (
        <React.Fragment  key={s._id}>
      
          <td  className='caraimgs'> 
            <img src={`http://localhost:4000/caraImgstateData/${s}`} alt={s} style={{ width: '100px' }} />
            <h6>{index+1}</h6>
          </td>
          
         
          
        </React.Fragment>
      ))}
       </div>
       <td>{item.firstPara}</td>
          <td>{item.secondPara}</td>
          <td>
          <button onClick={() => {setTurn(true) ; setState(item) } }>Edit Statedata</button>
          </td>
          <td>
            <button onClick={() => handleDeleteRow(item )}>Delete stateData</button>
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

export default AddState ;