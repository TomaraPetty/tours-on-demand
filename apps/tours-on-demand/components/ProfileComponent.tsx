'use client';

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Edit, MapPin, Music, Navigation } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ProfileData {
  bandName: string;
  city: string;
  profileImage: string;
  bio?: string;
  genre?: string;
}

export function ProfileComponent() {
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState<ProfileData>({
    bandName: '',
    city: '',
    profileImage: '',
    bio: '',
    genre: ''
  });

  useEffect(() => {
    // Load mock profile data
    const mockData: ProfileData = {
      bandName: 'The Rockers',
      city: 'Los Angeles',
      profileImage: 'https://www.schoolofrock.com/resources/music-education/analyzing-the-lyrics-queer-themes-in-rock-music',
      bio: 'We are an energetic rock band from LA, bringing fresh sounds to the music scene.',
      genre: 'Rock'
    };
    setProfileData(mockData);
    setEditForm(mockData);
  }, []);

  const fetchProfileData = async () => {
    // Mock implementation - in real app this would fetch from API
    console.log('Fetching profile data...');
  };

  const handleSave = async () => {
    try {
      // Mock save - in real app this would save to API
      console.log('Saving profile:', editForm);
      setProfileData(editForm);
      setIsEditing(false);
    } catch (error) {
      console.error('Error saving profile:', error);
    }
  };

  if (!profileData) {
    return (
      <div className="flex justify-center items-center min-h-96">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-neutral-400"></div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Profile Card */}
      <div className="lg:col-span-1">
        <Card className="p-6 bg-neutral-800/50 backdrop-blur-sm border-slate-700">
          <div className="text-center">
            <div className="relative inline-block mb-6">
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-slate-600 shadow-lg">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/5b0487ff620b85272892562c/4eb5ce3b-1cb1-450b-950d-8ae7b51dcd05/senses_01.jpg?format=1500w"
                  alt="Band Profile"
                  fill
                  className="object-cover"
                />
              </div>
              {isEditing && (
                <Button
                  size="sm"
                  className="absolute bottom-0 right-0 rounded-full"
                  onClick={() => {/* Handle image upload */}}
                >
                  <Edit className="w-4 h-4" />
                </Button>
              )}
            </div>
            
            <h2 className="text-2xl font-bold text-orange-200 mb-2 font-roboto">
              {profileData?.bandName || 'My Band'}
            </h2>
            
            <div className="flex items-center justify-center text-orange-50 mb-4">
              <MapPin className="w-4 h-4 mr-2" />
              <span>{profileData?.city || 'Unknown City'}</span>
            </div>

            <div className="flex items-center justify-center text-orange-50 mb-6">
              <Music className="w-4 h-4 mr-2" />
              <span>{profileData?.genre || 'Rock'}</span>
            </div>

            <div className="space-y-6">
              <Button
                onClick={() => setIsEditing(!isEditing)}
                className="w-full bg-slate-700 hover:bg-slate-600 text-orange-50"
              >
                {isEditing ? 'Cancel' : 'Edit Profile'}
              </Button>
              
              <Link href="/tour-cities" className="block">
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-orange-50">
                  <Navigation className="w-4 h-4 mr-2" />
                  Map a Tour
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>

      {/* Profile Details */}
      <div className="lg:col-span-2">
        <Card className="p-6 bg-neutral-800/50 backdrop-blur-sm border-slate-700">
          <h3 className="text-xl font-bold text-orange-200 mb-6 font-roboto">
            Band Information
          </h3>
          
          {isEditing ? (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-orange-50 mb-2">
                  Band Name
                </label>
                <input
                  type="text"
                  value={editForm.bandName}
                  onChange={(e) => setEditForm({...editForm, bandName: e.target.value})}
                  className="w-full px-3 py-2 bg-neutral-700/50 border border-slate-600 rounded-md text-orange-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-orange-50 mb-2">
                  City
                </label>
                <input
                  type="text"
                  value={editForm.city}
                  onChange={(e) => setEditForm({...editForm, city: e.target.value})}
                  className="w-full px-3 py-2 bg-neutral-700/50 border border-slate-600 rounded-md text-orange-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-orange-50 mb-2">
                  Genre
                </label>
                <input
                  type="text"
                  value={editForm.genre}
                  onChange={(e) => setEditForm({...editForm, genre: e.target.value})}
                  className="w-full px-3 py-2 bg-neutral-700/50 border border-slate-600 rounded-md text-orange-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-orange-50 mb-2">
                  Bio
                </label>
                <textarea
                  value={editForm.bio}
                  onChange={(e) => setEditForm({...editForm, bio: e.target.value})}
                  rows={4}
                  className="w-full px-3 py-2 bg-neutral-700/50 border border-slate-600 rounded-md text-orange-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Tell us about your band..."
                />
              </div>
              
              <Button
                onClick={handleSave}
                className="w-full bg-orange-600 hover:bg-orange-700 text-orange-50"
              >
                Save Changes
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-orange-200 mb-2">About</h4>
                <p className="text-orange-50">
                  {profileData?.bio || 'No bio available. Click "Edit Profile" to add one.'}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-lg font-semibold text-orange-200 mb-2">Band Name</h4>
                  <p className="text-orange-50">{profileData?.bandName}</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-orange-200 mb-2">Location</h4>
                  <p className="text-orange-50">{profileData?.city}</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-orange-200 mb-2">Genre</h4>
                  <p className="text-orange-50">{profileData?.genre}</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-orange-200 mb-2">Member Since</h4>
                  <p className="text-orange-50">
                    {new Date().toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
