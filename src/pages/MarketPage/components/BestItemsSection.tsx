import { useEffect, useState } from 'react';
import ItemCard from './ItemCard';
import { getProducts } from '../../../api/itemApi';
import LoadingSpinner from '../../../components/UI/LoadingSpinner';
import { Item } from '../../../types/ItemTypes';

const getPageSize = () => {
  const width = window.innerWidth;
  if (width < 768) {
    // Mobile viewport
    return 1;
  } else if (width < 1280) {
    // Tablet viewport
    return 2;
  } else {
    // Desktop viewport
    return 4;
  }
};

interface FetchSortedDataParams {
  orderBy: string;
  pageSize: number;
}

function BestItemsSection() {
  const [itemList, setItemList] = useState<Item[]>([]);
  const [pageSize, setPageSize] = useState(getPageSize());
  const [isLoading, setIsLoading] = useState(true);

  const fetchSortedData = async ({ orderBy, pageSize }: FetchSortedDataParams) => {
    setIsLoading(true);
    try {
      const page = 1;
      const products = await getProducts({ orderBy, page, pageSize });
      setItemList(products.list);
    } catch (error) {
      console.error('오류: ', (error as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setPageSize(getPageSize());
    };

    // 화면 크기 변경할 때마다 pageSize를 다시 계산해 넣음
    window.addEventListener('resize', handleResize);
    fetchSortedData({ orderBy: 'favorite', pageSize });

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [pageSize]);

  return (
    <>
      <LoadingSpinner isLoading={isLoading} />

      <div className="bestItemsContainer">
        <h1 className="sectionTitle">베스트 상품</h1>

        <div className="bestItemsCardSection">
          {itemList?.map((item) => (
            <ItemCard item={item} key={`best-item-${item.id}`} />
          ))}
        </div>
      </div>
    </>
  );
}

export default BestItemsSection;