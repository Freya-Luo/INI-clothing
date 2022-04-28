import { useNavigate } from 'react-router-dom';
import './category-item.scss';

const CategoryItem = ({ category }) => {
  const { imageUrl, title, linkUrl } = category;
  const navigate = useNavigate();

  return (
    <div className='category-item-container' onClick={() => navigate(linkUrl)}>
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
