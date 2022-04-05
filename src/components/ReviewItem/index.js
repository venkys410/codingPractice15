import './index.css'

const ReviewItem = props => {
  const {reviewDetails} = props
  const {imgUrl, username, companyName, description} = reviewDetails
  return (
    <div className="review-container">
      <img src={imgUrl} alt={username} className="image" />
      <p className="name">{username}</p>
      <p className="company">{companyName}</p>
      <p className="para">{description}</p>
    </div>
  )
}

export default ReviewItem
