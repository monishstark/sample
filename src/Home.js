import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/1/9a0e7b6b-c2b2-4d5a-b53b-b91abc618c191643724903538-USPA_Desk_Banner.jpg"
          alt=""
        />
        <div className="home_row">
          <Product
            id="00001"
            title="The Two Last Mountains "
            image="https://matthewreilly.com/wp-content/uploads/2021/10/9781760982416-196x300.jpg"
            price={200}
            info="The Two Last Mountains The Brand New Jack West Thriller Paperback by Matthew Reilly"
          />
          <Product
            id="00002"
            title="Nike"
            image="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16274210/2022/1/25/1e84f636-e0a9-4b62-9878-5333d47287291643093064810-Nike-Air-Max-90-Next-Nature-Mens-Shoes-7871643093064368-1.jpg"
            price={10000}
            info="Nike Men's Air Max 270 React Se Running Shoe"
          />
          <Product
            id="00003"
            title="Levis"
            image="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14322626/2021/6/15/e8b5f479-765c-4c9c-ac8c-8123927aef5a1623736080042JeansLevisMenTrousersLevisMenTrousersLevisMenTrousersLevisMe1.jpg"
            price={600}
            info="Men's Regular T-Shirt"
          />

          {/*product*/}
        </div>
        <div className="home_row">
          <Product
            id="00004"
            title="Apple iPhone 12 (64GB) - Black"
            image="https://m.media-amazon.com/images/I/71fVoqRC0wL._AC_UY327_FMwebp_QL65_.jpg"
            price={57000}
            info="IPhone 12 64GB Black"
          />
          <Product
            id="00005"
            title="OPPO A53 (Moonlight Black, 4GB RAM, 64GB Storage)
            OPPO A53 (Moonlight Black, 4GB RAM, 64GB Storage)"
            image="https://m.media-amazon.com/images/I/31DlTrldSnL._AC_UY327_FMwebp_QL65_.jpg"
            price={15000}
            info="	OPPO A53"
          />
          <Product
            id="00006"
            title="Samsung Galaxy Z Fold2 5G Mystic Bronze, 12GB RAM, 256GB Storage"
            image="https://m.media-amazon.com/images/I/71U9nzW+XsL._AC_UY327_FMwebp_QL65_.jpg"
            price={135000}
            info="Galaxy Z Series"
          />
          <Product
            id="00007"
            title="Samsung Galaxy S21 FE 5G (Lavender, 8GB, 128GB Storage)"
            image="https://m.media-amazon.com/images/I/8131pwAojZL._AC_UY327_FMwebp_QL65_.jpg"
            price={54000}
            info="Samsung Galaxy S21 FE 5G (Lavender, 8GB, 128GB Storage)"
          />
        </div>
        <div className="home_row">{/*product*/}</div>
      </div>
    </div>
  );
}

export default Home;
