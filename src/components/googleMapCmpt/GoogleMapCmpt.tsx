import {
  GoogleMap,
  InfoWindow,
  Marker,
  useLoadScript,
} from '@react-google-maps/api';
import React, { useState } from 'react';

const containerStyle = {
  width: '100%',
  height: '500px', // 지도 높이
};

const center = {
  lat: 37.5665, // 서울 위도
  lng: 126.978, // 서울 경도
};

const locations = [
  {
    lat: 37.5665,
    lng: 126.978,
    number: 'plc.1',
    title: 'Seoul City Hall',
    address: '110, Sejong-daero, Jung-gu, Seoul',
  },
  {
    lat: 37.57,
    lng: 126.982,
    number: 'plc.2',
    title: 'Deoksugung Palace',
    address: '99, Sejong-daero, Jung-gu, Seoul',
  },
  {
    lat: 37.56,
    lng: 126.97,
    number: 'plc.3',
    title: 'Namdaemun Market',
    address: '21, Namdaemunsijang 4-gil, Jung-gu, Seoul',
  },
];

const GoogleMapCmpt: React.FC = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    language: 'en',
  });

  const [selected, setSelected] = useState<any>(null);
  const [search, setSearch] = useState<string>('');

  const filteredLocations = locations.filter(
    (location) =>
      location.title.toLowerCase().includes(search.toLowerCase()) ||
      location.address.toLowerCase().includes(search.toLowerCase())
  );

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="border-[0.3px] border-blue-200 p-8">
      <div className="flex flex-col md:flex-row">
        {/* 지도 */}
        <div className="flex-grow">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15}
          >
            {filteredLocations.map((location, index) => (
              <Marker
                key={index}
                position={{ lat: location.lat, lng: location.lng }}
                onClick={() => setSelected(location)}
              />
            ))}

            {selected && (
              <InfoWindow
                position={{ lat: selected.lat, lng: selected.lng }}
                onCloseClick={() => setSelected(null)}
              >
                <div>
                  <h2 className="text-lg font-bold">{selected.title}</h2>
                  <p>{selected.address}</p>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        </div>

        <div className="w-full md:w-1/3 bg-transparent overflow-auto md:ml-6 mt-6 flex flex-col gap-6">
          <input
            type="text"
            placeholder="Enter a location..."
            className="w-full p-3 border border-blue-900/30 bg-transparent text-sm lg:text-base focus:outline-none placeholder-blue-900/60"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <ul>
            {filteredLocations.map((location, index) => (
              <li
                key={index}
                className="p-2 mb-2 border-b-[0.3px] border-blue-900/90 cursor-pointer hover:bg-green-200/20"
                onClick={() => setSelected(location)}
              >
                <h3 className="font-semibold mb-2">{location.title}</h3>
                <div className="flex md:flex-row gap-6 justify-between items-center uppercase ">
                  <p className="text-[11px]">{location.number}</p>
                  <p className="font-light">{location.address}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GoogleMapCmpt;
