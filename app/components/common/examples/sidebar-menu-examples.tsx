import {
  SidebarMenu,
  SidebarMenuContainer,
  SidebarMenuContent,
  SidebarMenuItem,
  SidebarSubMenu,
  SidebarSubMenuContent,
  SidebarSubMenuItem,
} from '@/components/ui/sidebar-menu';
import {
  CircleUserRound,
  MessageCircleDashed,
  Settings,
  ShieldCheck,
} from 'lucide-react';

export const SidebarMenuExample = () => (
  <SidebarMenuContainer className="w-[320px]">
    <SidebarMenu
      trigger="Account Settings"
      icon={<CircleUserRound className="w-4 h-4" />}>
      <SidebarMenuContent>
        <SidebarMenuItem>Change username</SidebarMenuItem>
        <SidebarMenuItem>Manage subscriptions</SidebarMenuItem>
        <SidebarMenuItem>Manage profile visibility</SidebarMenuItem>
        <SidebarSubMenu
          trigger="Posts and Initiatives"
          icon={<MessageCircleDashed className="w-4 h-4" />}>
          <SidebarSubMenuContent>
            <SidebarSubMenuItem>Hide posts from members</SidebarSubMenuItem>
            <SidebarSubMenuItem>
              Hide initiatives from members
            </SidebarSubMenuItem>
          </SidebarSubMenuContent>
        </SidebarSubMenu>
      </SidebarMenuContent>
    </SidebarMenu>
    <SidebarMenu
      trigger="Community Settings"
      icon={<Settings className="w-4 h-4" />}>
      <SidebarMenuContent>
        <SidebarMenuItem>Change commnuity logo</SidebarMenuItem>
        <SidebarMenuItem>Create new community</SidebarMenuItem>
      </SidebarMenuContent>
    </SidebarMenu>
  </SidebarMenuContainer>
);
