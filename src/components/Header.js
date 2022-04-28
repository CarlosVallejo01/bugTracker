import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {



  return (
      <header>
          <h1>Bug Tracker</h1>
          <Button color={showAdd ? 'red' : 'green'}
          text={showAdd ? 'Close' : 'Add'} onClickF={onAdd}/>
      </header>
  )
}
Header.defaultProps = {
    title: "Hi friend",
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

//const headerStyling = {color: 'red'};

export default Header