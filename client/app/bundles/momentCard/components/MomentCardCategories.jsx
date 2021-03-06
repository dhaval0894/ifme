// @flow
import React from 'react';
import Tag from '../../shared/components/Tag';
import css from './MomentCard.scss';

type MomentCardCategoriesProp = {
  category?: Array<string>
};

export default class MomentCardCategories
  extends React.Component <MomentCardCategoriesProp> {
  render() {
    const { category } = this.props;

    const categoryTag = category ?
      category.map(value => <Tag key={value} label={value} />)
      : '';

    return (
      <div className={css.category}>
        {categoryTag}
      </div>
    );
  }
}
