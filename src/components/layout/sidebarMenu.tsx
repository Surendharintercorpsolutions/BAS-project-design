interface SidebarMenuItem {
    screenName: string;
    icon: string;
    path: string;
    subMenu?: SidebarMenuItem[];  // Optional property for submenus
  }

  interface setUpItem {
    screenName: string;
    icon: string;
    // subMenu?: SidebarMenuItem[];  // Optional property for submenus
  }
  
  const sidebarMenu: SidebarMenuItem[] = [

      {
          screenName: 'Manage Organisation',
          icon: '/assets/man_org.svg',
          path: '/dashboard'
      },
      {
          screenName: 'Data Analytics',
          icon: '/assets/analytics.svg',
          path: '/data-analytics'
      },
      {
          screenName: 'License',
          icon: '/assets/license.svg',
          path: '/license'
      },
      {
          screenName: 'Annoucement',
          icon: '/assets/announce.svg',
          path: '/announcement'
      },
      {
          screenName: 'Hardware',
          icon: '/assets/hardware.svg',
          path: '/hardware'
      },
  ];

  const setUp: setUpItem[] = [
    {
      screenName: 'Promotion',
      icon: '/assets/promotion.svg',
  },
  {
      screenName: 'Announcement',
      icon: '/assets/announcement.svg',
  },
  {
      screenName: 'Hardware',
      icon: '/assets/licenceIcon.svg',
  },
  {
      screenName: 'Security',
      icon: '/assets/announcementIcon.svg',
  },
  {
      screenName: 'Common Library',
      icon: '/assets/hardwareIcon.svg',
  },
  {
      screenName: 'Platform Library',
      icon: '/assets/library.svg',
  },
  ]
  
  const sideMenu = {
    sidebarMenu,
    setUp
}

export default sideMenu;
  