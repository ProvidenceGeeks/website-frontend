import * as React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card';
import LoadMoreButton from '../load-more-button/load-more-button';
import './card-grid.scss';

export default class CardGrid extends React.Component {

  constructor(props) {
    super();

    this.itemsPerPage = 6;
    this.state = this.modelInitStateFromDataProp(props.data);
  }

  componentWillReceiveProps(nextProps) {
    const state = this.modelInitStateFromDataProp(nextProps.data);

    this.setState(state);
  }

  modelInitStateFromDataProp(data) {
    const currentPage = data.length > 1 ? 1 : 0;
    const visibleItems = data.slice(0, this.itemsPerPage);
    const canLoadMore = data.length > this.itemsPerPage;

    return {
      currentPage: currentPage,
      items: data,
      visibleItems: visibleItems,
      canLoadMore: canLoadMore
    };
  }

  loadMoreItems() {
    const currentPage = this.state.currentPage + 1;
    const currentIndex = this.state.visibleItems.length;
    const nextPageData = this.state.items.slice(currentIndex, currentIndex + this.itemsPerPage);
    const visibleItems = [].concat(this.state.visibleItems, nextPageData);
    const canLoadMore = visibleItems.length <= (this.state.items.length - this.itemsPerPage);

    this.setState({
      items: this.state.items,
      currentPage: currentPage,
      visibleItems: visibleItems,
      canLoadMore: canLoadMore
    });
  }

  render() {
    return (
      <section>
        <div className="card-grid col-md-12 d-flex justify-content-start flex-wrap">
          {
            this.state.visibleItems.map(function (item, key) {
              return (
                <div key={ key } className="col-md-4 col-sm-12">
                  <Card {...item} />
                </div>
              );
            })
          }
        </div>

<div>
  {
    this.state.canLoadMore
      ? <LoadMoreButton loadMore={ () => this.loadMoreItems() }/>
      : ''
  }
</div>
      </section>
    );
  }
}

CardGrid.propTypes = {
  data: PropTypes.array.isRequired
};