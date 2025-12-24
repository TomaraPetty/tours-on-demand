'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { Card } from '@/components/ui/card';
import { MapPin, RotateCcw } from 'lucide-react';
import L from 'leaflet';

// Fix for default markers in Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Dynamically import Leaflet components to avoid SSR issues
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

interface City {
  id: string;
  name: string;
  country?: string;
  lat?: number;
  lng?: number;
}

interface CityMapProps {
  cities: City[];
  onReset: () => void;
}

// Simple geocoding function (in production, use a proper geocoding service)
const geocodeCity = async (cityName: string, country?: string): Promise<{ lat: number; lng: number } | null> => {
  const query = country ? `${cityName}, ${country}` : cityName;
  
  try {
    // Using OpenStreetMap Nominatim API (free)
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=1`
    );
    const data = await response.json();
    
    if (data && data.length > 0) {
      return {
        lat: parseFloat(data[0].lat),
        lng: parseFloat(data[0].lon)
      };
    }
  } catch (error) {
    console.error('Geocoding error:', error);
  }
  
  return null;
};

export function CityMap({ cities, onReset }: CityMapProps) {
  const [geocodedCities, setGeocodedCities] = useState<City[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [mapCenter, setMapCenter] = useState<[number, number]>([20, 0]);

  useEffect(() => {
    if (cities.length > 0) {
      geocodeCities();
    }
  }, [cities]);

  const geocodeCities = async () => {
    setIsLoading(true);
    const geocoded: City[] = [];
    
    for (const city of cities) {
      const coords = await geocodeCity(city.name, city.country);
      if (coords) {
        geocoded.push({
          ...city,
          lat: coords.lat,
          lng: coords.lng
        });
      }
    }
    
    setGeocodedCities(geocoded);
    
    // Center map on first city or default center
    if (geocoded.length > 0) {
      setMapCenter([geocoded[0].lat!, geocoded[0].lng!]);
    }
    
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <Card className="p-6 bg-neutral-800/50 backdrop-blur-sm border-slate-700">
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-orange-600 mx-auto mb-4"></div>
            <p className="text-neutral-50">Finding your cities on the map...</p>
          </div>
        </div>
      </Card>
    );
  }

  if (geocodedCities.length === 0) {
    return (
      <Card className="p-6 bg-neutral-800/50 backdrop-blur-sm border-slate-700">
        <div className="text-center">
          <MapPin className="w-16 h-16 text-slate-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-neutral-50 mb-2 font-righteous">
            No Cities Found
          </h3>
          <p className="text-slate-300 mb-4">
            We couldn&apos;t locate the cities you entered. Please check the spelling and try again.
          </p>
          <button
            onClick={onReset}
            className="text-orange-600 hover:text-orange-500 underline"
          >
            Try Again
          </button>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6 bg-neutral-800/50 backdrop-blur-sm border-slate-700">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <MapPin className="w-6 h-6 text-orange-600" />
          <h3 className="text-xl font-bold text-neutral-50 font-righteous">
            Your Tour Cities
          </h3>
        </div>
        <button
          onClick={onReset}
          className="flex items-center gap-2 text-slate-400 hover:text-neutral-50 transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          Reset
        </button>
      </div>

      <div className="h-96 w-full rounded-lg overflow-hidden border border-slate-700">
        <MapContainer
          center={mapCenter}
          zoom={3}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          {geocodedCities.map((city, index) => (
            <Marker
              key={city.id}
              position={[city.lat!, city.lng!]}
            >
              <Popup>
                <div className="text-center">
                  <div className="font-bold text-lg text-slate-800">
                    #{index + 1}
                  </div>
                  <div className="font-semibold text-slate-700">
                    {city.name}
                  </div>
                  {city.country && (
                    <div className="text-sm text-slate-600">
                      {city.country}
                    </div>
                  )}
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      <div className="mt-4 text-sm text-slate-300">
        Found {geocodedCities.length} of {cities.length} cities on the map
      </div>
    </Card>
  );
}
