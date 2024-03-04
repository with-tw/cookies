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
