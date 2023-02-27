/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ReviewCard from '../../components/reviews/ReviewCard';
import { getSingleTable } from '../../utils/data/api/tableData';

export default function TableReviewPage() {
  const router = useRouter();
  const { tableId } = router.query;
  const [reviews, setReviews] = useState([]);

  const getTheTable = () => {
    getSingleTable(tableId).then((res) => {
      setReviews(res.reviews);
      console.warn(res);
    });
  };

  useEffect(() => {
    getTheTable();
  }, []);

  return (
    <>
      {reviews?.map((review) => <ReviewCard key={review.id} review={review} />)}
    </>

  );
}
