import {
  Checkroom,
  DeveloperMode,
  FaceRetouchingNatural,
  FitnessCenter,
  GraphicEq,
  Home,
  LiveTv,
  MusicNote,
  OndemandVideo,
  School,
  SportsEsports,
  TheaterComedy,
} from "@mui/icons-material";
import logo1 from "../img/logo.png";
export const logo = logo1;

export const category = [
  { name: "New", icon: <Home /> },
  { name: "Movie", icon: <OndemandVideo /> },
  { name: "Live", icon: <LiveTv /> },
  { name: "Gaming", icon: <SportsEsports /> },
  { name: "Education", icon: <School /> },
  { name: "Sport", icon: <FitnessCenter /> },
  { name: "Comedy", icon: <TheaterComedy /> },
  { name: "Podcats", icon: <GraphicEq /> },
  { name: "Fashion", icon: <Checkroom /> },
  { name: "Crypto", icon: <DeveloperMode /> },
  { name: "Gym", icon: <FitnessCenter /> },
  { name: "Beauty", icon: <FaceRetouchingNatural /> },
  { name: "Music", icon: <MusicNote /> }
];
