import React from "react";
import {Query} from "react-apollo";
import {gql} from "apollo-boost";
import "./css/styles.css";

//Querying API using Hooks Method
const GET_CATEGORIES = gql`
query getCategories {
  results{
    id
    value
    categories
  }
}`;

//Hook query function:
function CategoriesWithHook(){
  const { loading, error, data } = useQuery(GET_CATEGORIES);
  //Error Handling
  if(error){
    return <div>Error Captured!</div>;
  }

  //if data is loading, display:
  if (loading) {
    return (
      <div className="App">
        <h2>Loading...</h2>
      </div>
    );
  }

  //else, if data is successfully pulled:
  if(data){
    if (data.categories.results.length > 0) {
      return(
        <div className="categories">
          {data.categories.results.map(category=>(
            <div key={category.value} className="category"></div>
          ))}
        </div>
      )
    }
  }
}

//export class
export default CategoriesWithHook;


//Old export default class code(do not use):
// export default function App() {
//   return (
//     <div className="App">
//       <h1>Categories</h1>
//       <h2>Chuck Norris Jokes</h2>
//     </div>
//   );
// }
