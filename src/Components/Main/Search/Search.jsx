import React from 'react';
import s from './Search.scss'

const Search = () => {
  return (
    <div className="search main__search">
				<div className="search__select-wrapper select-wrapper">
					<div className="select-wrapper__selected"><span>Уплотнения</span> <span>▾</span></div>
				</div>
				<div className="search__form-wrapper">
					<form className="search__form" action="/search/" method="GET">
						<input className="search__input" type="search" name="search" placeholder="Поиск по каталогу" required="required"   />
						<button className="search__btn" type="submit"></button>
					</form>
				</div>
    </div>
  )
}

export default Search;