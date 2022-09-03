export type Plan = {
  id: number;
  pages: string;
  users: string;
  price: number;
  active: boolean;
  facebookAds: boolean;
  hubspotBlogs: boolean;
  instagramAds: boolean;
  mobileAppIos: boolean;
  facebookPages: boolean;
  onlineSupport: boolean;
  apiIntegrations: boolean;
  autoHideComments: boolean;
  unlimitedComments: boolean;
  allInOneDashboard: boolean;
  instagramProfiles: boolean;
  realTimeMonitoring: boolean;
  facebookCommentsPlugin: boolean;
};

export type Feature = {
  pages: string;
  users: string;
  unlimitedComments: string;
  realTimeMonitoring: string;
  allInOneDashboard: string;
  autoHideComments: string;
  mobileAppIos: string;
  onlineSupport: string;
  facebookPages: string;
  facebookAds: string;
  facebookCommentsPlugin: string;
  instagramProfiles: string;
  instagramAds: string;
  apiIntegrations: string;
  hubspotBlogs: string;
};

const plan_features: Feature = {
  pages: "Pages",
  users: "Users",
  unlimitedComments: "Unlimited Number of Comments",
  realTimeMonitoring: "Real-time Monitoring",
  allInOneDashboard: "All-in-One Dashboard",
  autoHideComments: "Auto-hide Unwanted Comments",
  mobileAppIos: "Mobile App iOS",
  onlineSupport: "Online Support",
  facebookPages: "Facebook Pages",
  facebookAds: "Facebook Ads",
  facebookCommentsPlugin: "Facebook Comment Plugin",
  instagramProfiles: "Instagram Profiles",
  instagramAds: "Instagram Ads",
  apiIntegrations: "API Integrations",
  hubspotBlogs: "HubSpot Blogs",
};

const plans_data: Plan[] = [
  {
    id: 1,
    pages: "2",
    users: "1",
    price: 19,
    active: false,
    facebookAds: true,
    hubspotBlogs: true,
    instagramAds: true,
    mobileAppIos: true,
    facebookPages: true,
    onlineSupport: true,
    apiIntegrations: false,
    autoHideComments: true,
    unlimitedComments: true,
    allInOneDashboard: true,
    instagramProfiles: true,
    realTimeMonitoring: true,
    facebookCommentsPlugin: true,
  },
  {
    id: 2,
    pages: "5",
    users: "2",
    price: 45,
    active: false,
    facebookAds: true,
    hubspotBlogs: true,
    instagramAds: true,
    mobileAppIos: true,
    facebookPages: true,
    onlineSupport: true,
    apiIntegrations: false,
    autoHideComments: true,
    unlimitedComments: true,
    allInOneDashboard: true,
    instagramProfiles: true,
    realTimeMonitoring: true,
    facebookCommentsPlugin: true,
  },
  {
    id: 3,
    pages: "10",
    users: "Multiple",
    price: 99,
    active: true,
    facebookAds: true,
    hubspotBlogs: true,
    instagramAds: true,
    mobileAppIos: true,
    facebookPages: true,
    onlineSupport: true,
    apiIntegrations: false,
    autoHideComments: true,
    unlimitedComments: true,
    allInOneDashboard: true,
    instagramProfiles: true,
    realTimeMonitoring: true,
    facebookCommentsPlugin: true,
  },
  {
    id: 4,
    pages: "100+",
    users: "Multiple",
    price: 499,
    active: false,
    facebookAds: true,
    hubspotBlogs: true,
    instagramAds: true,
    mobileAppIos: true,
    facebookPages: true,
    onlineSupport: true,
    apiIntegrations: true,
    autoHideComments: true,
    unlimitedComments: true,
    allInOneDashboard: true,
    instagramProfiles: true,
    realTimeMonitoring: true,
    facebookCommentsPlugin: true,
  },
];
export const usePlans = () => {
  return { plansData: plans_data, planFeatures: plan_features };
};
