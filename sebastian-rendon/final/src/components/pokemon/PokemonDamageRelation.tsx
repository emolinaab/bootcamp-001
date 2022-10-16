import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../theme/colors';
import PokemonTypeChip from './PokemonTypeChip';
import { ResourceSummary } from '../../types/pokemon';

type PokemonDamageRelationProps = {
  label: string;
  damageRelation: ResourceSummary[];
};

const PokemonDamageRelation = ({
  label,
  damageRelation,
}: PokemonDamageRelationProps) => {
  return (
    <View style={styles.damageRelationsWrapper}>
      <Text style={styles.damageRelationsText}>{label}</Text>
      <View style={styles.damageRelations}>
        {damageRelation.map((type) => (
          <PokemonTypeChip type={type.name} key={type.name} hideText />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  damageRelationsText: {
    fontSize: 16,
    color: Colors.white,
    fontWeight: '600',
  },
  damageRelationsWrapper: {
    paddingHorizontal: 24,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  damageRelations: {
    paddingVertical: 2,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export default PokemonDamageRelation;
