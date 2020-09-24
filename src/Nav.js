import React from "react";

const Nav = ({ activeTab, onTabChange, items }) => {
  const itemClass = (tabName) =>
    `App-nav-item ${activeTab === tabName ? "selected" : ""}`;
  console.log( items.map(item => item.count) );
  console.log(items.length)
  return (
    <nav className="App-nav">
      <ul>
        <li className={itemClass("items")}>
          <button className='App-nav-button' onClick={() => onTabChange("items")}>Items</button>
        </li>
        <li className={itemClass("cart")}>
          <button className='App-nav-button' onClick={() => onTabChange("cart")}>Cart</button>
        </li>

        { items.length > 0 ?
          <li className='App-nav-cart'>
            <button onClick={() => onTabChange("cart")}>  
            
            {/* Item counter */}
            <i class="fas fa-shopping-cart"></i>&nbsp;
            {items.map(item => item.count)
                  .reduce((item, total) => (item+total), 0)}
            &nbsp;items(s)&nbsp;

            {/* Total counter */}
            (£{items.map(item => item.price*item.count)
                            .reduce((price, total) => (price + total), 0)})
            
            </button>
          </li>
        : ''
        }
      </ul>
         
    </nav>
  );
};

export default Nav;
