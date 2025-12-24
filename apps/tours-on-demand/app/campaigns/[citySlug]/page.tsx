import { CampaignDetailsFeature } from '@/components/CampaignDetailsFeature';

export default async function CampaignDetailsPage({
  params,
}: {
  params: Promise<{ citySlug: string }>;
}) {
  const { citySlug } = await params;
  return <CampaignDetailsFeature citySlug={citySlug} />;
}

