import { Rating } from 'react-simple-star-rating'

export default function StartRating({ rating }) {
  return <Rating readonly="true" initialValue={rating} size="20" />
}
