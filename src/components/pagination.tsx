import React, { Component } from "react";
import '../index.css';
interface IPagination {
  amount: number,
  onPaginationClick(index:number): void;
}
class Pagination extends Component<IPagination, {}> {
  render() {
    const { amount: length, onPaginationClick } = this.props;
    console.log(length);
    const amount = Math.ceil(length / 4);
    const count = [];
    for (let i = 1; i <= amount; i++) count.push(i);

    return <div className="flex">
      {count.map(item => <div key={item} onClick={() => onPaginationClick(item)} className="border cursor-pointer border-blue-500 py-2 px-4 text-blue-500">{item}</div>)}
    </div>;
  }
}

export default Pagination;
