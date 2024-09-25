import './App.css'

function App() {

  return (
    <>

      <div className='bg-white w-96 p-4 mx-auto my-24 rounded-xl'>

        <div className='flex justify-center my-5'>
          <input
            type="number"
            className='bg-gray-800 rounded-lg h-24 w-80 text-white p-1 text-right
            text-3xl font-semibold outline-none'
          />
        </div>
        <br />
        <div className='flex justify-center gap-1'>
          <button className='p-4 bg-gray-400 border border-black text-black rounded-lg w-20 text-xl font-semibold'>AC</button>
          <button className='p-4 bg-gray-400 border border-black text-black rounded-lg w-20 text-xl font-semibold'>DE</button>
          <button className='p-4 bg-gray-400 border border-black text-black rounded-lg w-20 text-xl font-semibold'>.</button>
          <button className='p-4 bg-gray-400 border border-black text-black rounded-lg w-20 text-xl font-semibold'>/</button>
        </div>
       
      </div>
    </>
  )
}


export default App
