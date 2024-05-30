import styles from './Button.module.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{}


export function Button({ children, ...rest }: ButtonProps){
    return(
        <button className={styles.button} {...rest}>
            {children}
        </button>
    )
}