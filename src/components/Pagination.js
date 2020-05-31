/** @jsx jsx */
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';

import { ReactComponent as RightArrowIcon } from '../icons/arrow-right.svg';

const css = {
  container: (theme) => ({
    display: 'flex',
    marginBottom: theme.baseline * 2,
  }),
  leftNavigator: (theme) => ({
    display: 'flex',
    alignItems: 'center',
    fontSize: theme.font.scale.default,
    fontFamily: theme.font.family.bodyBold,
    svg: {
      transform: 'rotate(180deg)',
      marginRight: theme.baseline / 2,
    },
  }),
  rightNavigator: (theme) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginLeft: 'auto',
    fontSize: theme.font.scale.default,
    fontFamily: theme.font.family.bodyBold,
    svg: {
      marginLeft: theme.baseline / 2,
    },
  }),
};

const Pagination = ({ setPageIndex, pageIndex, numPages }) => {
  const goToNextPage = () => setPageIndex(pageIndex - 1);
  const goToPrevPage = () => setPageIndex(pageIndex + 1);

  return (
    <div css={css.container}>
      {pageIndex > 0 && (
        <button type="button" css={css.leftNavigator} onClick={goToNextPage}>
          <RightArrowIcon />
          Previous
        </button>
      )}
      {pageIndex < numPages - 1 && (
        <button type="button" css={css.rightNavigator} onClick={goToPrevPage}>
          Next
          <RightArrowIcon />
        </button>
      )}
    </div>
  );
};

Pagination.defaultProps = {};

Pagination.propTypes = {
  setPageIndex: PropTypes.func.isRequired,
  pageIndex: PropTypes.number.isRequired,
  numPages: PropTypes.number.isRequired,
};

export default Pagination;
