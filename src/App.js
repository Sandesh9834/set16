//Consider the products data from previous question and display all the product details as unordered list for which the number of sales is more than the quantity.

//Order of items display can vary from the image shown below.

// import "./styles.css";

const products = [
  { name: "Perk", quantity: 10, sales: 7 },
  { name: "Pepsi", quantity: 10, sales: 20 },
  { name: "Coke", quantity: 18, sales: 50 },
  { name: "Maggi", quantity: 41, sales: 22 },
  { name: "5Star", quantity: 7, sales: 9 }
];

const ProductList = () => {
  // const { name, quantity, sales } = products;
  return (
    <div>
      <h4>
        Product details for which the number of sales is more than the quantity.
      </h4>
      <ul>
        {products
          .filter(({ quantity, sales }) => sales > quantity)
          .map(({ name, quantity, sales }) => (
            <li key={name}>
              Name : {name}, Quantity : {quantity}, Sales : {sales}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <ProductList />
    </div>
  );
}
