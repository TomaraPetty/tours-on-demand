import { ProfileComponent } from '@/components/ProfileComponent';

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-neutral-900 to-slate-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-orange-200 mb-4 font-roboto">
            Artist Profile
          </h1>
          <p className="text-xl text-orange-50">
            Manage your band information and profile
          </p>
        </div>
        
        <ProfileComponent />
      </div>
    </div>
  );
}
