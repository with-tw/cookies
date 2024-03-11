import {
  EmptyState,
  EmptyStateDescription,
  EmptyStateHeadline,
  EmptyStateIcon,
  EmptyStatePrimaryAction,
  EmptyStateSecondaryAction,
} from '@/components/cookies/empty-state';
import { Container } from 'lucide-react';

export const EmptyStateExample = () => (
  <EmptyState>
    <EmptyStateIcon>
      <Container />
    </EmptyStateIcon>
    <EmptyStateHeadline>You have no recent containers</EmptyStateHeadline>
    <EmptyStateDescription>
      All your recent containers or projects will be listed here
    </EmptyStateDescription>
    <EmptyStatePrimaryAction>Create new container</EmptyStatePrimaryAction>
    <EmptyStateSecondaryAction>Learn more</EmptyStateSecondaryAction>
  </EmptyState>
);
