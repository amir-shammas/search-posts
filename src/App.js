import { useState } from "react";

function App() {

  const [result, setResult] = useState([]);

  const [keyword, setKeyword] = useState("");

  const fetchAll = () => {

    // console.log("all posts");

    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));

    setResult([]);

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setResult(data));

  }

  const search = (allData) => {
    let selectedData = [];
    for(let item of allData){
      if(item.title.includes(keyword)){
          // console.log(item);
          selectedData.push(item);
      }
    }
    // console.log(selectedData);
    return selectedData;
  
  }

  const fetchKeyword = () => {

    setResult([]);

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(allData => search(allData))
      .then(data => setResult(data));
      
  }

  return (
    <>
 
      <div className="header">
        <span>کلمه کلیدی</span>
        <input type="text" onChange={(e) => setKeyword(e.target.value)} />
        <button onClick={fetchKeyword}>نمایش بر اساس کلمه کلیدی</button>
        <button onClick={fetchAll}>نمایش همه پست ها</button>
      </div>

      {/* <div className="result">
        <div className="post-id">post-id : 1</div>
        <div className="post-title">post-title : post-title-1</div>
        <div className="post-body">post-body : post-body-1</div>
      </div> */}

      <div className="result">
      {
        result && result.map((post, index) => {
          return (
              <div className="result-item" key={index}>
                <div>{post.id}</div>
                <div>{post.title}</div>
                <div>{post.body}</div>
                <hr />
              </div>
          )
        })
      }
      </div>

    </>
  );
}

export default App;
