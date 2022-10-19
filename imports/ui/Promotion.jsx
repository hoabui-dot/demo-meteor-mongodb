import React, { useEffect, useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Promotion } from '../api/Promotion';
import CreatePromotion from './CreatePromotion';

export const Promotions = () => {
  let promotions = useTracker(() => Promotion.find({}).fetch());
  const prevPromotions = useTracker(() => Promotion.find({}).fetch());
  const [isStatus, setIsStatus] = useState(promotions);

  const onDelete = _id => {
    Promotion.remove(_id);
  };

  const handleSelectStatus = event => {
    if (event.target.value === 'active') {
      const arr = promotions.filter(data => data.promotion.active === true);
      setIsStatus(arr);
    } else if (event.target.value === 'finished') {
      const arr = promotions.filter(data => data.promotion.active === false);
      setIsStatus(arr);
    } else {
      setIsStatus(prevPromotions);
    }
  };

  const handleChangeInputSearch = event => {
    const arr = promotions.filter(
      data => data.promotion.value.type === event.target.value
    );
    if (arr !== []) {
      setIsStatus(arr);
    } else {
      setIsStatus(promotions);
    }
  };

  return (
    <div className='container'>
      <h1>Danh Sách Mã Giảm Giá</h1>
      <div className='promotion_filter'>
        <div>
          <input
            onChange={e => handleChangeInputSearch(e)}
            style={{ marginRight: '10px' }}
            placeholder='Search...'
          />
          <select
            className='promotion_status'
            onChange={e => handleSelectStatus(e)}
          >
            <option value='all'>Tất cả</option>
            <option value='active'>Đang diễn ra</option>
            <option value='finished'>Đã kết thúc</option>
          </select>
        </div>
        <CreatePromotion />
      </div>
      <ul className='promotion promotion--title'>
        <li>
          <div className='promotion_list'>
            <div className='item'>Mã</div>
            <div className='item'>Số lượng</div>
            <div className='item'>Loại</div>
            <div className='item'>Tiêu chí</div>
            <div className='item item--time'>Thời gian</div>
            <div className='item item--email'>Người tạo</div>
            <div className='item'>Trạng thái</div>
            <div className='item'>Thao tác</div>
          </div>
        </li>
      </ul>
      <ul className='promotion'>
        {isStatus.map(data => {
          const startDate = new Date(data.promotion.startDate);
          const endDate = new Date(data.promotion.endDate);
          return (
            <li key={data._id}>
              <div className='promotion_list'>
                <div className='item item--code'>
                  {data.promotion.value.type}
                </div>
                <div className='item'>{data.promotion.limit}</div>
                <div className='item item--maxValue'>
                  Giảm {data.promotion.value.maxValue} đ
                </div>
                <div className='item'>
                  <p>Dành cho {data.promotion.target}</p>
                </div>
                <div className='item item--time'>
                  <p>
                    Từ: {startDate.getDate()}/{startDate.getMonth()}/
                    {startDate.getFullYear()} - {startDate.getHours()}:
                    {startDate.getMinutes()}:{startDate.getSeconds()}
                  </p>
                  <p>
                    Đến: {endDate.getDate()}/{endDate.getMonth()}/
                    {endDate.getFullYear()} - {endDate.getHours()}:
                    {endDate.getMinutes()}:{endDate.getSeconds()}
                  </p>
                </div>
                <div className='item item--email'>marketing@btaskee.com</div>
                <div
                  className={`item item--status ${
                    data.promotion.active ? 'active' : ''
                  }`}
                >
                  <p>
                    {data.promotion.active ? 'Đang diễn ra' : 'Đã kết thúc'}
                  </p>
                </div>
                <div className='item'>
                  {data.promotion.active ? (
                    <>
                      <button className='btn btn--edit'>Chỉnh sửa</button>
                      <button
                        onClick={() => onDelete(data._id)}
                        className='btn btn--end'
                      >
                        Kết thúc
                      </button>
                    </>
                  ) : (
                    <button className='btn'>Sao chép</button>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
