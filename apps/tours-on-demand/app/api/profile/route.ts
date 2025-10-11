import { auth0 } from '@/lib/auth0';
import { NextRequest, NextResponse } from 'next/server';

// Mock profile data storage (in production, use a database)
const profiles: Record<string, any> = {};

export async function GET() {
  try {
    const session = await auth0.getSession();
    
    if (!session) {
      return NextResponse.json(
        { error: 'Not authenticated' },
        { status: 401 }
      );
    }

    const userId = session.user.sub;
    const userProfile = profiles[userId] || {
      bandName: session.user.name || 'My Band',
      city: 'Los Angeles',
      profileImage: session.user.picture || '/logo.png',
      bio: 'Tell us about your band...',
      genre: 'Rock',
      memberSince: new Date().toLocaleDateString()
    };

    return NextResponse.json(userProfile);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: error.status || 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await auth0.getSession();
    
    if (!session) {
      return NextResponse.json(
        { error: 'Not authenticated' },
        { status: 401 }
      );
    }

    const userId = session.user.sub;
    const profileData = await request.json();

    // Validate required fields
    if (!profileData.bandName || !profileData.city) {
      return NextResponse.json(
        { error: 'Band name and city are required' },
        { status: 400 }
      );
    }

    // Store profile data
    profiles[userId] = {
      ...profileData,
      updatedAt: new Date().toISOString()
    };

    return NextResponse.json(profiles[userId]);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: error.status || 500 }
    );
  }
}
