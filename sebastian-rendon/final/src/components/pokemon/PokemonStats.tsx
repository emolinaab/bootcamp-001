import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Colors, PokemonStatsColor } from '../../theme/colors';
import { StatSummary } from '../../types/pokemon';

export type PokemonStatsProps = {
  stats: StatSummary[];
};

const styledStatName: { [key: string]: string } = {
  hp: 'hp',
  attack: 'atk',
  defense: 'def',
  'special-attack': 'satk',
  'special-defense': 'sdef',
  speed: 'spd',
};

const PokemonStats = ({ stats }: PokemonStatsProps) => {
  return (
    <View style={styles.statsWrapper}>
      {stats.map((stat) => (
        <View
          testID="pokemon-stat"
          style={styles.statsRow}
          key={stat.stat.name}>
          <View>
            <Text testID="pokemon-stat-name" style={styles.statsTitle}>
              {styledStatName[stat.stat.name]}
            </Text>
          </View>
          <View style={styles.statsBarBackground}>
            <View
              testID="pokemon-stat-bar"
              accessibilityValue={{
                min: 0,
                now: Math.min(stat.base_stat, 100),
              }}
              style={{
                ...styles.statsBarValue,
                backgroundColor:
                  PokemonStatsColor[styledStatName[stat.stat.name]] ||
                  Colors.pokemonRed,
                width: `${Math.min(stat.base_stat, 100)}%`,
              }}
            />
            <Text
              testID="pokemon-stat-base"
              style={styles.statsBarText}
              accessibilityLabel={`${stat.stat.name}: ${stat.base_stat}`}>
              {stat.base_stat}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  statsWrapper: {
    padding: 20,
    backgroundColor: Colors.darkGray,
    display: 'flex',
  },
  statsRow: {
    justifyContent: 'flex-start',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 8,
  },
  statsTitle: {
    width: 48,
    textTransform: 'uppercase',
    color: 'white',
    fontWeight: 'bold',
    paddingRight: 8,
  },
  statsBarBackground: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    position: 'relative',
    marginVertical: 4,
    height: 16,
    backgroundColor: Colors.white,
    borderRadius: 999,
  },
  statsBarValue: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 16,
    borderRadius: 999,
  },
  statsBarText: {
    position: 'absolute',
    right: 10,
    color: Colors.black,
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default PokemonStats;
