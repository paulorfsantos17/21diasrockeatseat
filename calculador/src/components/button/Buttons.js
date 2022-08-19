import './Buttons.css'

const Buttons = (props) => {

  let classes = "button "
  classes += props.triplo ? "triplo " : ""
  classes += props.doublo ? "doublo " : ""
  classes += props.operation ? "operation " : ""

  return (
    
      <button className={classes}
        onClick={e => props.click && props.click(props.label) }>
        {props.label}
      </button>
    
  )
}

export default Buttons