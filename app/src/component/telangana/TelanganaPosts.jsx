import React, { useState, useRef } from 'react';
import './TelanganaPosts.css';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const TelanganaPosts = () => {

  const [images, setImages] = useState([]);

  const handleImageUpload = (event) => {
    const uploadedImages = Array.from(event.target.files);
    setImages(uploadedImages);
  };



  // ------------------------------review---------------------- 
  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState('');
  const [image, setImage] = useState(null);
  const [date, setDate] = useState(10 - 10 - 2023)
  const [editIndex, setEditIndex] = useState(-1);

  const handleTextChange = (event) => {
    setReviewText(event.target.value);
  };

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    if (selectedImage) {
      setImage(URL.createObjectURL(selectedImage));
    }
  };

  const handleAddReview = () => {
    if (reviewText) {
      if (editIndex === -1) {
        setReviews([...reviews, { text: reviewText, image, date }]);
      } else {
        const updatedReviews = [...reviews];
        updatedReviews[editIndex] = { text: reviewText, image, date };
        setReviews(updatedReviews);
        setEditIndex(-1);
      }
      setReviewText('');
      setImage(null);
    }
  };

  const handleEditReview = (index) => {
    const review = reviews[index];
    setReviewText(review.text);
    setImage(review.image);
    setEditIndex(index);
    setDate(review.date)
  };

  const handleDeleteReview = (index) => {
    const updatedReviews = [...reviews];
    updatedReviews.splice(index, 1);
    setReviews(updatedReviews);
  };

  // -------------------------------review-para----------------
  const [myreviews, setMyReviews] = useState([]);
  const [reviewPara, setReviewPara] = useState('');
  const [selectedmyImages, setSelectedmyImages] = useState([]);
  const [editIndexs, setEditIndexs] = useState(-1);

  const handleParaChange = (e) => {
    setReviewPara(e.target.value);
  };

  const handleImageChanges = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setSelectedmyImages(selectedFiles);
  };
  // ... Your imports and other code ...

  const handleEditReviews = (index) => {
    const reviewToEdit = myreviews[index];
    setReviewPara(reviewToEdit.text); // Corrected from setReviewText
    setSelectedmyImages(reviewToEdit.images); // Populate images when editing
    setEditIndexs(index);
  };

  const handleAddReviews = () => {
    if (editIndexs === -1) {
      const newReview = {
        text: reviewPara,
        images: selectedmyImages.map((file) => URL.createObjectURL(file)),
      };
      setMyReviews([...myreviews, newReview]); // Corrected from reviews
    } else {
      const updatedReviews = myreviews.map((myreview, index) => {
        if (index === editIndexs) {
          return {
            ...myreview,
            text: reviewPara,
            images: selectedmyImages.map((file) => URL.createObjectURL(file)),
          };
        }
        return myreview;
      });
      setMyReviews(updatedReviews);
      setEditIndexs(-1);
    }

    setReviewPara(''); // Corrected from setReviewText
    setSelectedmyImages([]);
  };

  // ... Rest of your JSX code ...


  const handleDeleteReviews = (index) => {
    const updatedReviews = myreviews.filter((_, idx) => idx !== index);
    setMyReviews(updatedReviews);
  };


  //-------------- static reviews ------------------

  const HighlightReviewcards = [
    {
      sl: '01',
      username: 'raj kamal bind',
      rating: `&#11088;    `,
      titles: "A beautiful piece of architecture ",
      para: "This wasn't in my list and I had to visit this place because of a cab driver. I didn't regret it though They have a entry fee of around 25 INR ( not sure though ) and your baggage will be checked by para military before entering The lush green gardens and the tall building will make you fall in",
      visited: "25th May"

    },

    {
      sl: '02',
      username: 'raj kamal bind',
      rating: `&#11088;    `,
      titles: "A beautiful piece of architecture ",
      para: "This wasn't in my list and I had to visit this place because of a cab driver. I didn't regret it though They have a entry fee of around 25 INR ( not sure though ) and your baggage will be checked by para military before entering The lush green gardens and the tall building will make you fall in",
      visited: "25th march"

    },

    {
      sl: '03',
      username: 'raj kamal bind',
      rating: `&#11088;    `,
      titles: "A beautiful piece of architecture ",
      para: "This wasn't in my list and I had to visit this place because of a cab driver. I didn't regret it though They have a entry fee of around 25 INR ( not sure though ) and your baggage will be checked by para military before entering The lush green gardens and the tall building will make you fall in",
      visited: "25th January"
    }
  ]

  const Highlightcardss = ({ sl, username, rating, titles, para, visited }) => {
    return (
      <div className='statichighlightreview'>
        <p id='username'>{username}</p>
        <p id='rating'>&#11088; &#11088; &#11088; &#11088; &#11088;</p>
        <h2 id='title'>{titles}</h2>
        <p id='paraa'>{para}</p>
        <p id='Visted'>Visted:{visited}</p>
      </div>
    )
  }

  return (
    <>
      <div>

        <div className='allimagessss'>
          <h1>Sita Ramachandraswamy Temple</h1>
          <input type="file" multiple onChange={handleImageUpload} />
          {images.length > 0 && (
            <Carousel>
              {images.map((image, index) => (
                <div key={index}>
                  <img src={URL.createObjectURL(image)} alt={`Image ${index}`} />
                </div>
              ))}
            </Carousel>
          )}
        </div>



        {/* -----------------------------------highlight-review-cards------------------------ */}
        <div className='allreviewwwww'>
          <h2>Plan your visit</h2>
          <div className='reviewflexx'>
            {reviews.map((review, index) => (
              <div key={index} id='myreviewacrds'>
                {review.image && <img src={review.image} alt={`Review ${index}`} style={{ maxWidth: '400px' }} />}
                <p id='reviewTextss'>{review.text}</p>
                <p>Visited on {review.date}</p>
                <button onClick={() => handleEditReview(index)}>Edit</button>
                <button onClick={() => handleDeleteReview(index)}>Delete</button>
              </div>
            ))}
          </div>

          <h2>Write a Review</h2>
          <textarea value={reviewText} onChange={handleTextChange} className='meraTextarea' /><br />
          <input type="file" accept="image/*" onChange={handleImageChange} />
          <p>Visiting Date <br /> <input type="date" /></p>
          <button onClick={handleAddReview}>
            {editIndex === -1 ? 'Add Review' : 'Update Review'}
          </button>

        </div>

        {/* -----------------------------map----------------- */}
        <div className='mapTelangana'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888715.3444606243!2d76.63742289664948!3d17.858613921680227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3350db9429ed43%3A0x63ef7ba741594059!2sTelangana!5e0!3m2!1sen!2sin!4v1692006496075!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        {/* ------------------static carss---------------- */}
        <h1>See what other travellers are saying
        </h1>
        <div className='flexxhighlightstaticcards'>
          {HighlightReviewcards.map(highlightX => (
            <Highlightcardss key={highlightX.sl} {...highlightX} />
          ))}
        </div>


        {/* -----------------------review para ---------------------- */}
        <div>
          <h2>Contribute</h2>
          <textarea className='meraTextarea'
            value={reviewPara}
            onChange={handleParaChange}
            rows={6}
          /> <br />
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChanges}
          /> <br /> <br /> <br />
          <button onClick={handleAddReviews}>
            {editIndexs === -1 ? 'Add Review' : 'Update Review'}
          </button>

          <div>
            <h2>Reviews</h2>
            {myreviews.map((review, index) => (
              <div key={index} className="review-cardss">
                <p id='username'>Aghori</p>
                <p id='rating'>&#11088; &#11088; &#11088; &#11088; &#11088;</p>
                <p>{review.text}</p>
                <div className="image-container">
                  {review.images.map((image, imgIndex) => (
                    <img key={imgIndex} src={image} alt={`Image ${imgIndex}`} height={'60px'} width={'60px'} style={{ marginRight: '8px' }} />
                  ))}
                </div>
                <p id='miniPara'>This review is the subjective opinion of a Tripadvisor member and not of Tripadvisor LLC. Tripadvisor performs checks on reviews as part of our industry-leading trust & safety standards. Read our transparency report to learn more.</p>
                <button onClick={() => handleEditReviews(index)}>Edit</button>
                <button onClick={() => handleDeleteReviews(index)}>Delete</button>
              </div>
            ))}
          </div>
        </div>




      </div>
    </>
  )
}

export default TelanganaPosts




