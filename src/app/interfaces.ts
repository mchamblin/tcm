export interface Person {
  id: number;
  firstName: string;
  lastName: string;
  name: string;
  primaryRole: string;
  placeOfBirth: string;
  placeOfDeath: string;
  nationality: string;
  dateOfBirth: string;
  dateOfDeath: string;
  causeOfDeath: string;
  scarlettId: string;
  drupalID: null;
  titleId: string;
  afiID: string;
  BaselineID: string;
  TribuneID: string;
  personId: string;
  firstYearInFilm: string;
  gender: string;
  biographyHtml: string;
  professions: [
    {
      detail: string;
      sequence: string;
      type: string;
    }
  ];
  filmographyWithSynopsis: [];
  filmographySorted: [{
    name: string;
    releaseYear: string;
    roleName: string;
    characterName: string;
  }];
  filmographyOverview: [];
  bibliography: [
    {
      title: string;
      publisher: string;
    }
  ];
  milestones: [];
  notes: [];
  miscNotes: [];
  akaNames: [];
  companions: [{
    name: string;
    relationship: string;
    note: string;
  }];
  family: [{
    name: string;
    relationship: string;
    note: string;
  }];
  videos: [];
  masonaryArray: [Archive];
  image: {
    width: number;
    height: number;
    usage: string;
    contentId: number;
    url: string;
    name: string;
  };
}

export interface Title {
  id: number;
  name: string;
  type: string;
  description: string;
  synopsis: string;
  mpaaRating: string;
  genre: string;
  releaseYear: string;
  country: string;
  duration: string;
  sound: string;
  color: string;
  filmLength: string;
  BaselineID: string;
  TribuneID: string;
  runtimeMinutes: string;
  profileImageUrl: string;
  aspectRatio: string;
  photographicProcess: null;
  runtimeHours: string;
  articles: [];
  imageProfiles: [];
  productionData: {
    id: number;
    releaseYear: string;
    runtimeMinutes: string;
    numberOfReels: string;
    printSource: null;
    productionDates: string;
    productionText: string;
    runtimeFeet: string;
    releaseDay: string;
    releaseMonth: string;
    premier: string;
    country: string;
    titleId: string;
    distributors: string[];
    productionCompanies: string[];
  };
  sources: [];
  archives: [Archive];
  credits: [
    {
      FirstName: string;
      LastName: string;
      participantId: string;
      titleId: string;
      roleCategory: string;
      characterName: string;
      roleName: string;
      image: string;
      personId: string;
      name: string;
    }
  ];
  awards: [];
  akaNames: [];
  genres: [];
  notes: [];
  miscNotes: [];
  keywords: [];
  mrqeReviews: [];
  afiNotes: [];
  trivia: [];
  quotes: [];
  masonaryArray: [];
  videos: [];
}

export interface Archive {
  id: number;
  title: string;
  modifiedDate: string;
  titlesId: string;
  participantsId: string;
  category: string;
  description: string;
  shortDescription: string;
  galleryId: string;
  featured: string;
  startDate: null;
  endDate: string;
  itemType: null;
  createdBy: null;
  itemStatus: string;
  orderDATE: string;
  ArchivemodifiedDateUnix: string;
  contentType: string;
  images: [imageObject];
}

export interface imageObject {
  id: number;
  url: string;
  imgOrder: string;
  archiveId: string;
  galleryId: string;
  name: string;
  width: string;
  height: string;
  pictured: string;
  copyright: null;
  description: string;
}
