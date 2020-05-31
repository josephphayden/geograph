/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Button from './Button';
import Property from './Property';

import { formatGini, formatPopulationDensity, formatRank } from '../utils/format';
import { calculateRank, calculatePopulationDensity } from '../utils/calculate';

const css = {
  container: (theme) => ({
    backgroundColor: theme.colors.white,
    borderRadius: theme.borders.radius.medium,
    padding: theme.baseline * 0.75,
    boxShadow: theme.shadows.medium,
  }),
  header: () => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }),
  name: (theme) => ({
    margin: 0,
    fontFamily: theme.font.family.heading,
    fontSize: theme.font.scale.xlarge,
  }),
  flag: (theme) => ({
    height: theme.baseline * 2.5,
    width: 'auto',
    borderRadius: theme.borders.radius.low,
    marginLeft: theme.baseline / 2,
  }),
  fieldRow: (theme) => ({
    marginTop: theme.baseline,
    ...theme.styles.grid({ gap: theme.baseline, numColumns: 3 }),
  }),
  editableFieldRow: (theme) => ({
    marginTop: theme.baseline,
    minHeight: theme.baseline * 5.5,
    ...theme.styles.grid({ gap: theme.baseline, numColumns: 3 }),
  }),
  button: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
};

const recalculateValues = ({ original, updatedKey, updatedValue }) => {
  const update = { ...original, [updatedKey]: updatedValue };

  if (updatedKey === 'rank') {
    update.populationDensity = formatPopulationDensity(
      calculatePopulationDensity(original.population, update.rank)
    );
  } else if (updatedKey === 'population') {
    update.populationDensity = formatPopulationDensity(
      calculatePopulationDensity(update.population, original.rank)
    );
  } else if (updatedKey === 'populationDensity') {
    update.rank = formatRank(calculateRank(original.population, update.populationDensity));
  }

  return update;
};

const Country = React.memo(
  ({
    country: { id, name, capital, gini, population, populationDensity, rank, flag },
    updateCountry,
  }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedValues, setEditedValues] = useState({ population, populationDensity, rank });

    useEffect(() => {
      setEditedValues({ population, populationDensity, rank });
    }, [population, populationDensity, rank]);

    const updateValues = (value, key) => {
      setEditedValues(
        recalculateValues({ original: editedValues, updatedKey: key, updatedValue: value })
      );
    };

    const toggleIsEditing = () => {
      setIsEditing(!isEditing);
      if (isEditing) {
        updateCountry(id, editedValues);
      }
    };
    const buttonLabel = isEditing ? 'Save' : 'Edit';

    return (
      <div css={css.container}>
        <div css={css.header}>
          <h2 css={css.name}>{name}</h2>
          <img css={css.flag} src={flag} alt={`${name} flag`} />
        </div>
        <div css={css.fieldRow}>
          <Property label="Capital" value={capital} />
          <Property label="Gini index" value={formatGini(gini)} />
        </div>
        <div css={css.editableFieldRow}>
          <Property
            label="Population"
            name="population"
            value={editedValues.population}
            editable={isEditing}
            onChange={updateValues}
          />
          <Property
            label="Pop. Density"
            name="populationDensity"
            value={editedValues.populationDensity}
            editable={isEditing}
            onChange={updateValues}
            inputProps={{ step: 0.01 }}
          />
          <Property
            label="Rank"
            name="rank"
            value={editedValues.rank}
            editable={isEditing}
            onChange={updateValues}
          />
        </div>
        <div css={css.button}>
          <Button label={buttonLabel} onClick={toggleIsEditing} />
        </div>
      </div>
    );
  }
);

Country.propTypes = {
  country: PropTypes.objectOf(PropTypes.any).isRequired,
  updateCountry: PropTypes.func.isRequired,
};

export default Country;
