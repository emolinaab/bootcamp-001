import React, { useState } from 'react';
import type { ResourceSummary } from '../../types/pokemon';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Colors } from '../../theme/colors';
import { usePokemonIdFromUrl, usePokemonImageSet } from '../../hooks/pokemon';
import { PokemonTypeColors } from '../../theme/colors';

type PokemonBasicCardProps = {
  pokemonBasic: ResourceSummary;
  typeColor?: string;
  onPress?: Function;
};

const PokemonBasicCard = ({
  pokemonBasic,
  typeColor = PokemonTypeColors.pokemonRed,
  onPress = () => {},
}: PokemonBasicCardProps) => {
  const pokemonId = usePokemonIdFromUrl(pokemonBasic.url) || 0;
  const [imgSrcOfficial, imgSrcDefault] = usePokemonImageSet(pokemonId) || [
    '',
    '',
  ];
  const [selectedPokemonImg, setSelectedPokemonImg] = useState(imgSrcOfficial);

  return (
    <TouchableOpacity
      style={styles.cardWrapper}
      onPress={() => {
        onPress();
      }}>
      <View
        style={{
          ...styles.pokemonCard,
        }}>
        <View style={styles.cardHeader}>
          <View style={{ ...styles.headerChip, backgroundColor: typeColor }}>
            <Text style={styles.headerText}>
              #{pokemonId.toString().padStart(3, '0')}
            </Text>
          </View>
        </View>
        <FastImage
          source={{
            uri: selectedPokemonImg,
            priority: FastImage.priority.normal,
          }}
          style={styles.cardImage}
          onError={() => {
            setSelectedPokemonImg(imgSrcDefault);
          }}
        />
        <View style={styles.cardFooter}>
          <Text style={styles.footerText}>{pokemonBasic.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  cardWrapper: {
    width: '50%',
    padding: 8,
  },
  pokemonCard: {
    position: 'relative',
    display: 'flex',
    borderRadius: 15,
    minHeight: 96,
    paddingVertical: 8,
    paddingHorizontal: 4,
    backgroundColor: Colors.slateGray,
    shadowColor: Colors.white,
    shadowOffset: {
      height: -5,
      width: 0,
    },
    shadowRadius: 4,
    shadowOpacity: 0.25,
    elevation: 4,
    overflow: 'hidden',
  },
  cardHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  headerChip: {
    minWidth: 24,
    borderColor: Colors.white,
    borderWidth: 2,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 9999,
    marginHorizontal: 4,
  },
  headerText: {
    color: Colors.white,
    fontWeight: 'bold',
  },
  cardImage: {
    alignSelf: 'center',
    width: 96,
    height: 96,
  },
  cardFooter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footerText: {
    fontWeight: '500',
    fontSize: 16,
    textTransform: 'capitalize',
    color: Colors.white,
  },
});

export default PokemonBasicCard;
