import { University } from "../_components/UniversityLogo";

export type Education = {
  diploma: string;
  universityName: string;
  universityLogo: University;
  location: string;
  period: string;
};

export const educationList: Education[] = [
  {
    diploma:
      "Master informatique spécialité Ingénierie des Systèmes Intelligents",
    universityName: "Le Mans Université",
    universityLogo: "le-mans-universite",
    location: "Le Mans, France",
    period: "2011 - 2013",
  },
  {
    diploma:
      "Licence Informatique parcours Conception Informatique et Environnements Logiciels",
    universityName: "Le Mans Université",
    universityLogo: "le-mans-universite",
    location: "Le Mans, France",
    period: "2010 - 2011",
  },
  {
    diploma: "DUT Informatique",
    universityName: "IUT Laval",
    universityLogo: "iut-laval",
    location: "Laval, France",
    period: "2008 - 2010",
  },
];
