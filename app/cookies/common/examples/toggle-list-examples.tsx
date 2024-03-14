import {
  ToggleList,
  ToggleListContainer,
  ToggleListContent,
  ToggleListItem,
  ToggleListTrigger,
} from '@/components/cookies/toggle-list';

export const ToggleListExample = () => (
  <ToggleListContainer type="multiple">
    <ToggleList value="profile-settings">
      <ToggleListTrigger>Profile Settings</ToggleListTrigger>
      <ToggleListContent>
        <ToggleListItem>Manage profile preview</ToggleListItem>
        <ToggleListItem>Change username</ToggleListItem>
        <ToggleListItem isChecked>Private profile</ToggleListItem>
      </ToggleListContent>
    </ToggleList>
    <ToggleList value="content-settings">
      <ToggleListTrigger>Content Settings</ToggleListTrigger>
      <ToggleListContent>
        <ToggleListItem>Hide stories</ToggleListItem>
        <ToggleListItem isChecked>Hide comments/likes</ToggleListItem>
        <ToggleListItem isChecked>Hide replies</ToggleListItem>
        <ToggleListItem>Manage who can reply</ToggleListItem>
      </ToggleListContent>
    </ToggleList>
  </ToggleListContainer>
);
