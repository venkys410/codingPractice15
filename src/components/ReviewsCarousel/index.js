// Write your code here
import {Component} from 'react'

import ReviewItem from '../ReviewItem/index'

import './index.css'

class ReviewsCarousel extends Component {
  state = {activeIndex: 0}

  onClickLeftArrow = () => {
    // const {reviewsList} = this.props
    const {activeIndex} = this.state
    if (activeIndex > 0) {
      this.setState(prevState => ({activeIndex: prevState.activeIndex - 1}))
    }
  }

  onClickRightArrow = () => {
    const {reviewsList} = this.props
    const {activeIndex} = this.state
    if (activeIndex < reviewsList.length - 1) {
      this.setState(prevState => ({activeIndex: prevState.activeIndex + 1}))
    }
  }

  render() {
    const {activeIndex} = this.state
    const {reviewsList} = this.props

    const reviewItem = reviewsList[activeIndex]

    return (
      <div className="app-container">
        <h1 className="heading">Reviews</h1>
        <div className="carousel-container">
          <button
            type="button"
            className="button"
            testid="leftArrow"
            onClick={this.onClickLeftArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow"
            />
          </button>
          <ReviewItem key={reviewItem.username} reviewDetails={reviewItem} />
          <button
            type="button"
            className="button"
            testid="rightArrow"
            onClick={this.onClickRightArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
