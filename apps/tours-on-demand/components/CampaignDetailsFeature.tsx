'use client';

import { useEffect, useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Video, Upload, ArrowLeft } from 'lucide-react';

interface City {
  id: string;
  name: string;
  country?: string;
}

interface CampaignDetailsFeatureProps {
  citySlug: string;
}

export function CampaignDetailsFeature({ citySlug }: CampaignDetailsFeatureProps) {
  const [city, setCity] = useState<City | null>(null);
  const [promoVideoUrl, setPromoVideoUrl] = useState<string>('https://youtu.be/zPTbgmR20J8?si=PcwGCGuorKLSuCK8');
  const router = useRouter();

  // Generate random number of fans between 1 and 250
  const fanCount = useMemo(() => Math.floor(Math.random() * 250) + 1, []);
  const maxFans = 250;
  const progressPercentage = (fanCount / maxFans) * 100;

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

  useEffect(() => {
    const storedCities = localStorage.getItem('campaignCities');
    if (storedCities) {
      try {
        const cities: City[] = JSON.parse(storedCities);
        const foundCity = cities.find(c => slugifyCityName(c.name) === citySlug);
        if (foundCity) {
          setCity(foundCity);
        } else {
          // City not found, redirect back
          router.push('/all-campaigns');
        }
      } catch (error) {
        console.error('Error parsing stored cities:', error);
        router.push('/all-campaigns');
      }
    } else {
      router.push('/all-campaigns');
    }
  }, [citySlug, router]);

  const handleVideoUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPromoVideoUrl(e.target.value);
  };

  const handleReserveTicket = () => {
    // TODO: Implement ticket reservation logic
    console.log('Reserve ticket clicked');
  };

  // Convert YouTube URL to embed format
  const getYouTubeEmbedUrl = (url: string): string | null => {
    if (!url) return null;
    
    // Extract video ID from various YouTube URL formats
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    ];
    
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match && match[1]) {
        return `https://www.youtube.com/embed/${match[1]}`;
      }
    }
    
    return null;
  };

  const embedUrl = getYouTubeEmbedUrl(promoVideoUrl);

  if (!city) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-neutral-900 to-slate-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <p className="text-orange-200">Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-neutral-900 to-slate-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="mb-6">
          <Button
            onClick={() => router.push('/all-campaigns')}
            variant="ghost"
            className="text-orange-200 hover:text-orange-600 hover:bg-neutral-800"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Campaigns
          </Button>
        </div>

        {/* City Name Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-orange-200 mb-2 font-roboto">
            {capitalizeCityName(city.name)}
          </h1>
          {city.country && (
            <p className="text-xl text-orange-50">{city.country}</p>
          )}
        </div>

        {/* Promo Video Section */}
        <Card className="p-6 bg-neutral-800/50 backdrop-blur-sm border-slate-700 mb-10 max-w-2xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <Video className="w-6 h-6 text-orange-600" />
            <h2 className="text-2xl font-bold text-orange-200 font-roboto">
              Promo Video
            </h2>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-orange-50 mb-2">
                Video URL (YouTube, Vimeo, etc.)
              </label>
              <div className="flex gap-3">
                <input
                  type="text"
                  value={promoVideoUrl}
                  onChange={handleVideoUrlChange}
                  placeholder="https://youtube.com/watch?v=..."
                  className="flex-1 px-4 py-2 bg-neutral-700/50 border border-slate-600 rounded-md text-orange-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <Button
                  className="bg-orange-600 hover:bg-orange-700 text-orange-50"
                >
                  <Upload className="w-4 h-4 mr-2" />
                  Add Video
                </Button>
              </div>
            </div>

            {embedUrl && (
              <div className="mt-4">
                <div className="aspect-video bg-neutral-900/50 rounded-lg border border-slate-700 overflow-hidden">
                  <iframe
                    src={embedUrl}
                    title="Promo Video"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            )}
          </div>
        </Card>

        {/* Progress Bar Section */}
        <Card className="p-6 bg-neutral-800/50 backdrop-blur-sm border-slate-700 mb-10 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-orange-200 font-roboto mb-6">
            Campaign Progress
          </h2>
          
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-orange-50">Fans Joined</span>
              <span className="text-orange-200 font-bold">{fanCount} / {maxFans}</span>
            </div>
            <div className="w-full bg-neutral-700/50 rounded-full h-4 overflow-hidden">
              <div
                className="bg-orange-600 h-full transition-all duration-500 rounded-full"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>

          <p className="text-xl text-orange-200 text-center mt-6">
            You have <span className="font-bold text-orange-600">{fanCount}</span> amount of fans coming to this show
          </p>
        </Card>

        {/* Reserve Ticket Section */}
        <Card className="p-6 bg-neutral-800/50 backdrop-blur-sm border-slate-700 max-w-2xl mx-auto">
          <div className="text-center">
            <p className="text-orange-50 mb-6 max-w-xl mx-auto">
              When you reserve we will put a temporary hold and you wont be charged anything unless the date gets booked. When the date reaches enough tickets the threshold is met and your card will be charged at that time.
            </p>
            
            <Button
              onClick={handleReserveTicket}
              className="bg-orange-600 hover:bg-orange-700 text-orange-50 px-8 py-6 text-lg"
              size="lg"
            >
              Reserve your ticket
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

