/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  "Home": undefined;
  "Coming Soon": undefined;
  "Search": undefined;
  "Download": undefined;
};

export type TabOneParamList = {
  "MovieDetailsScreen": undefined;
  "Home Screen" : undefined;
  "LandingScreen": undefined;
};

export type TabTwoParamList = {
  "Coming Soon Screen": undefined;
};

export type TabThreeParamList = {
  "Search Screen": undefined
}

export type TabFourParamList = {
  "Download Screen": undefined;
}

export type Episode = {
  id: string;
  title: string;
  poster: string;
  duration: string;
  plot: string;
  video: string;
};

