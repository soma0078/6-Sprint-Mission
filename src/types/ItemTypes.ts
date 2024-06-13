export type Item = {
  id: number;
  name: string;
  images: string;
  favoriteCount: number;
  price: number;
};

export type OrderBy = 'recent' | 'favorite';

export type LikeButtonProps = {
  productId: string;
  isFavorite: boolean;
  favoriteCount: number;
};
