/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Button from './Button';
import Property from './Property';

import { formatGini } from '../utils/format';

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
    maxHeight: theme.baseline * 2.5,
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

const Country = React.memo(
  ({ country: { name, capital, gini, population, populationDensity, rank, flag } }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedValues, setEditedValues] = useState({ population, populationDensity, rank });

    useEffect(() => {
      setEditedValues({ population, populationDensity, rank });
    }, [population, populationDensity, rank]);

    const updateValues = (value, key) => {
      setEditedValues({ ...editedValues, [key]: value });
    };

    const toggleIsEditing = () => setIsEditing(!isEditing);
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
};

export default Country;
