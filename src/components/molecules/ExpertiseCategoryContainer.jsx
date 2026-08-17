import { useState } from 'react';



export default function ExpertiseCategoryContainer({expertise_category__name, expertise_category__list}) {
    return (
      <div className="expertise_category__container">
        <div className="expertise_category__name">
          <h3>
            {expertise_category__name}
          </h3>
        </div>
        <div className="expertise_category__list">
            {expertise_category__list.map((list, index) => {
                return (
                  <div key={index} className="expertise_category__list_item">
                    <p>
                      {list.list_item__name}
                    </p>
                  </div>
                )
            })}
        </div>
      </div>
    )
}
