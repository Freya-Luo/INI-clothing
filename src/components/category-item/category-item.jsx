import './category-item.scss';

const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <div className='category-item-container'>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='category-body-container'>
        <div className='title'>{title}</div>
        <span className='subtitle'>SEE MORE</span>
      </div>
    </div>
  );
};

export default CategoryItem;
