import React from "react";
import { useState, useEffect } from "react";
import "./Booklist.css";

function Booklist({ language, getData }) {
  const [bookData, setBookData] = useState(null);

  useEffect(() => {
    const result = getData?.(language).then((response) => {
      setBookData(response);
      console.log(response);
    });
  }, [language, getData]);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>タイトル</th>
          <th>出版社</th>
          <th>著者</th>
          <th>ページ数</th>
          <th>発売日</th>
        </tr>
      </thead>
      <tbody>
        {bookData?.data.items.map((x, index) => (
          <tr key={index}>
            <td>{x.volumeInfo.title}</td>
            <td>{x.volumeInfo.publisher}</td>
            <td>{x.volumeInfo.authors}</td>
            <td>{x.volumeInfo.pageCount}</td>
            <td>{x.volumeInfo.publishedDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Booklist;
