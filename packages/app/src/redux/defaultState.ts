import { ApplicationSettings, GameData, WindowStates } from "./state";

export const defaultSettings: ApplicationSettings = {
  appVersion: "0.0.0",
  coh2LogFileFound: false,
  coh2LogFileLocation: "",
  updateInterval: 2,
  runInTray: false,
  openLinksInBrowser: false,
  gameNotification: false,
  streamOverlay: false,
  streamOverlayPort: 47824,
  streamOverlayPortFree: true,
  streamOverlayPosition: "top",
};

export const defaultWindowStates: WindowStates = {
  main: {
    height: 750,
    width: 1280,
    maximized: false,
  },
  settings: {
    height: 700,
    width: 700,
    maximized: false,
  },
  about: {
    height: 220,
    width: 650,
    maximized: false,
  },
  web: {
    height: 800,
    width: 1260,
    maximized: false,
  },
};

export const startupGameData: GameData = {
  found: false,
  state: "closed",
  map: "",
  winCondition: "",
  type: "custom",
  left: {
    side: "mixed",
    solo: [],
    teams: [],
  },
  right: {
    side: "mixed",
    solo: [],
    teams: [],
  },
};
