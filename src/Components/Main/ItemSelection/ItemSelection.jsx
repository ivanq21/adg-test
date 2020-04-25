import React from 'react';
import s from './ItemSelection.scss'

const ItemSelection = () => {
  return (
    <div className="item-selection">
      <div className="item-selection__header">
        <div className="item-selection__title">Подбор уплотнения в 3 клика</div>
      </div>

      <div className="item-selection__body">
        <form className="item-selection__form"> 
          <div className="item-selection__select-type">
            <div className="item-selection__type-name">Марка:</div>
            <select className="item-selection__select" name="maker">
              <option value="FUNKE">FUNKE</option><option value="APV">APV</option><option value="Sigma">Sigma</option><option value="Sondex (Ридан)">Sondex (Ридан)</option><option value="ALFA LAVAL">ALFA LAVAL</option><option value="GEA">GEA</option><option value="ARES">ARES</option>							</select>
          </div>
          <div className="item-selection__select-type">
            <div className="item-selection__type-name">Тип:</div>
            <select className="item-selection__select" name="type">
              <option>FP04</option><option>FP08</option><option>FP10</option><option>FP16</option><option>FP22</option><option>FP14</option><option>FP20</option><option>FP19</option><option>FP205</option><option>FP31</option><option>FP40</option><option>FP50</option><option>FP41</option><option>FP60</option><option>FP405</option><option>FP70</option><option>FP80</option><option>FP05</option><option>FP09</option><option>FP71</option><option>FP42</option><option>FP62</option><option>FP82</option><option>FP112</option><option>FP100</option><option>FP130</option><option>FP81</option><option>FP120</option><option>FP160</option><option>FP190</option><option>FP150</option><option>FP200</option><option>FP250</option><option>FP300</option>							</select>
          </div>
          <button className="item-selection__btn btn" type="submit">Подобрать</button>
        </form>
      </div>
    </div>
  )
}

export default ItemSelection;