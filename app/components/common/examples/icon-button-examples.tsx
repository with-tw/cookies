'use client';
import { IconButton } from '@/components/ui/icon-button';
import { Text, User } from 'lucide-react';

export const IconButtonDefaultExample = () => (
  <div className="flex flex-row items-center justify-center gap-2">
    <IconButton>
      <Text className="h-4 w-4" />
    </IconButton>
    <IconButton variant="secondary">
      <User className="h-4 w-4" />
    </IconButton>
  </div>
);

export const IconButtonPrimaryExample = () => (
  <IconButton>
    <Text className="h-4 w-4" />
  </IconButton>
);

export const IconButtonPrimarySmallExample = () => (
  <IconButton size="sm">
    <Text className="h-4 w-4" />
  </IconButton>
);

export const IconButtonPrimaryLargeExample = () => (
  <IconButton size="lg">
    <Text className="h-4 w-4" />
  </IconButton>
);

export const IconButtonSecondaryExample = () => (
  <IconButton variant="secondary">
    <Text className="h-4 w-4" />
  </IconButton>
);

export const IconButtonSecondarySmallExample = () => (
  <IconButton variant="secondary" size="sm">
    <Text className="h-4 w-4" />
  </IconButton>
);

export const IconButtonSecondaryLargeExample = () => (
  <IconButton variant="secondary" size="lg">
    <Text className="h-4 w-4" />
  </IconButton>
);

export const IconButtonGhostExample = () => (
  <IconButton variant="ghost">
    <Text className="h-4 w-4" />
  </IconButton>
);

export const IconButtonGhostSmallExample = () => (
  <IconButton variant="ghost" size="sm">
    <Text className="h-4 w-4" />
  </IconButton>
);

export const IconButtonGhostLargeExample = () => (
  <IconButton variant="ghost" size="lg">
    <Text className="h-4 w-4" />
  </IconButton>
);

export const IconButtonLoadingExample = () => (
  <IconButton isLoading>
    <Text className="h-4 w-4" />
  </IconButton>
);

export const IconButtonDisabledExample = () => (
  <IconButton disabled>
    <Text className="h-4 w-4" />
  </IconButton>
);
