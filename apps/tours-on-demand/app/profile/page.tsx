import { ProfileComponent } from '@/components/ProfileComponent';

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4 font-righteous">
            Your Profile
          </h1>
          <p className="text-xl text-gray-300">
            Manage your band information and profile
          </p>
        </div>
        
        <ProfileComponent />
      </div>
    </div>
  );
}
