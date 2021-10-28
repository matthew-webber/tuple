import Pear from './menus/Pear'

function App() {
  return (
    <div className='App'>
      <body className='overflow-hidden' style={{backgroundColor: '#4a1d96'}}>
        <div className='h-screen w-full overflow-auto pb-64 antialiased bg-gray-200'>
          <Pear />
        </div>
      </body>
    </div>
  )
}

export default App
