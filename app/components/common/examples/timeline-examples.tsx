import {
  Timeline,
  TimelineItem,
  TimelineItemActionContainer,
  TimelineItemDescription,
  TimelineItemHeadline,
  TimelineItemIcon,
  TimelineItemPrimaryAction,
  TimelineItemSecondaryAction,
} from '@/components/ui/timeline';
import { Rocket } from 'lucide-react';

export const TimelineExample = () => (
  <Timeline>
    <TimelineItem>
      <TimelineItemIcon />
      <TimelineItemHeadline>This is a timeline item</TimelineItemHeadline>
      <TimelineItemDescription>
        This is a timeline item description.
      </TimelineItemDescription>
      <TimelineItemActionContainer>
        <TimelineItemPrimaryAction>Get started</TimelineItemPrimaryAction>
        <TimelineItemSecondaryAction>Learn more</TimelineItemSecondaryAction>
      </TimelineItemActionContainer>
    </TimelineItem>
    <TimelineItem>
      <TimelineItemIcon variant="success" />
      <TimelineItemHeadline>Your changes are merged</TimelineItemHeadline>
      <TimelineItemActionContainer>
        <TimelineItemSecondaryAction withArrow>
          Go to home
        </TimelineItemSecondaryAction>
      </TimelineItemActionContainer>
    </TimelineItem>
    <TimelineItem>
      <TimelineItemIcon variant="error" />
      <TimelineItemHeadline>Merge Failed</TimelineItemHeadline>
      <TimelineItemDescription>
        Merge failed due to conflicts
      </TimelineItemDescription>
      <TimelineItemActionContainer>
        <TimelineItemPrimaryAction>
          Rollback to main branch
        </TimelineItemPrimaryAction>
      </TimelineItemActionContainer>
    </TimelineItem>
  </Timeline>
);

export const TimelineWithCustomIconExample = () => (
  <Timeline>
    <TimelineItem className="min-w-fit">
      <TimelineItemIcon>
        <Rocket />
      </TimelineItemIcon>
      <TimelineItemHeadline>Headline</TimelineItemHeadline>
      <TimelineItemDescription>
        This is a description text.
      </TimelineItemDescription>
    </TimelineItem>
  </Timeline>
);
