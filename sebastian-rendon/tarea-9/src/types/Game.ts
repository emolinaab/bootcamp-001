export type Movie = {
    name: string;
    otherNames?: string[];
    emojis: string[];
    guessed: boolean;
}

export type GameFormProps = {
    riddle: string;
    guess: string;
    onSubmit: Function;
    onInputChange: Function;
};

export type GameScoreProps = {
    lives: number;
    points: number;
    totalPoints: number;
};

export type GameStatusModalProps = {
    status: 'IN_PROGRESS' | 'WON' | 'LOST';
    onRestart: Function;
};


export type GameGuessedListProps = {
    items: Movie[];
};