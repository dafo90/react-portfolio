// Navigation
export const selectedLayoutSelector = (state) => state.navigation.selectedLayout;
export const mobileDrawerOpenSelector = (state) => state.navigation.mobileDrawerOpen;

// GitHub
export const githubSelector = (state) => state.github;

// Config
export const githubConfigSelector = (state) => state.config?.github || {};
export const layoutsConfigSelector = (state) => state.config?.layouts || [];
export const skillsConfigSelector = (state) => state.config?.skills || [];
export const socialsConfigSelector = (state) => state.config?.socials || [];
export const personalInformationConfigSelector = (state) => state.config?.personalInformation || {};
export const notFoundConfigSelector = (state) => state.config?.notFound || {};
export const footerConfigSelector = (state) => state.config?.footer || {};
