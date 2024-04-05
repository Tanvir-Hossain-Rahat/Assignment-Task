'use client';

export default function Carousel() {
    
    
    
    

        
    

    return (
      <>
        <div className="carousel-circle">
            <div className="slide active">
                <img src="./assets/pic1.png" alt="" />
            </div>
            <div className="slide next">
              <img src="./assets/pic2.png" alt="" />
            </div>
            <div className="slide nextt">
            <img src="./assets/pic3.png" alt="" />
            </div>
            <div className="slide last">
            <img src="./assets/pic4.png" alt="" />
            </div>
        </div>
      </>
    );
  }