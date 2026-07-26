


export default function ExpertiseCategoriesContainer({ expertise_category__name, expertise_category__list }) {
  return (
    <div className="expertise_category__container">
      <div className="expertise_category__name">
        {expertise_category__name}
      </div>
      <div className="expertise_category__list">
        {expertise_category__list.map((list, index) => {
          return (
            <div key={index} className="expertise_category__list_item">{list.list_item__name}</div>
          );
        })}
      </div>
    </div>
  );
}
