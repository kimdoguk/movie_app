import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  { 
    id:1,
    name : "Kimchi",
    image : "https://cdn.imweb.me/thumbnail/20200415/6b6e035658bac.png",
    rating : 5.0
  },
  { 
    id:2,
    name : "Samgyeopsal",
    image : "https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2758_000_1%2F20131008174919162_BG17B8C2R.jpg%2F36_i1.jpg%3Ftype%3Dm4500_4500_fst_n%26wm%3DY%22&twidth=520&theight=388&opts=17",
    rating : 4.9
  },
  { 
    id:3,
    name : "Bibimbap",
    image : "https://ncc-phinf.pstatic.net/ncc02/2010/10/1/289/img01.jpg?type=f490_296",
    rating : 4.8
  },
  { 
    id:4,
    name : "Doncasu",
    image : "https://dbscthumb-phinf.pstatic.net/2765_000_327/20190128015352831_OOVYONN7H.jpg/2019565.jpg?type=m250&wm=N",
    rating : 5.5
  },
  { 
    id:5,
    name : "Kimbap",
    image : "https://dbscthumb-phinf.pstatic.net/2765_000_64/20181108175719831_RAAS5AUN5.jpg/32361.jpg?type=m250&wm=N",
    rating : 4.7
  }
];

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number
}

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food 
          key={dish.id} 
          name={dish.name} 
          picture={dish.image} 
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
