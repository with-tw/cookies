import {
  Pillar,
  PillarDescription,
  PillarHeadline,
  PillarIcon,
} from '@/components/ui/pillar';
import { Paintbrush } from 'lucide-react';

export const PillarExample = () => (
  <Pillar>
    <PillarIcon>
      <Paintbrush />
    </PillarIcon>
    <PillarHeadline>Design & Accessibility</PillarHeadline>
    <PillarDescription>
      Cookies has a collection of components with fresh design and
      accessibility.
    </PillarDescription>
  </Pillar>
);
