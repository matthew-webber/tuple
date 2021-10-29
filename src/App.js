import NotScrollable from './menus/NotScrollable'
import Scrollable from './menus/Scrollable'

function App() {
  return (
    <div className='App'>
      <body className='overflow-hidden' style={{backgroundColor: '#4a1d96'}}>
        <div className='h-screen w-full overflow-auto pb-64 antialiased bg-gray-200'>
          <Scrollable />
          <NotScrollable />
        </div>
      </body>
    </div>
  )
}

export default App

// <div className='users-overlay'>
// </div>
