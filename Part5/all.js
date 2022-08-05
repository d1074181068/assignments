const { createRoot } = ReactDOM
const { useState } = React
const arr = [...Array(4).keys()]
const root = createRoot(document.querySelector('.root'))

const App = () => {
  const [addClass, setAddClass] = useState('content action_content')
  const displayContent = () => {
    if (addClass === 'content action_content') {
      setAddClass('content action_content active')
    } else {
      setAddClass('content action_content')
    }
  }

  return (
    <div className='wrap'>
      <Header />
      <Banner />
      <main className='container'>
        <h2 className='section_title'>Section Title</h2>
        <Content />
        <button className='action_btn' onClick={displayContent}>
          Call to Action
        </button>
        <DisplayContent changClassName={addClass} />
      </main>
    </div>
  )
}
const Header = () => {
  const [handleList, setHandleList] = useState('nav_bar')
  const diplayNavBar = () => {
    if (handleList === 'nav_bar') {
      setHandleList('nav_bar active')
    } else {
      setHandleList('nav_bar')
    }
  }
  return (
    <header className='header'>
      <h1 className='logo'>
        <a href='#'>Website Title / Logo</a>
      </h1>
      <ul className={handleList}>
        <li>
          <i className='fas fa-times close_bar' onClick={diplayNavBar}></i>
        </li>
        {arr.map((item, index) => {
          return (
            <li>
              {' '}
              <a href='#'>Item {index + 1}</a>{' '}
            </li>
          )
        })}
      </ul>
      <i className='fas fa-bars humber_list' onClick={diplayNavBar}></i>
    </header>
  )
}

const Banner = () => {
  const [message, setMessage] = useState('Welcome Message')

  const changeText = () => {
    if (message === 'Welcome Message') {
      setMessage('Have a Good Time!')
    } else {
      setMessage('Welcome Message')
    }
  }

  return (
    <div className='banner' onClick={changeText}>
      {message}
    </div>
  )
}

const Content = () => {
  return (
    <ul className='content'>
      {arr.map((item, index) => {
        return (
          <li className={`content${index + 1}`}>Content Box {index + 1}</li>
        )
      })}
    </ul>
  )
}

const DisplayContent = (props) => {
  const { changClassName } = props
  return (
    <ul className={changClassName}>
      {arr.map((item, index) => {
        return (
          <li className={`content${index + 1}`}>Content Box {index + 1}</li>
        )
      })}
    </ul>
  )
}

root.render(<App />)
