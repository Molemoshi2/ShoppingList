import { useGetListQuery } from "./service/accessjson";
function App() {
  const res = useGetListQuery();
  console.log(res)
  return (
    <>
      <div>
        <h1>Shopping List</h1>
        <input 
          type="text" 
          placeholder="Enter your item" 
        />
        <input type="number" placeholder='Quantity' min={0} step={1} /> 
        <select name="category" >
          <option value="category">category</option>
          <option value="food">Food</option>
          <option value="skin">Skin care</option>
          <option value="makeUp">Make up</option>
          <option value="clean">cleaning product</option>
          <option value="clothing">clothing</option>
          <option value="bathroom">bathroom</option>
        </select>
        <button>Add</button>
        <div>
          <p>display the list here</p>
        </div>
      </div>
    </>
  );
}

export default App;

