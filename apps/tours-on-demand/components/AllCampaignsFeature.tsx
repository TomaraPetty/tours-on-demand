'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MapPin, ArrowRight } from 'lucide-react';

interface City {
  id: string;
  name: string;
  country?: string;
}

export function AllCampaignsFeature() {
  const [cities, setCities] = useState<City[]>([]);
  const router = useRouter();

  useEffect(() => {
    const storedCities = localStorage.getItem('campaignCities');
    if (storedCities) {
      try {
        setCities(JSON.parse(storedCities));
      } catch (error) {
        console.error('Error parsing stored cities:', error);
      }
    }
  }, []);

  const slugifyCityName = (cityName: string): string => {
    return cityName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '') + '-details';
  };

  const capitalizeCityName = (cityName: string): string => {
    return cityName
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const handleViewDetails = (city: City) => {
    const slug = slugifyCityName(city.name);
    router.push(`/campaigns/${slug}`);
  };

  if (cities.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-neutral-900 to-slate-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-orange-700 mb-4 font-abcsolar">
              All Campaigns
            </h1>
            <p className="text-xl text-orange-50 mb-8">
              No campaigns found. Please create campaigns from the tour cities page.
            </p>
            <Button
              onClick={() => router.push('/tour-cities')}
              className="bg-orange-600 hover:bg-orange-700 text-orange-50"
            >
              Go to Tour Cities
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-neutral-900 to-slate-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-orange-700 mb-4 font-abcsolar">
            All Campaigns
          </h1>
          <p className="text-xl text-orange-200">
            Manage your tour campaigns for each city
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cities.map((city, index) => (
            <Card
              key={city.id}
              className="p-6 bg-neutral-800/50 backdrop-blur-sm border-slate-700 hover:bg-neutral-800 transition-colors"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-600/20 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-orange-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-orange-200 font-abcsolar mb-1">
                    {capitalizeCityName(city.name)}
                  </h3>
                  {city.country && (
                    <p className="text-slate-400 text-sm">{city.country}</p>
                  )}
                </div>
              </div>

              <div className="mt-6">
                <Button
                  onClick={() => handleViewDetails(city)}
                  className="w-full bg-orange-600 hover:bg-orange-700 text-orange-50"
                >
                  View Details
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

