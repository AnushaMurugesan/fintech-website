import '../../sass/components/button.scss'
const Button = ({label , style , withoutPadding , bigPadding}) => {
    return(
        <div className={`btnContainer ${withoutPadding ? 'smallPadding' : 'bigPadding' }`} style={style}>
            {label}
        </div>
    )
}  
export default Button; 