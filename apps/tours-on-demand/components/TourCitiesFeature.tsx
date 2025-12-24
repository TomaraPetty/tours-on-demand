'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CityForm } from '@/components/CityForm';
import { CityMap } from '@/components/CityMap';
import { Button } from '@/components/ui/button';

interface City {
  id: string;
  name: string;
  country?: string;
}

export function TourCitiesFeature() {
  const [cities, setCities] = useState<City[]>([]);
  const [showMap, setShowMap] = useState(false);
  const router = useRouter();

  const handleCitiesSubmit = (submittedCities: City[]) => {
    setCities(submittedCities);
    setShowMap(true);
  };

  const handleReset = () => {
    setCities([]);
    setShowMap(false);
  };

  const handleStartCampaign = () => {
    if (cities.length > 0) {
      localStorage.setItem('campaignCities', JSON.stringify(cities));
      router.push('/all-campaigns');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4 font-righteous">
            Plan Your Tour Cities
          </h1>
          <p className="text-xl text-gray-300">
            Add your top cities and see them plotted on the map
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <CityForm onCitiesSubmit={handleCitiesSubmit} />
          </div>
          
          <div>
            {showMap ? (
              <CityMap cities={cities} onReset={handleReset} />
            ) : (
              <div className="h-96 flex items-center justify-center bg-white/5 rounded-lg border border-white/20">
                <div className="text-center text-gray-400">
                  <div className="text-6xl mb-4">🗺️</div>
                  <p className="text-lg">Add cities to see them on the map</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {showMap && cities.length > 0 && (
          <div className="mt-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 max-w-2xl mx-auto">
              <p className="text-gray-300 mb-4">
                When you are satisfied click here to create your campaigns for these cities.
              </p>
              <Button
                onClick={handleStartCampaign}
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg"
                size="lg"
              >
                Start Your Campaign
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
