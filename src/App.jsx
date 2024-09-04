import { useGetAllItemsQuery } from "./service/accessjson";

function App() {
  const res = useGetAllItemsQuery();
  console.log(res.currentData);
  const myJsonData = res.currentData;

  return (
    <>
      <div>
        <h1>Shopping List</h1>
        <input 
          type="text" 
          placeholder="Enter your item" 
        />
        <input type="number" placeholder='Quantity' min={0} step={1} /> 
        <select name="category">
          <option value="category">Category</option>
          <option value="food">Food</option>
          <option value="skin">Skin care</option>
          <option value="makeUp">Make up</option>
          <option value="clean">Cleaning product</option>
          <option value="clothing">Clothing</option>
          <option value="bathroom">Bathroom</option>
        </select>
        <button>Add</button>
        <div>
          <p>Shopping List:</p>
          
            <div>
            {myJsonData?.map((item, index) => (
              <div className="task-container">
                <p key={index}>{item.id}.</p>
                <p key={index}>item: {item.item}</p>
                <p key={index}>quantity: {item.quantity}</p>
                <p key={index}>category: {item.category}</p>
              </div>
            ))}
            </div>
          
        </div>
      </div>
    </>
  );
}

export default App;
