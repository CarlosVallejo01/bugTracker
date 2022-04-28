import PropTypes from 'prop-types'
const Button = ({ color, text, onClickF }) => {

  return (
        <button
        style= {{backgroundColor: color }}
        className='btn'
        onClick={onClickF}
        >
            {text}
        </button>
  )
}

Button.defaultProps = {
    color: 'black',
    text: "Button",
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClickF: PropTypes.func,
}
export default Button