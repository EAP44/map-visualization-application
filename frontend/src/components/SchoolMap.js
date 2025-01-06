import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import imageUrl from '../pngegg.ico';
import L from "leaflet";


function SchoolMap() {
  const [classrooms, setClassrooms] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:5000/api/classrooms')
      .then((response) => setClassrooms(response.data))
      .catch((err) => console.log(err));
  }, []); 


  const customIcon = new L.Icon({
    iconUrl: imageUrl,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  });
  

  // const handleClassroomClick = (start, end) => {
  //   axios.post('http://localhost:5000/api/classrooms/shortest-path', { start, end })
  //     .then((response) => console.log(response.data));
  // };

  return (
    <MapContainer center={[34.00764489775214, -6.838413737824203]} zoom={19} style={{ height: '950px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {classrooms.map((room) => (
        <Marker position={room.coordinates} key={room.name} icon={customIcon}>
          <Popup>
            -{room.name}<br />
            Rabat, Morocco <br /> Faculté des Sciences de Rabat.
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default SchoolMap;
