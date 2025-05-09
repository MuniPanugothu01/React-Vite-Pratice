import React from "react";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import "./style.css";
const InfiniteScrolling = () => {
  const [dataScroll, setDataScroll] = useState(Array.from({ length: 20 }));
  const [hasMoreData, setHasMoreData] = useState(true);
  const ScrollNext = () => {
    if (dataScroll.length < 200) {
      // this is the condition where inifinite we want to set the condition
      // without using this condition, the data will come countinously
      setTimeout(() => {
        setDataScroll(dataScroll.concat(Array.from({ length: 20 })));
      }, 3000);
    } else {
      setHasMoreData(false);
    }
  };

  return (
    <>
      <h1>
        <u>infinite Scroll Bar</u>
      </h1>
      <InfiniteScroll
        dataLength={dataScroll.length}
        next={ScrollNext}
        hasMore={hasMoreData}
        loader={<p>Data Loading...</p>}
        endMessage={<p>Data Limit Completed!</p>}
      >
        {dataScroll.map((item, index) => {
          return (
            <div className="div1Scrolling">
              this is a div number is {index} times repeates it.
            </div>
          );
        })}
      </InfiniteScroll>
    </>
  );
};

export default InfiniteScrolling;
