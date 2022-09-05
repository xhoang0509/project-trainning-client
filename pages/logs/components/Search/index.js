import classNames from 'classnames/bind';
import { useState } from 'react';
import Button from '../../../../src/components/Button';
import InputField from '../../../../src/components/Input';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

function SearchLogs({ onSearchSubmit }) {
  const [search, setSearch] = useState('');

  const handleSearchSubmit = () => {
    onSearchSubmit(search);
  };

  return (
    <div className={cx('search')}>
      <InputField
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="search"
        placeholder="Name"
        className={cx('search__input')}
      />
      <Button primary onClick={handleSearchSubmit}>
        Search
      </Button>
    </div>
  );
}

export default SearchLogs;
