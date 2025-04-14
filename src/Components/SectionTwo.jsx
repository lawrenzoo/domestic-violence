import { useState, useEffect } from 'react';
import testimonials from './CarouselData'; // Your data file

const SectionTwo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth <= 480) return 1;
      if (window.innerWidth <= 768) return 1;
      if (window.innerWidth <= 1024) return 2;
      return 2;
    };

    setItemsPerPage(updateItemsPerPage());

    const handleResize = () => setItemsPerPage(updateItemsPerPage());
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalPages);
    }, 10000);

    return () => clearInterval(interval);
  }, [totalPages]);

  const handleSelect = (index) => {
    setCurrentIndex(index);
  };

  const startIndex = currentIndex * itemsPerPage;
  const currentTestimonials = testimonials.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="carousel-container">
      <div className="card-container">
        <h4>Testimony</h4>
        <h1>Reviews from our clients</h1>
        <div className="carousel-card">
          <div className="carousel-track" style={{ transform: `translateX(0%)` }}>
            {currentTestimonials.map((item, index) => (
              <div className="card" key={index}>
                <div className="card-image" style={{ backgroundImage: `url(${item.image})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat', height:'300px', width:'300px'}}></div>
                <div className="card-testimony">
                  <h2>{item.name}</h2>
                  <div className="star-rates">
                    {[...Array(5)].map((_, i) => (
                      <img
                        key={i}
                        src="assets/noto-star.svg"
                        alt="star"
                        style={{ opacity: i < item.rating ? 1 : 0.3 }}
                      />
                    ))}
                  </div>
                  <div className="testimony">{item.message}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="carousel-btns">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => handleSelect(index)}
              className={`btn ${index === currentIndex ? 'active' : ''}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
