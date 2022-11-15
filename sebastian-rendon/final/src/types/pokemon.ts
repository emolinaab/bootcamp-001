export type Pokemon = {
  abilities: AbilitySummary[];
  base_experience: number;
  forms: FormSummary[];
  game_indices: GameIndexSummary[];
  height: number;
  held_items: ItemSummary[];
  id: number;
  is_default: boolean;
  location_area_encounter: string;
  moves: MoveSummary[];
  name: string;
  order: number;
  past_types: PastTypeSummary[];
  species: SpeciesSummary[];
  sprites: SpriteSummary;
  stats: StatSummary[];
  types: TypeSummary[];
  weight: number;
};

export type AbilitySummary = {
  ability: ResourceSummary;
  is_hidden: boolean;
  slot: number;
};

export type GameIndexSummary = {
  game_index: number;
  version: ResourceSummary;
};

export type MoveSummary = {
  move: ResourceSummary;
  version_group_details: {
    level_learned_at: number;
    move_learn_method: ResourceSummary;
    version_group: ResourceSummary;
  }[];
};

export type PastTypeSummary = {
  generation: ResourceSummary;
  types: TypeSummary[];
};

export type TypeSummary = {
  slot: number;
  type: ResourceSummary;
};

export type SpriteSummary = Sprite & {
  other: {
    dream_world?: Sprite;
    home?: Sprite;
    'official-artwork'?: Sprite;
  };
};

export type Sprite = {
  front_default: string;
  back_default?: string | null;
  front_female?: string | null;
  back_female?: string | null;
  front_shiny?: string | null;
  back_shiny?: string | null;
  front_shiny_female?: string | null;
  back_shiny_female?: string | null;
};

export type StatSummary = {
  base_stat: number;
  effort: number;
  stat: ResourceSummary;
};

export type ResourceSummary = {
  name: string;
  url: string;
};

export type ResourceMap<T> = {
  [key: string]: T | undefined;
};

export type SpeciesSummary = ResourceSummary;
export type FormSummary = ResourceSummary;
export type ItemSummary = ResourceSummary;
export type PokemonSummary = ResourceSummary;
