import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

function Pagination({ page, totalPage, onChangePage }) {
  const handlePageClick = (index) => {
    onChangePage({
      page: index,
    });
  };

  return (
    <div className={cx('wrapper-pagination')}>
      <div className={cx('pagination')}>
        {new Array(totalPage).fill(0).map((item, index) => (
          <div
            key={index}
            className={cx('pagination__item', page === index + 1 ? 'active' : '')}
            onClick={index + 1 !== page ? () => handlePageClick(index + 1) : null}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pagination;
