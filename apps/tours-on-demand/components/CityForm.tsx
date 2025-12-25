'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Plus, X, MapPin } from 'lucide-react';

interface City {
  id: string;
  name: string;
  country?: string;
}

interface CityFormProps {
  onCitiesSubmit: (cities: City[]) => void;
}

export function CityForm({ onCitiesSubmit }: CityFormProps) {
  const [cities, setCities] = useState<City[]>([
    { id: '1', name: '', country: '' }
  ]);

  const addCity = () => {
    if (cities.length < 10) {
      setCities([...cities, { id: Date.now().toString(), name: '', country: '' }]);
    }
  };

  const removeCity = (id: string) => {
    if (cities.length > 1) {
      setCities(cities.filter(city => city.id !== id));
    }
  };

  const updateCity = (id: string, field: 'name' | 'country', value: string) => {
    setCities(cities.map(city => 
      city.id === id ? { ...city, [field]: value } : city
    ));
  };

  const handleSubmit = () => {
    const validCities = cities.filter(city => city.name.trim() !== '');
    onCitiesSubmit(validCities);
  };

  return (
    <Card className="p-6 bg-neutral-800/50 backdrop-blur-sm border-slate-700">
      <div className="flex items-center gap-2 mb-6">
        <MapPin className="w-6 h-6 text-orange-600" />
        <h3 className="text-xl font-bold text-orange-200 font-abcsolar">
          Top Cities
        </h3>
      </div>
      
      <p className="text-orange-50 mb-6">
        Add up to 10 cities where you&apos;d like to perform. We&apos;ll plot them on the map!
      </p>

      <div className="space-y-4 mb-6">
        {cities.map((city, index) => (
          <div key={city.id} className="flex gap-3 items-center">
            <div className="flex-1">
              <input
                type="text"
                placeholder={`City ${index + 1}`}
                value={city.name}
                onChange={(e) => updateCity(city.id, 'name', e.target.value)}
                className="w-full px-3 py-2 bg-neutral-700/50 border border-slate-600 rounded-md text-orange-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div className="flex-1">
              <input
                type="text"
                placeholder="Country (optional)"
                value={city.country || ''}
                onChange={(e) => updateCity(city.id, 'country', e.target.value)}
                className="w-full px-3 py-2 bg-neutral-700/50 border border-slate-600 rounded-md text-orange-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            {cities.length > 1 && (
              <Button
                onClick={() => removeCity(city.id)}
                size="sm"
                variant="ghost"
                className="text-slate-400 hover:text-orange-50 hover:bg-slate-700"
              >
                <X className="w-4 h-4" />
              </Button>
            )}
          </div>
        ))}
      </div>

      <div className="flex gap-3">
        {cities.length < 10 && (
          <Button
            onClick={addCity}
            variant="outline"
            className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-orange-50"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add City
          </Button>
        )}
        
        <Button
          onClick={handleSubmit}
          className="bg-orange-600 hover:bg-orange-700 text-orange-50"
        >
          Plot Cities on Map
        </Button>
      </div>

      <div className="mt-4 text-sm text-slate-400">
        {cities.length}/10 cities added
      </div>
    </Card>
  );
}
