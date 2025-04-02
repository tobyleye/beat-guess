export type Room = {
  name: string;
  id: string;
  images: string[];
};

export type Rooms = Room[];

export type User = {
  userId: string;
  displayName: string;
  email: string;
  picture: string;
};

export type Player = {
  name: string;
  id: string;
  picture: string;
  userId: string;
  score: number;
};

export type Track = {
  name: string;
  artists: {
    id: string;
    name: string;
  }[];
  preview_url: string;
};

export type Players = Player[];
