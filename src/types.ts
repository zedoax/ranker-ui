export interface Game {
  id: number,
  img: string,
  title: string,
  seasons: Season[],
  description: string,
  min_rounds: number,
  max_rounds: number
}

export interface Score {
  id: number,
  season: Season,
  score: number,
  user: User,
  main: Character,
}

export interface Season {
  id: number,
  name: string,
  banner: string,
  game: Game,
  scores: Score[],
  start: Date,
  end: Date
}

export interface User {
  username: string,
  first_name: string,
  last_name: string,
  profile_img: string,
  twitch_id?: string,
  twitter_id?: string,
  scores: Score[],
}

export interface UserToken {
  username: string|undefined,
  access_token: string|undefined,
  loading: boolean
}

export interface Match {
  id: number,
  date: Date,
  winner: Score,
  loser: Score,
  witness: User,
  season: Season,
  winner_wins: number,
  loser_wins: number,
  challenger_is_winner: boolean,

}

export interface Character {
  name: string,
}

export interface ResponseBody {
  message: string,
}

export type SnackbarMessage = string;
export type SnackbarVariant = 'info'|'warning'|'error'|'success';
export type SnackbarVisibility = 'hidden'|'visible';
